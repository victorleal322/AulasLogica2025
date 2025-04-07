//estrutura de laço de repetiçao while
const prompt = require('prompt-sync')();

let resposta = 's';

while (resposta == 's') {
    console.log('voce esta dentro do bloco');
    resposta = prompt('deseja continuar ? s/n')
}

console.log('fim')

let senhasecreta = 'senai'
let senhadigitada 
while (senhasecreta == senhadigitada) {
    console.log('descubra a senha secreta')
    senhadigitada = prompt('qual é a senha')
}

let contador = 1;
while (contador <= 5) {
    console.log(`o contador esta nº ${contador}`);
    contador++;
}

let total = 0;
let qtde =0;
while (true) {
    let valor = Number(prompt(' digite o valor do produto (0 para encerrar)'));

    if (valor == 0) {
        break;
    }else {
        total = valor + total;
        qtde++;
    }
}

console.log(`foram informados ${qtde} produtos`)
console.log(`valor total ${total} produtos`)


//exercicios aula 10 
 
let valor = 10
while (valor > 0) {

    console.log(`o valor é ${valor}`)
    valor--
}


let numpar = 0;
let numimpar = 0;
let somapar = 0;
let somaimpar = 0;
while (num1 > 20) {

}if (true) {
    let num = Number(prompt('digite um numero: '))
    
    if (num == 0) {
    
    }
    if (num == 0) {
        
    }
if (num % 2 == 0) {
    numpar++;
    somapar = somaimpar + num;
}else {
    numimpar++;
    somapar = somaimpar + num;
}
}







