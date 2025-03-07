//Por David Costa Gomes UC23200191

let operacoes = [];
operacoes.adicao = "adição";
operacoes.subtracao = "subtração";
operacoes.multiplicao = "multiplicação";
operacoes.divisao = "divisão";

let num_a = 20;
let num_b = 5;
let resultado;

resultado = num_a + num_b;
console.log(`Resultado da ${operacoes.adicao} entre ${num_a} e ${num_b} = ${resultado}`);
resultado = num_a - num_b;
console.log(`Resultado da ${operacoes.subtracao} entre ${num_a} e ${num_b} = ${resultado}`);
resultado = num_a * num_b;
console.log(`Resultado da ${operacoes.multiplicao} entre ${num_a} e ${num_b} = ${resultado}`);
resultado = num_a / num_b;
console.log(`Resultado da ${operacoes.divisao} entre ${num_a} e ${num_b} = ${resultado}`);
