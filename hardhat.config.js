require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545", // Default RPC URL for Ganache
      // chainId: 1337,               // Default Chain ID for Ganache
      accounts: [
        "0x67b98318308cfaeb0c4bd40cdde1beb799ef4a73e6b980ef4f3f7207b7932825",
        // Add more private keys if needed
      ]
    },
  },
};
