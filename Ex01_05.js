const prompt = require('prompt-sync')();
 
let num1 = parseFloat(prompt('digite um  valor em metros: '));
let centimetro = num1 * 100
let km = num1 / 0.0001
let milimetro = num1 * 1000
console.log (` mostre o resultado em centimetro ${centimetro} em km ${km} e em milimetros ${milimetro}`)