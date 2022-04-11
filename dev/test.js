const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

console.log('Genesis block');
console.log(bitcoin);

bitcoin.createNewBlock(5234, '0', 'K5BNJ34KJ345NM34');

bitcoin.createNewTransaction(2342, 'ER34JKN53443', '3N4O543KL');

bitcoin.createNewBlock(5235, 'I34UNJK24JK234', '2J342BHJ34JK32');

console.log(bitcoin);

const previousBlockHash = 'UI234NM4223KL';
const currentBlockData = [
    {
        amount: 10,
        sender: '23IN4J3KJ4LM3',
        recipient: 'N23JK43KL4M12'
    },
    {
        amount: 45,
        sender: '1N23MK2L3LK31K534',
        recipient: '34JK5O34L5OP43OMP'
    },
    {
        amount: 2,
        sender: '23IUN4MOL32M3EL2K',
        recipient: '1JK23N213K2112K132'
    }
]

const nonce = 43

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

const nonceHash = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

console.log(nonceHash);

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonceHash));