const prompt = require('prompt-sync')();

let num1 = Number(prompt('digite o primeiro numero'))
if ( num1 > 5000){
    let tell = 5 /100 * num1
    console.log(`a comissao do vendedor é ${tell}`)
}else {
    let telldog = 3 /100 * num1
    console.log(`a comissao do vendedor é ${telldog}`)
}