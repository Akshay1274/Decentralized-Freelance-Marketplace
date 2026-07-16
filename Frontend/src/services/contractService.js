import { Contract } from "ethers";
import contractJson from "../contracts/FreelanceMarketplace.json";
import { CONTRACT_ADDRESS } from "../contracts/contractAddress";
// import { getContract } from "./services/contractService";

export const getContract = (signer) => {
  return new Contract(
    CONTRACT_ADDRESS,
    contractJson.abi,
    signer
  );
};