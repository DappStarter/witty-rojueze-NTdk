require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strong dash prefer protect kidney civil army gather'; 
let testAccounts = [
"0x4a1c124c8d5dc293e19b352498f75d4e896e40e46b75be4d622ab46703ea6e6f",
"0xf745dcd1e43594cd89e8520838e11d729607c3697171e91095d8abee040b4370",
"0xec0f3246e42a0a9cd35b128a2fbbb478c0b98d515f39969d85657cb16b018efe",
"0x85d574282d32e2ff6af94a3e169ed97cc75b9855de0d2f08395b212605a6f390",
"0x35d266e1a3a5e3086857ec53f50daf79f81d062cd396a66a762bbe0182ab2f9a",
"0x13d2b1dc4304490470f5c9a55f083d001c26b37d7ab7f57f8867314f177427af",
"0x58dc2f124102f19c4fe6ab0136ce10d74f6d511b5834910b84980a1b981af0ce",
"0x861b68a559541a57b9e3959d347ecb2102d563b0db3974d6cf95debd6dc63071",
"0x02776e4515f51b6724a70e8ca6497d93cc05e45154a9a5198bf01b45ea38c4bf",
"0xd2f26dc394459c769be34563a9c7dc8f4a79076aeafa515e326069f68b820c6f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

