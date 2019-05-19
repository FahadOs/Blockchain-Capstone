// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./contracts/verifier.sol");
var SolnSquareVerifier = artifacts.require("./contracts/SolnSquareVerifier.sol");
var FahadERC721Token = artifacts.require("./contracts/FahadERC721Token.sol");

module.exports = function(deployer) {
  deployer.deploy(FahadERC721Token)
  deployer.deploy(SquareVerifier)
  .then( () => {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address).then(()=> {
      console.log(SolnSquareVerifier.address);

    })
    
  });
}