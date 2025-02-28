let operacoes = [];
operacoes.adicao = "adição";
operacoes.subtracao = "subtração";
operacoes.multiplicao = "multiplicação";
operacoes.divisao = "divisão";

let a1 = 20;
let b1 = 5;
let resultado1 = a1 + b1;

let a2 = 12;
let b2 = 11;
let resultado2 = a2 - b2;

let a3 = 8;
let b3 = 4;
let resultado3 = a3 * b3;

let a4 = 50;
let b4 = 2;
let resultado4 = a4 / b4;

console.log(`Resultado de ${operacoes.adicao} entre ${a1} e ${b1} = ${resultado1}`);
console.log(`Resultado de ${operacoes.subtracao} entre ${a2} e ${b2} = ${resultado2}`);
console.log(`Resultado de ${operacoes.multiplicao} entre ${a3} e ${b3} = ${resultado3}`);
console.log(`Resultado de ${operacoes.divisao} entre ${a4} e ${b4} = ${resultado4}`);
