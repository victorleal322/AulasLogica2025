const prompt = require('prompt-sync')();

let anoatual = console.log = prompt('me de o ano atual = ')
let anonascido = console.log = prompt('me de o ano de seu nascimento = ')
let idade = (`${anoatual} - ${anonascido}`)
if (idade < 10 ){
    console.log(' voce é uma criança');
}else if (idade > 11 && idade < 17){
    console.log(' voce é um adolecente')
}else if (idade >= 18 && idade <= 59) {
    console.log('voce e um adulto')
}else if (idade > 60) {
    console.log('voce é um idoso')
}