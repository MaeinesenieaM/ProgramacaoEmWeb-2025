function verificarNumeroPrimo(num) {
    if (num <= 1) return false;
    else if (num % 2 === 0 && num !== 2) return false;
    for (let divisor = 3; divisor < num; divisor += 2) {
        if (num % divisor === 0) return false
    }
    return true;
}
console.log(verificarNumeroPrimo(0)); //false
console.log(verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false
