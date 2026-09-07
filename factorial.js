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