function transporMatriz(matriz) {
    let nova_matriz = [];
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        let buffer = []
        for (let linha = 0; linha < matriz.length; linha++) {
            buffer [linha] = matriz [linha] [coluna];
        }
        nova_matriz[coluna] = buffer;
    }
    return nova_matriz;
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
]
console.log("Matriz comum: ");
console.log(matriz);
console.log("Matriz transposta:");
console.log(transporMatriz(matriz));

