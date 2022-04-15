// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import "hardhat/console.sol";

contract PrivateVault {
    address private signer;
    address private caller;

    //用来判断某个label是否已经存在
    mapping(address => bool) private labelExist;

    // 用来标示某个label被存储的位置
    mapping(uint16 => string) private labels;

    // 用来存储真实的加密数据
    mapping(address => string) private store;

    uint16 private total;

    modifier auth() {
        require(msg.sender == caller, "Caller is invalid");
        _;
    }

    constructor(address _signer, address _caller) {
        signer = _signer;
        caller = _caller;
        total = 0;
    }

    //cryptoLabel 是加密后的label值
    function save(string memory data, string memory cryptoLabel) auth external {
        address labelAddr = address(uint160(uint256(keccak256(abi.encodePacked(cryptoLabel)))));
        //label没有被使用过
        require(labelExist[labelAddr] == false, "Label has exist");

        store[labelAddr] = data;
        labels[total] = cryptoLabel;
        total++;
        labelExist[labelAddr] = true;
    }

    function getLabelByIndex(uint16 index) auth external view returns (string memory) {
        require(total > index, "Labels keys overflow");
        address _addr = address(uint160(uint256(keccak256(abi.encodePacked(labels[index])))));
        return store[_addr];
    }

    function getLabelByName(string memory name) auth external view returns (string memory) {
        address _addr = address(uint160(uint256(keccak256(abi.encodePacked(name)))));
        require(labelExist[_addr] == true, "Label no exist");

        return store[_addr];
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
        bytes memory bytecode = abi.encodePacked(type(PrivateVault).creationCode, abi.encode(addr, this));

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

    function savePrivateData(
        address addr,
        string memory data,
        string memory cryptoLabel
    ) external {
        bytes32 salt = keccak256(abi.encodePacked(addr));
        bytes memory bytecode = abi.encodePacked(type(PrivateVault).creationCode, abi.encode(addr, this));

        address vault = calculateVaultAddress(salt, bytecode);

        // 判断合约类型有效
        require(
            vault.code.length > 0 && vault.codehash == keccak256(abi.encodePacked(type(PrivateVault).runtimeCode)),
            "Deploy vault contract firstly"
        );

        PrivateVault(vault).save(data, cryptoLabel);
        emit Save(State.SAVE_SUCCESS, addr);
    }

    function canIndexRead( address addr, uint16 index, uint256 height, uint8 v, bytes32 r, bytes32 s) internal view returns(bool){
        require(block.number==height || block.number==height+1, "Height is invalid");

        bytes32 paramsHash = keccak256(abi.encodePacked(addr, index, blockhash(height)));
        bytes32 messageDigest = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", paramsHash));
        require(ecrecover(messageDigest, v, r, s) == addr, "Read signature date ERROR");

        return true;
    }

    function canNameRead( address addr, string memory label, uint256 height, uint8 v, bytes32 r, bytes32 s) internal view returns(bool) {
        require(block.number==height || block.number==height+1, "Height is invalid");

        bytes32 paramsHash = keccak256(abi.encodePacked(addr, label, blockhash(height)));
        bytes32 messageDigest = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", paramsHash));
        require(ecrecover(messageDigest, v, r, s) == addr, "Read signature date ERROR");

        return true;
    }

    function queryPrivateDataByIndex(address addr, uint16 index) external view returns (string memory) {
        bytes32 salt = keccak256(abi.encodePacked(addr));
        bytes memory bytecode = abi.encodePacked(type(PrivateVault).creationCode, abi.encode(addr, this));

        address vault = calculateVaultAddress(salt, bytecode);
        require(
            vault.code.length > 0 && vault.codehash == keccak256(abi.encodePacked(type(PrivateVault).runtimeCode)),
            "Deploy vault contract firstly"
        );

        return PrivateVault(vault).getLabelByIndex(index);
    }

    function queryPrivateDataByName(address addr, string memory label) external view returns (string memory) {
        bytes32 salt = keccak256(abi.encodePacked(addr));
        bytes memory bytecode = abi.encodePacked(type(PrivateVault).creationCode, abi.encode(addr, this));

        address vault = calculateVaultAddress(salt, bytecode);
        require(
            vault.code.length > 0 && vault.codehash == keccak256(abi.encodePacked(type(PrivateVault).runtimeCode)),
            "Deploy vault contract firstly"
        );

        return PrivateVault(vault).getLabelByName(label);
    }
}
