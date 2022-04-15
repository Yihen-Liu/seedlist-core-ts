import { BytesLike } from "@ethersproject/bytes";
import { Wordlist } from "@ethersproject/wordlists";
import { entropyToMnemonic, mnemonicToSeedSync } from "bip39";
import { expect } from "chai";
import { ethers } from "ethers";

import { GenBitcoinBrainWallet, GenEthereumBrainWallet } from "../../../seedlist-interface-ts/src/lib/brainwallet";

export function shouldBehaveLikeGreeter(): void {
  it("should return the new greeting once it's changed", async function () {
    expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Hello, world!");

    //ethers.utils.
    let messageHash = ethers.utils.id("Hello World");
    let messageHashBytes = ethers.utils.arrayify(messageHash);
    let flatSig = await this.signers.admin.signMessage(messageHashBytes);
    let sig = ethers.utils.splitSignature(flatSig);
    let recovered = await this.greeter.verifyHash(messageHash, sig.v, sig.r, sig.s);
    console.log(recovered);
    console.log("this.signer.addr:", await this.signers.admin.getAddress());
    await this.greeter.setGreeting("Bonjour, le monde!");
    expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Bonjour, le monde!");
  });
}

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
    await this.vaultHub.savePrivateData(address, "Hello Seedlist");
    console.log("query result:", await this.vaultHub.queryPrivateData(address));
    /*
    let recovered = await this.greeter.verifyHash(messageHash, sig.v, sig.r, sig.s);
    console.log(recovered);
    console.log("this.signer.addr:", await this.signers.admin.getAddress())
    await this.greeter.setGreeting("Bonjour, le monde!");
    expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Bonjour, le monde!");
*/
  });
}
