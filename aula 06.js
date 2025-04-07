//importando biblioteca para receber informacao do usuario
const prompt = require('prompt-syn')();

//declarando variaveis sem dados (undefined)
let nota;
//declarando variaveis com informacao 
let nome = "victor";
 
//retribuindo um valor a variavel nome
nome = "miguel";
nota = 8.5;

//entrada de dados em nosso programa 
let sobrenome = prompt('digite seu sobrenome: ');
let nota1 = number(prompt('digite a nota da 1ª prova: '));N
let nota2 =Number(prompt(' digite a nota da 2ª prova: '));

//processamento dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('digite sua idade: ')
let idadenumero = parseInt(idade);

//saida dos dados
console.log('---relatorio final---')
console.log(`o seu nome é: ${nomecompleto} /n sua idade ${idade}`);
console.log('o seu nome é: ' + nomecompleto + '/n sua idade' + idade);
console.log(`sua media é: ${media} `);


let n = 0; //0
n = 0 + 1; //1
n = n + 1; //2
n = n + 1; //3
n = n + 1; //4
n++; //5
n+ 3; //8
n--; //7
n + n - 1; //6
n -=2 //4
//resolucao do exercicio da aula anterior
let horaspordia = number(prompt('quantas horas trabalhou por dia ?'));
let diastrabalhados = number(prompt(' quantos dias trabalhou  '));
let valorhora = number((' qual valor da hora ? '));
let totalhoras = diastrabalhados * horaspordia;
let custototal = totalhoras * valorhora;
console.log(`o custo total é de R$ ${custototal}`);
