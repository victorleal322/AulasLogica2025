const prompt = require('prompt-sync')();

    let num1 = Number(prompt('digite o primeiro numero'))
    if (num1 > 0){
        console.log(`${num1} se for maior sera positivo`)
    }else {
        console.log(`${num1} se for menor sera negativo`)
    }