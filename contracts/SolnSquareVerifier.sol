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
       

Verifier verifier ; 
constructor
( 
    address verifierAddress 
)
public
{
    verifier = Verifier(verifierAddress);
}

function mintNewNFT(
                        address Address , 
                        uint32 id,
                        uint[2] memory a ,
                        uint[2] memory a_p ,
                        uint[2][2] memory b ,
                        uint[2] memory b_p ,
                        uint[2] memory c ,
                        uint[2] memory c_p ,
                        uint[2] memory h ,
                        uint[2] memory k ,
                        uint[2] memory input 
                    ) public returns (bool)
                    {
                        require(verifier.verifyTx(a,a_p, b , b_p,c, c_p,h,k, input));
                        bytes32 sol = keccak256(abi.encodePacked(a,a_p, b , b_p,c, c_p,h,k, input));
                        require(solutions[sol].Address == address (0) , "Exist" );
                        addSolution(sol , id , Address);
                        return mint(Address,id);
                    }
}











  


























