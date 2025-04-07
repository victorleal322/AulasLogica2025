const prompt = require('prompt-sync')();
 
let preço = parseFloat(prompt('qual o preço do produto ?: '));
let desconto = parseFloat(prompt('qual o valor do produto? : '));
let valorfinal =  preço / desconto 
console.log(`o valor final é ${valorfinal}`)
