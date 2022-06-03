require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space street cruise miss punch inside light army gas'; 
let testAccounts = [
"0xd0f4e86e451f87b19bcd8f92a535ce34720178e869403c51d6ecebfb44a56168",
"0x421703d3009dcd60f188951cbe93c293c11faffa0b97230f111f4ff9d5ae2d9e",
"0x317c75ebf380d87e82aa78deab01b652595e51e19bb95b2cfd3cf7d08540fcf3",
"0x9f603a85ca0a81e81cf28acf3935e24988b083cbcbef222863e156c9271fc900",
"0xa9950bdb849d50a7bacb7f95a38f061f64034507e7f4a1b463486accbe7f7223",
"0xd3fa740d6d8242b33bf733fc75ae2332271fcc47ba474554d41a7b94764acb67",
"0x9f72f9a2a96043ff1f3e34bc01da145ab7d96d7e4ee7d4e2f9988c1bb766bf0a",
"0xed0d8fed2b2607d94a74eed94b5f98213bd533b454fc3c9889d983912ed2f303",
"0x6450d4d7462e8c4fc7d45cbe31a3e430af2448908ac7dfd8d633a98110681f8f",
"0xd045ee2bae255a29db08bf483c812ceab8db411a3ed0157d2c389612c5ff9b50"
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

