import { BytesLike } from "@ethersproject/bytes";
import { Wordlist } from "@ethersproject/wordlists";
import { entropyToMnemonic, mnemonicToSeedSync } from "bip39";
import { expect } from "chai";
import { ethers } from "ethers";

import { GenBitcoinBrainWallet, GenEthereumBrainWallet } from "../../../seedlist-interface-ts/src/lib/brainwallet";

export function shouldBehaveLikeVaultHub(): void {
  it("should return the new private vault", async function () {
    let wallets = GenEthereumBrainWallet(0, 10, "Hello world");
    console.log("node.privateKey:", wallets.privkeys[0]);
    //ethers.utils.
    let privateKey = wallets.privkeys[0];
    let wallet = new ethers.Wallet(privateKey);
    let address = await wallet.getAddress();

    let messageHash = ethers.utils.keccak256(ethers.utils.arrayify(address.toLowerCase()));

    let messageHashBytes = ethers.utils.arrayify(messageHash);
    let flatSig = await wallet.signMessage(messageHashBytes);
    let sig = ethers.utils.splitSignature(flatSig);

    await this.vaultHub.initPrivateVault(address, sig.v, sig.r, sig.s);
    await this.vaultHub.savePrivateData(address, "Hello Seedlist1", "label1",true);
    await this.vaultHub.savePrivateData(address, "Hello Seedlist2", "label2", true);
    console.log("query result by name:", await this.vaultHub.queryPrivateDataByName(address, "label2"));
    console.log("query result by index:", await this.vaultHub.queryPrivateDataByIndex(address, 0));
  });
}
