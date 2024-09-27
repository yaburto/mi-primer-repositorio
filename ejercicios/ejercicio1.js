// Ejercicio 1: Determinar si un número es par o impar
const numero = parseInt(prompt("Ingresa un número:"));
if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
} else {
    console.log("Por favor, ingresa un número válido.");
}
