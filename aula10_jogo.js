const prompt = require('prompt-sync')();

console.log("===============================");
console.log("⚽   JOGO DA ADIVINHAÇÃO    ⚽")
console.log("===============================");

let nrsecreto = Math.floor(Math.random()*100) + 1;
let acertou = false;
let tentativas = 0;

while (acertou == false) {
    let chute = Number(prompt('digite um nº entre 1 e 100: '));
    if (chute == nrsecreto) {
                console.log(`parabens voce arcetou!!!! 🎇🎆✨🎉 mas mesmo assim isso nao vai preecher esse seu vazio🤣🤣😂🤣🤣😂`);
        acertou = true;   
    }else if (chute > nrsecreto ) {
        console.log(`voce chutou ${chute} , tente um numero menor  `); 
    }else if (chute < nrsecreto) {
        console.log(`voce chutou ${chute} tente um numero maior `);
        
    }
}