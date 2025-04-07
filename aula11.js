const prompt = require('prompt-sync')();

//inicializacao da variavel ; condicao do for incremento da variavel
for (let contador = 1; contador <= 50; contador++ ) {
     console.log(contador);
     
}


//neste for iniciampos apartir  do  numero 5, ate o numero 50
//incrementamos de 3 em 3 no contador
for (let contador = 5; contador <= 50; contador+= 3) {
     console.log(contador);
     
}

for (let contador = 5; contador <= 500; contador+= 3) {
    console.log(contador);
    if (contador == 50) {
        break;
        
    }
}

//tabuada com o for
let nr = 6
for (let contador = 1; contador <= 10; contador++){
    console.log(`${contador} = ${nr * contador}`)
}


console.log('entregando os notebooks')
for ( let nr = 1; nr <= 32;  nr++){
    let nome = prompt(`quem e o numero ${nr}`)
    let presente = prompt (`o a ${nome} esta presente (s ou n) `)
                                                                   

}