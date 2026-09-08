function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

let num = 5;

console.log("El factorial de " + numero + " es: " + factorial(numero));

function factorial(numero) {
    // Caso base
    if (numero === 0 || numero === 1) {
        return 1;
    }

    // Llamada recursiva
    return numero * factorial(numero - 1);
}

// Número a calcular
let numero = 5;

console.log("El factorial de " + numero + " es: " + factorial(numero));