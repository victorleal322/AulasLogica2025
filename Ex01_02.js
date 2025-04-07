const prompt = require('prompt-sync')();
 
let num1 = Number(prompt(' digite o primeiro numero: '));
let antecessor = (num1 - 1);
let sucessor = (num1 + 1);
console.log (`o numero escolhido foi ${num1} o antecessor é ${antecessor} o sucessor é ${sucessor}` );