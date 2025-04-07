//estrutura condicional composta e encadeada
//operadores logicos 
//&& - e
//|| - ou
// ! - nao

let a = 2;
let b = 3;
let c = 5;
console.log(a > 1 && b < 2);  //false pq 2 condicao é f
console.log(a > 1 && b < 2);  //false pq 2 condicao é v
console.log(a > 1 && b < 4);  //true pq 2 condicao é v
console.log(a > 1 && b < 4 && c > 4);  //false

console.log(a > 1 || b < 2);  //
console.log(a > 1 || b < 2);  //
console.log(a > 1 || b < 2);  //
console.log(a > 1 || b < 4 || c > 4); //
console.log(a > 1 || b < 4 || c > 4); //

let altura = Number(prompt(' qual é a sua altura'));
let peso = Number(prompt('qual é o seu peso'));
let imc = peso / (altura ** 2);
if (imc < 18.5 ){
    console.log(' voce esta abaixo do peso ideal');
}else if (imc > 18.5 && imc < 24.5){
    console.log(' voce esta no peso ideal ')
}else if (imc >= 25 && imc < 30) {
    console.log(' voce esta sobre o peso')
}else if (imc > 30) {
    console.log(' voce esta obeso')
}


let lado1 = Number(prompt(' digite o lado1:'));
let lado2 = Number(prompt(' digite o lado2:'));
let lado3 = Number(prompt(' digite o lado3:'));

if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1 ) {
    console.log('seu triangulo éum equilatero')
}else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1 ) {
    console.log(' seu triangulo é um escaleno')
}else {
    console.log('seu triangulo é um isosceles')
}


let valor = console.log = prompt('diga me um valor = ')
let horas = console.log = prompt('diga me um valor = ')

if (valor > 5000 || horas > 40 ) {
    console.log('voce tem direito a um bonus')
}else {
    console.log(' voce nao tem direito')
}
