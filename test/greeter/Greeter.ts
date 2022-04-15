import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { Greeter } from "../../src/types";
import type { VaultHub } from "../../src/types";
import { Signers } from "../types";
import { shouldBehaveLikeGreeter, shouldBehaveLikeVaultHub } from "./Greeter.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Greeter", function () {
    beforeEach(async function () {
      const greeting: string = "Hello, world!";
      const greeterArtifact: Artifact = await artifacts.readArtifact("Greeter");
      const vaultHubArtifact: Artifact = await artifacts.readArtifact("VaultHub");
      this.greeter = <Greeter>await waffle.deployContract(this.signers.admin, greeterArtifact, [greeting]);
      this.vaultHub = <VaultHub>await waffle.deployContract(this.signers.admin, vaultHubArtifact);
    });

    shouldBehaveLikeVaultHub();
  });
});
