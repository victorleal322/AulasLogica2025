const prompt = require('prompt-sync')();

    let num1 = Number(prompt('digite o primeiro numero'))
    let num2 = Number(prompt('digite o segundo numero'))
    if (num1 > num2) {
        console.log(`${num1} maior sera verdadeiro`)
    } else {
        console.log(`${num2} for maior sera falso`)
    }