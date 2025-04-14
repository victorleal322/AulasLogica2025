const prompt = require('prompt-sync')();

var simnao = ['3, 4, 5, 6, 1']
var soma = 0
for (var sim of simnao) {
    console.log(` é ${sim}`)
    soma = sim * 2
}
console.log(`${soma}`)

