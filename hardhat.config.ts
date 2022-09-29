import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
};

export default config;
