function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

let num = 5;

console.log("El factorial de " + num + " es: " + factorial(num));

function factorial(numero) {
    // Caso base
    if (numero === 0 || numero === 1) {
        return 1;
    }

    // Llamada recursiva
    return numero * factorial(numero - 1);
}

// Número a calcular
let nmro = 5;

console.log("El factorial de " + nmr + " es: " + factorial(nmr));

function factorial(numero) {
    // Caso base
    if (numero === 0 || numero === 1) {
        return 1;
    }

    // Llamada recursiva
    return numero * factorial(numero - 1);
}

// Número a calcular
let nmr = 5;

console.log("El factorial de " + nmr + " es: " + factorial(nmr));