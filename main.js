const Block = require('./block');
const BlockChain = require('./blockchain');

//let block = new Block(0, "Almacenar esto", null);

//console.log(block);

const blockchain = new BlockChain("Data de una nueva moneda");
blockchain.addBlock("Data del segundo bloque");
blockchain.addBlock("Data del tercero bloque");

console.log(blockchain);
