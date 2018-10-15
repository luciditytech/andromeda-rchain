var crypto = require('crypto');
var ed25519 = require('ed25519');


var seed = crypto.randomBytes(32);
var keyPair = ed25519.MakeKeypair(seed);

console.log('pub key:', keyPair.publicKey.toString('hex'));
console.log('PK key:', keyPair.privateKey.toString('hex'));