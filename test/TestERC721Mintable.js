var ERC721MintableComplete = artifacts.require('FahadERC721Token');

contract('FahadERC721Token', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    let tokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
    let tokenId = 1 ;
    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
            let resultMint = await this.contract.mint(account_one, 1);
            let resultMint2 = await this.contract.mint(account_one, 2);
            let resultMint3 = await this.contract.mint(account_one, 3);
            let resultMint4 = await this.contract.mint(account_one, 4);
  
        })

        it('should return total supply', async function () { 

             
            //console.log( this.contract);
            try{
                let result = await this.contract.totalSupply();
                assert.equal(result, 4, "Not correct!");
            }catch(e){
                console.log(e);
            }
             
        })

        it('should get token balance', async function () { 
            try{
                let balance = await this.contract.balanceOf(account_one);
                assert.equal(balance, 4, "account_one token balance is not correct");
                let balance2 = await this.contract.balanceOf(account_two);
                assert.equal(balance2, 0, "account_two token balance is not correct");
            }catch(e){
                console.log(e);
            }
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            try{
                let tokenUri = await this.contract.tokenURI(tokenId);
                assert.equal(tokenUri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "TokenUri not found!!")   
            }catch(e){
                console.log(e);
            }
        })

        it('should transfer token from one owner to another', async function () { 
            try{
                let result = await this.contract.transferFrom(account_one, account_two, 2);
                let owner = await this.contract.ownerOf(2);
                assert.equal(owner, account_two, "Owner wasn't transfered!");
            }catch(e){
                console.log(e);
            }
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try{
                let isFailed = true;   
                let resultMint4 = await this.contract.mint(account_one, 4); 
                assert.equal(isFailed, true, "address is not contract owner");
            }catch(e){
                console.log(e);
            }
        })

        it('should return contract owner', async function () { 
            try{
                let result = await this.contract.isOwner({from: account_one}); 
                assert.equal(result, true, "Not returned the owner!!");
            }catch(e){
                console.log(e);
            }
        })

    });
})