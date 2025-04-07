const prompt = require('prompt-sync')();

let velocidade = Number(prompt('digite o primeiro numero'))
if (velocidade > 80) {
    console.log(`multado`)
    let multa = (velocidade - 80) * 7
    console.log(`sua multa é ${multa} R$`)
} else {
    console.log(`nao multado`)
}
