const prompt = require('prompt-sync')();
 
let num1 = parseFloat(prompt('quantos metros de altura tem a parede: '));
let num2 = parseFloat(prompt('quantos metros de largura tem a parede: '));
let area = num1 * num2
let tinta = area /2 

console.log (` a area ${area} metros quadrados, ja a quantidade necessaria de tinyta é de ${tinta} litros`)