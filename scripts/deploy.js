import { network } from "hardhat";

const { ethers } = await network.connect();

const contract = await ethers.deployContract("FreelanceMarketplace");

await contract.waitForDeployment();

console.log("Contract Address:", await contract.getAddress());