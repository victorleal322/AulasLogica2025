const prompt = require('prompt-sync')();

let km = Number(prompt(' quantos km voce percorreu '))
let dia = Number(prompt(' quantos dias ficou com o carro'))
let valortotal = (km * 0.15) + (dia * 60)
 
console.log(`voce pagara r$ ${valortotal} `)

