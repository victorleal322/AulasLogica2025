const prompt = require('prompt-sync')();

let filmes = [  
    "O Senhor dos Anéis",  
    "Harry Potter",  
    "Matrix",  
    "O Poderoso Chefão",  
    "Forrest Gump",  
    "Star Wars",  
    "Jurassic Park"  
];  

 
console.log("Primeiro filme:", filmes[0]);  

console.log("Filme na posição 4:", filmes[3]);  

filmes[filmes.length - 1] = "Titanic";  
console.log("Lista após substituir o último filme:", filmes);  


filmes.push("Caminhos da Floresta");  
console.log("Lista após adicionar um filme ao final:", filmes);  


filmes.splice(4, 0, "O Silêncio dos Inocentes"); 
console.log("Lista após adicionar um filme na posição 5:", filmes);  


filmes.shift();  
console.log("Lista após excluir o primeiro filme:", filmes);  


filmes.pop();  
console.log("Lista após excluir o último filme:", filmes);  
console.log("Três primeiros filmes:", filmes.slice(0, 3));  
console.log("Quatro últimos filmes:", filmes.slice(-4));  
console.log("Quantidade de filmes na lista:", filmes.length);  

const filmesOrdenados = [...filmes].sort((a, b) => b.localeCompare(a));  
console.log("Filmes em ordem decrescente:", filmesOrdenados);  