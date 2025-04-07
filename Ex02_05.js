const prompt = require('prompt-sync')();

    let idade = Number(prompt('digite o primeiro numero'))
    if (idade >= 18){
        console.log(`${idade}  ela pode dirigir`)
    }else{
        console.log(`${idade}  ela nao pode dirigir`)
    }