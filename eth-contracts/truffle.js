var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "erupt artist almost until venture slice drift slide question dolphin tiger lift";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*',
      gas: 9999999
    },
    rinkeby: {
      provider: function() {
     return new HDWalletProvider("amateur filter wrap genius path journey horror palm pumpkin senior yellow menu", "rinkeby.infura.io/v3/cc80e79fe4e74d2c9b3a30c1e9340c41")
         },
          network_id: '4',
          gas: 4500000,
          gasPrice: 10000000000,
        }
  },
  compilers: {
    solc: {
      version: "^0.5.3"
    }
  }
};
