function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

let num = 5;

console.log("El factorial de " + num + " es: " + factorial(num));

