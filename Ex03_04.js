const prompt = require('prompt-sync')();

let mes = prompt('digite o nome do mes:'); //janeiro

if (mes == 'janeiro' || mes =='março' || mes == 'maio' || mes == 'julho' || mes == 'agosto' || mes == 'outubro' || mes == 'dezembro'){
    console.log('este mes tem 31 dias')
}else if (mes == 'fevereiro') {
    console.log('este mes tem 28 dias')
}else if (mes == 'abril' || mes == 'junho' || mes == 'setembro' || mes == 'novembro') {
    console.log('este  mes tem 30 dias')
}