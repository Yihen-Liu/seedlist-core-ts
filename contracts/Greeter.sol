// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";

error GreeterError();

contract Saver {
    string public name;

    function setName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }
}

contract Greeter {
    string public greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function throwError() external pure {
        revert GreeterError();
    }
}

contract PrivateVault {
    address private signer;
    //用来存储标签
    string[] private labels;
    mapping(address => string) private _store;
    mapping(address => address) private destination;

    constructor(address addr) {
        signer = addr;
    }

    function _save(string memory data) external {
        _store[signer] = data;
    }

    function _query() external view returns (string memory) {
        return _store[signer];
    }
}

contract VaultHub {
    enum State {
        INIT_SUCCESS,
        SAVE_SUCCESS
    }
    event VaultInit(State indexed result, address indexed signer);
    event Save(State indexed result, address indexed signer);

    function calculateVaultAddress(bytes32 salt, bytes memory bytecode) internal view returns (address) {
        return
            address(
                uint160(
                    uint256(
                        keccak256(
                            abi.encodePacked(bytes1(0xff), address(this), salt, keccak256(abi.encodePacked(bytecode)))
                        )
                    )
                )
            );
    }

    function initPrivateVault(
        address addr,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (bool) {
        //1. 计算 addr的hash 计为addrHash
        bytes32 addrHash = keccak256(abi.encodePacked(addr));
        //2. 计算数字hash
        bytes32 messageDigest = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", addrHash));

        //3. 判断ecrecover的结果地址是否和addr等值; 如果否，直接revert
        require(ecrecover(messageDigest, v, r, s) == addr, "Signature date ERROR");

        //4. 计算private vault的地址, 记为vaultAddr
        bytes32 salt = keccak256(abi.encodePacked(addr));
        bytes memory bytecode = abi.encodePacked(type(PrivateVault).creationCode, abi.encode(addr));

        address vaultAddr = calculateVaultAddress(salt, bytecode);
        console.log("calculate addr:", vaultAddr);
        //5. 判断vaultAddr没有合约存在，若存在则直接返回；
        require(vaultAddr.code.length == 0, "Vault contract has been deployed");

        //6. create2 部署合约
        address vault;
        assembly {
            vault := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        if (vault == address(0)) {
            //合约create2失败
            revert("Create2 private vault ERROR");
        }

        emit VaultInit(State.INIT_SUCCESS, addr);

        return true;
    }

    function savePrivateData(address addr, string memory data) external {
        bytes32 salt = keccak256(abi.encodePacked(addr));
        bytes memory bytecode = abi.encodePacked(type(PrivateVault).creationCode, abi.encode(addr));

        address vault = calculateVaultAddress(salt, bytecode);

        // 判断合约类型有效
        require(
            vault.code.length > 0 && vault.codehash == keccak256(abi.encodePacked(type(PrivateVault).runtimeCode)),
            "Deploy vault contract firstly"
        );

        PrivateVault(vault)._save(data);
        emit Save(State.SAVE_SUCCESS, addr);
    }

    function queryPrivateData(address addr) external view returns (string memory) {
        bytes32 salt = keccak256(abi.encodePacked(addr));
        bytes memory bytecode = abi.encodePacked(type(PrivateVault).creationCode, abi.encode(addr));

        address vault = calculateVaultAddress(salt, bytecode);
        require(
            vault.code.length > 0 && vault.codehash == keccak256(abi.encodePacked(type(PrivateVault).runtimeCode)),
            "Deploy vault contract firstly"
        );

        return PrivateVault(vault)._query();
    }
}
