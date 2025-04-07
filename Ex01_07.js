const prompt = require('prompt-sync')();
 
let num1 = parseFloat(prompt('quanto de dinheiro voce tem na carteira: '));
let dolar = num1 / 5.79
console.log (` o valor que voce tem de dolares é ${dolar} `)
