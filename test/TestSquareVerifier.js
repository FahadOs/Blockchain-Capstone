// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
let Verifier = artifacts.require('Verifier');
// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
var proof = {
	"proof":
	{
		"A":["0x10ebf50fa2d265eb14b72efb98d4e8b181b8c626cedbae1b2133a105f6ae4738", "0x20c20f55ae3ed4c16255a208379ca2098693e32141e09f019f07923344444bd1"],
		"A_p":["0x2af3a8108f7d632dc9abfce6f973b8df1982348b28740c6ae58fcab9077ee94f", "0x06c7b079c30870ac424fcb0b188f3534d5a02b96434e28925a67f4ee955511d2"],
		"B":
			[["0x29c441c1d7750ef34626a3be6a283c20d6f508f6a7fc34258c3407162670f02c", "0x0167af0f2a66d253c71f438bb57ec70969a396ab8f4f03fe867be831c3553665"], ["0x0c9bc19bbaa5eaca68303eb5ccc9b36d095a4a3c6aed88ec5e14a06a83e006bd", "0x0f9d71e14a5c668f33c51880d68a8468510eb76fb976316c3d600f0158f0bdd0"]],
		
		"B_p":["0x283fdb93348c06cec626f0e87cd0046ae09d919edd336bb7a40523251f0068e9", "0x18ef3a9f0b32dbf03db14bcafedf378e950f7b8a4bc5f0252bea5886961700de"],
		"C":["0x05062f9ca1532f74f591b431b3c9bd57ec924526dae68331213aa9186be6eadc", "0x180dcb72c0d6b2a31555057a9dcb39109be27970c12673b255e9a7121524ae30"],
		"C_p":["0x0898728d802cdc48738bbdcd7ab904c51a0af52f7d20d91383e3e7cbd95226ec", "0x1b4f2acbeabeaef1e75df45e3c457b54e66338be1eba001555203c445ac327da"],
		"H":["0x04556a8d38ca05f9e78407eb29ff6c718382488344a5eac68854c0c11e3d9edd", "0x14abe1bf6d21c881bda18c2594ad9adf380df4b22d2e7d8d7bcd55ba7be760f6"],
		"K":["0x19df94fa2a5089fbbd303fabf505e5641426635d4320031c12df3f5f81e1c7ea", "0x18441f164a880b4abb654d8e4789e4f53ca6fd966a7221ffcde02670fbf1dcea"]
	},
	"input":[0000000000000000000000000000000000000000000000000000000000000009,0000000000000000000000000000000000000000000000000000000000000001]
};
    

contract('Verifier', accounts => {
    const account = accounts[0];
    const incorrectProofInput = [1,2];

    describe('Testing Verifier', function () {
        beforeEach(async function () {
            this.contract = await Verifier.new({from: account});
        });

        // Test verification with incorrect proof
        it('Test verification with incorrect proof', async function () {
            let isVerified = await this.contract.verifyTx.call(
                proof["proof"]["A"],
                proof["proof"]["A_p"],
                proof["proof"]["B"],
                proof["proof"]["B_p"],
                proof["proof"]["C"],
                proof["proof"]["C_p"],
                proof["proof"]["H"],
                proof["proof"]["K"],
                incorrectProofInput,
                {from: account});
            assert.equal(isVerified, false, "it's correct");
        });


        //You need to implement the following test: Test verification with correct proof
        it('Test verification with incorrect proof', async function () {
            let isVerified = await this.contract.verifyTx.call(
                proof["proof"]["A"],
                proof["proof"]["A_p"],
                proof["proof"]["B"],
                proof["proof"]["B_p"],
                proof["proof"]["C"],
                proof["proof"]["C_p"],
                proof["proof"]["H"],
                proof["proof"]["K"],
                proof["input"],
                {from: account});
            assert.equal(isVerified, true, "it's not correct");
        });
    });

})


