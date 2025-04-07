const prompt = require('prompt-sync')();

    let prova1 = Number(prompt('digite o primeiro numero'))
    let prova2 = Number(prompt('digite o segundo numero'))
    let soma = prova1 + prova2
    let media = soma /2
    if (media >= 7) {
        console.log(`sua media foi ${media} e foi aprovado`) 
    } else {
        console.log(`sua media foi ${media} e foi reprovado`)
    }


    