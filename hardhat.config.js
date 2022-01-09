require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
let fs = require("fs");

let config = JSON.parse(fs.readFileSync("./params", "UTF-8"));

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0"
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: ""+config.MAINNET_RPC,
      accounts: [config.ACCOUNT]
    },
    matic: {
      url: ""+config.MATIC_RPC,
      accounts: [config.ACCOUNT]
    },
    ropsten: {
      url: ""+config.ROPSTEN_RPC,
      accounts: [config.ACCOUNT]
    }
  }
};
