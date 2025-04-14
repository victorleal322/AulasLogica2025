function linha () {
    console.log('- * - * - * - * - * - *  - *  -')
    
}

function cabeçalho () {
    linha ();
    console.log('sesi/senai')
    linha ();
}
cabeçalho();



function cabeçalhoEscola (nomedaescola) {
linha ()
console.log(nomedaescola)
linha ()
}
cabeçalhoEscola('usp')
cabeçalhoEscola('sesi')

function soma (nr1, nr2) {
    let resultado = nr1 + nr2;
    console.log(resultado)
}
soma (5, 8)


function media (n1, n2){
    let resultado = (n1 + n2 ) / 2
    console.log(resultado);
    return resultado;
    
}

let valor = media(5,8)