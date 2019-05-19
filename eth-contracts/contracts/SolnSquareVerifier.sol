pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./ERC721Mintable.sol";
import "./verifier.sol";
// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is FahadERC721Token{
// TODO define a solutions struct that can hold an index & an address
struct solution {
    uint256 id;
    address Address;
}

// TODO define an array of the above struct
// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => solution)private solutions;

// TODO Create an event to emit when a solution is added
event solutionWasAdded(address solution);



// TODO Create a function to add the solutions to the array and emit the event
function addSolution(bytes32 sol , uint32 id, address Address) public{
    solutions[sol] = solution(
        {
            id : id ,
            Address : Address
        }
    );
    emit solutionWasAdded(Address);
}


Verifier contractVerifier ; 
constructor
(
    address contractVerifierAddress 
)
public
{
    contractVerifier = Verifier(contractVerifierAddress);
}

function miniNewNFT(
                        address Address , 
                        uint256 id,
                        uint[2] memory a ,
                        uint[2] memory b ,
                        uint[2] memory c ,
 
                        uint[2] memory input 
                    ) public returns (bool)
                    {
                        require(contractVerifier.verifyTx(a,b,c,input));
                        bytes32 sol = keccak256(abi.encodePacked(a,b,c,input));
                        require(solutions[sol].Address == address (0) , "Exist" );
                        addSolution(sol , id , Address);
                        return mint(Address,id, "url");
                    }
}











  


























