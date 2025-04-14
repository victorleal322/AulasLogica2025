const prompt = require('prompt-sync')();
//interação sobre  nossos vetores (arrays / listas)

//vetor          0        1          2         3
let frutas = ['maça', 'banana' , 'abacaxi' , 'uva'];
//para interar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
    console.log(`a fruta da posição ${x} é ${frutas[x]}`);
}
console.log('fim')

// interando sonre uma lista usando o for of
let listajogadores = ['pele' , 'maradona' , 'messi' , 'cristiano']
for (let jogador of listajogadores) {
    console.log(`o jogador é ${jogador}`)
}




let simnao = [1 , 4 , 2 , 3 , 5]
let soma = 0
for (let sim of simnao) {
    console.log(` é ${sim}`)
    soma = sim + soma
}
console.log(`${soma}`)

//verificando se um elemento existe ou  nao emum array
let vogais = ['a' , 'e' , 'i' , 'o' , 'u']
let letraparaverificar = prompt('digite uma letra')
if (vogais.includes(letraparaverificar.toLowerCase())) {
    console.log(`a ${letraparaverificar} é uma voga`);
}else {
    console.log(`a letra ${letraparaverificar} nao é uma vogal`)
}



let listafrutas = ['maça', 'banana' , 'abacaxi' , 'uva']
for (const [pos, fruta] of listafrutas.entries()) {
    console.log(`a fruta da posição ${pos} é ${fruta}`);
}

let produtos = 'celular,notebook,tv,tablet,monitor';
let listaprodutos = produtos.split(',')
console.log(produtos);
console.log(listaprodutos);

let escola = 'senai';
console.log(escola[0]);
for (let escolar of escola) {
    console.log(escolar);
}
