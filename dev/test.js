const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(5234, '546JKN345NK34', 'K5BNJ34KJ345NM34');

bitcoin.createNewTransaction(2342, 'ER34JKN53443', '3N4O543KL');

bitcoin.createNewBlock(5235, 'I34UNJK24JK234', '2J342BHJ34JK32');

console.log(bitcoin);