const prompt = require('prompt-sync')();

let semana = prompt('digite um numero de 1 a 7:');
switch (semana) {
    case '1':
    console.log('domingo');
    break;
    case '2':
    console.log('segunda-feira');
    break;
    case '3':
    console.log('terça-feira');
    break;
    case '4':
    console.log('quarta-feira');
    break;
    case '5':
    console.log('quinta-feira');
    break;
    case '6':
    console.log('sexta-feira');
    break;
    case '7':
    console.log('sabado');
    break;
    console.log('operador invalido');
}