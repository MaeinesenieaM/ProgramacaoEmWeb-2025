//Por David Costa Gomes UC23200191

let operador = [];
operador.adicao = "adição";
operador.subtracao = "subtração";
operador.multiplicao = "multiplicação";
operador.divisao = "divisão";

function calcular(num_a, num_b, operador) {
    let resultado;
    switch (operador) {
        case "adição": resultado = num_a + num_b; break;
        case "subtração": resultado = num_a - num_b; break;
        case "multiplicação": resultado = num_a * num_b; break;
        case "divisão": resultado = num_a / num_b; break;
        default: return;
    }
    console.log(`Resultado da ${operador} entre ${num_a} e ${num_b} = ${resultado}`);
}

let num_a = 20;
let num_b = 5;

calcular(num_a, num_b, operador.adicao);
calcular(num_a, num_b, operador.subtracao);
calcular(num_a, num_b, operador.multiplicao);
calcular(num_a, num_b, operador.divisao);