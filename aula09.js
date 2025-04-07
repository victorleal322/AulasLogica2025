//estruturas condicionais aninhadas
//switch case
const prompt = require(' prompt-sync')

let valorcompra = 120;
let clientevip = true;

if (valorcompra >= 100) {
if (clientevip == true) {
    console.log(`voce ganhou r$ ${valorcompra * 0.1}`);
}else {
let desconto = valorcompra * 5 / 100;
console.log(`voce ganhou r$ ${desconto} de desconto`)
}

}else {
    let restante = 100 - valorcompra;
    console.log(`compre mais r$ ${restante} e ganhe desconto`);
}

let idade = console.log = prompt('qual sua idade = ')
if (idade < 16 ){
    console.log(' voce nao pode votar');
}else if (idade > 16 && idade < 18){
    console.log(' voto facultativo')
}else if (idade >= 18 && idade <= 70) {
    console.log(' voto obrigatorio')
}else if (idade > 70) {
    console.log('voto facultativo')
}


//switch case é uma alternativa ao if else
let n1 = Number(prompt('digite um nº:'));
let n2 = Number(prompt('digite outro nº:'));
let op = prompt('digite o operador ( + - / * ** ):');
switch (op) {
    case '+':
    console.log(n1 + n2);
    break;
    case '+':
    console.log(n1 - n2);
    break;
    case '-':
    console.log(n1 / n2);
    break;
    case '/':
    console.log(n1 * n2);
    break;
    case '**':
    console.log(n1 ** n2);
    break;
    default:
    console.log('operador invalido');
}