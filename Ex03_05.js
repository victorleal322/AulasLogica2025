const prompt = require('prompt-sync')();

let nota1 = Number(prompt('me de sua 1º nota = '))
let nota2 = Number(prompt('me de sua 2º nota = '))
let resultado = (nota1 + nota2)
let media = (resultado /2 )
if (media  > 7 ) {
    console.log(' voce esta aprovado');
}else if (media > 5 && media <= 7){
    console.log(' voce esta de recuperacao ')
}else if (media < 5) {
    console.log('voce esta reprovado')
}
