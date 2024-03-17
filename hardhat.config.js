require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("dotenv/config");

module.exports = {
    solidity: {
      compilers: [
        {
          version: "0.6.12",
          settings: {
            optimizer: {
              enabled: true,
              runs: 200,
            },
          },
        },
        {
          version: "0.8.13",
          settings: {
            optimizer: {
              enabled: true,
              runs: 200,
            },
          },
        },
      ],
      },
    defaultNetwork: "mainnet",
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    
    networks: {
        mainnet: {
            url: `${process.env.ETH1_NODE_RPC}`,
            accounts:[process.env.PRIVATEKEY_DEPLOYERADDRESS]
        },
    },
    mocha: {
      timeout: 400000000
    }

}