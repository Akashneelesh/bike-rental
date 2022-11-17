require("@nomiclabs/hardhat-waffle");
// require('dotenv').config()


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    testnet: {
      url: "https://speedy-nodes-nyc.moralis.io/ae1154977cde3335fed0e421/bsc/testnet",
      accounts: ["0132f75662c441c81027bdc3cdfc93b2868da8de080d71c39f4d86158a612061"],
    }
  }
};
