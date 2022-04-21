import { BytesLike } from "@ethersproject/bytes";
import { Wordlist } from "@ethersproject/wordlists";
import { entropyToMnemonic, mnemonicToSeedSync } from "bip39";
import { expect } from "chai";
import { ethers } from "ethers";

import { GenBitcoinBrainWallet, GenEthereumBrainWallet } from "../../../seedlist-interface-ts/src/lib/brainwallet";

function calculateSolidityPermitHash() {
  console.log("base-permit:", ethers.utils.solidityKeccak256(["string"], ["permit(uint deadline)"]));
  console.log(
    "save-permit:",
    ethers.utils.solidityKeccak256(
      ["string"],
      ["savePrivateDataWithoutMinting(address addr, string memory data, string memory cryptoLabel, uint deadline)"],
    ),
  );
  console.log(
    "mint-save-permit:",
    ethers.utils.solidityKeccak256(
      ["string"],
      [
        "savePrivateDataWithMinting(address addr, string memory data, string memory cryptoLabel, address receiver, uint deadline)",
      ],
    ),
  );
  console.log(
    "index-query-permit:",
    ethers.utils.solidityKeccak256(["string"], ["queryPrivateDataByIndex(address addr, uint16 index, uint deadline)"]),
  );
  console.log(
    "name-query-permit:",
    ethers.utils.solidityKeccak256(
      ["string"],
      ["queryPrivateDataByName(address addr, string memory label, uint deadline)"],
    ),
  );
  console.log(
    "init-vault-permit:",
    ethers.utils.solidityKeccak256(["string"], ["initPrivateVault(address addr, uint deadline)"]),
  );
  console.log(
    "domain:",
    ethers.utils.solidityKeccak256(
      ["string"],
      ["EIP712Domain(string name, string version, uint256 chainId, address VaultHubContract)"],
    ),
  );
}

export function shouldBehaveLikeVaultHub(): void {
  it("should return the new private vault", async function () {
    calculateSolidityPermitHash();
    return;
    let wallets = GenEthereumBrainWallet(0, 10, "Hello world");
    console.log("node.privateKey:", wallets.privkeys[0]);
    //ethers.utils.
    let privateKey = wallets.privkeys[0];
    let wallet = new ethers.Wallet(privateKey);
    let address = await wallet.getAddress();
    let deadline = Date.parse(new Date().toString()) / 1000 + 3;

    let DOMAIN = await this.vaultHub.DOMAIN_SEPARATOR();
    let INIT_VAULt_PERMIT = await this.vaultHub.INIT_VAULT_TYPE_HASH();
    let _combineMessage = ethers.utils.solidityKeccak256(
      ["address", "uint", "bytes32", "bytes32"],
      [address, deadline, DOMAIN, INIT_VAULt_PERMIT],
    );
    let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(_combineMessage.toLowerCase()));

    let messageHashBytes = ethers.utils.arrayify(messageHash);
    let flatSig = await wallet.signMessage(messageHashBytes);
    let sig = ethers.utils.splitSignature(flatSig);

    await this.vaultHub.initPrivateVault(address, deadline, sig.v, sig.r, sig.s);

    let MINT_SAVE_PERMIT = await this.vaultHub.MINT_SAVE_PERMIT_TYPE_HASH();
    let combineMessage = ethers.utils.solidityKeccak256(
      ["address", "string", "string", "address", "uint", "bytes32", "bytes32"],
      [address, "Hello world", "label1", address, deadline, DOMAIN, MINT_SAVE_PERMIT],
    );
    let msgHash = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage.toLowerCase()));

    let msgHashBytes = ethers.utils.arrayify(msgHash);
    let flatSignature = await wallet.signMessage(msgHashBytes);
    let signature = ethers.utils.splitSignature(flatSignature);
    await this.vaultHub.savePrivateDataWithMinting(
      address,
      "Hello world",
      "label1",
      address,
      deadline,
      signature.v,
      signature.r,
      signature.s,
    );

    let SAVE_PERMIT = await this.vaultHub.SAVE_PERMIT_TYPE_HASH();
    let combineMessage0 = ethers.utils.solidityKeccak256(
      ["address", "string", "string", "uint", "bytes32", "bytes32"],
      [address, "Hello world0", "label2", deadline, DOMAIN, SAVE_PERMIT],
    );
    let msgHash0 = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage0.toLowerCase()));

    let msgHashBytes0 = ethers.utils.arrayify(msgHash0);
    let flatSignature0 = await wallet.signMessage(msgHashBytes0);
    let signature0 = ethers.utils.splitSignature(flatSignature0);
    await this.vaultHub.savePrivateDataWithoutMinting(
      address,
      "Hello world0",
      "label2",
      deadline,
      signature0.v,
      signature0.r,
      signature0.s,
    );

    let INDEX_QUERY_PERMIT = await this.vaultHub.INDEX_QUERY_PERMIT_TYPE_HASH();
    let combineMessage1 = ethers.utils.solidityKeccak256(
      ["address", "uint16", "uint", "bytes32", "bytes32"],
      [address, 0, deadline, DOMAIN, INDEX_QUERY_PERMIT],
    );
    let msgHash1 = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage1.toLowerCase()));
    let msgHashBytes1 = ethers.utils.arrayify(msgHash1);
    let flatSignature1 = await wallet.signMessage(msgHashBytes1);
    let signature1 = ethers.utils.splitSignature(flatSignature1);
    let val1 = await this.vaultHub.queryPrivateDataByIndex(
      address,
      0,
      deadline,
      signature1.v,
      signature1.r,
      signature1.s,
    );
    console.log("query by index 0:", val1);

    let NAME_QUERY_PERMIT = await this.vaultHub.NAME_QUERY_PERMIT_TYPE_HASH();
    let combineMessage2 = ethers.utils.solidityKeccak256(
      ["address", "string", "uint", "bytes32", "bytes32"],
      [address, "label2", deadline, DOMAIN, NAME_QUERY_PERMIT],
    );
    let msgHash2 = ethers.utils.keccak256(ethers.utils.arrayify(combineMessage2.toLowerCase()));
    let msgHashBytes2 = ethers.utils.arrayify(msgHash2);
    let flatSignature2 = await wallet.signMessage(msgHashBytes2);
    let signature2 = ethers.utils.splitSignature(flatSignature2);
    let val2 = await this.vaultHub.queryPrivateDataByName(
      address,
      "label2",
      deadline,
      signature2.v,
      signature2.r,
      signature2.s,
    );
    console.log("query by label2:", val2);
  });
}
