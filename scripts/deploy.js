const hre = require("hardhat");

async function main() {
    const Contract = await hre.ethers.getContractFactory("Storage");
    const myContract = await Contract.deploy();

    await myContract.waitForDeployment();

    console.log("Contract deployed to :" , await myContract.getAddress())

}

main()