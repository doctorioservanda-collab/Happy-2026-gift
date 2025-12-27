import { ethers } from 'ethers';

// Blockchain utility functions
export const getProvider = () => {
  // TODO: Configure provider based on network
  return new ethers.JsonRpcProvider(process.env.RPC_URL);
};

export const getContract = (address, abi, signer) => {
  return new ethers.Contract(address, abi, signer);
};

export const formatEther = (value) => {
  return ethers.formatEther(value);
};

export const parseEther = (value) => {
  return ethers.parseEther(value);
};