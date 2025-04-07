const prompt = require('prompt-sync')();
 
let prova1 = parseFloat(prompt('digite o primeiro numero: '));
let prova2 = parseFloat(prompt('digite o primeiro numero: '));
let media = (prova1 + prova2) /2;
 
console.log (`a media foi ${media}`)