const prompt = require('prompt-sync')();
 
let num1 = parseFloat(prompt('digite o primeiro numero: '));
let dobro = num1 * 2
let triplo = num1 * 3
let Aocubo = num1 **3
console.log (`o numero escolhido foi ${num1} o dobro é ${dobro} o triplo é ${triplo} e ao cubo é ${Aocubo}`);