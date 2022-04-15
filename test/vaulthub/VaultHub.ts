import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { VaultHub } from "../../src/types";
import { Signers } from "../types";
import { shouldBehaveLikeVaultHub } from "./VaultHub.behavior";

describe("Contract unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("VaultHub", function () {
    beforeEach(async function () {
      const vaultHubArtifact: Artifact = await artifacts.readArtifact("VaultHub");
      this.vaultHub = <VaultHub>await waffle.deployContract(this.signers.admin, vaultHubArtifact);
    });

    shouldBehaveLikeVaultHub();
  });
});
