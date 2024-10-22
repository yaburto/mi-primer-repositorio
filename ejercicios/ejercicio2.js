// Ejercicio 2: Cálculo del promedio ponderado
const nota1 = parseFloat(prompt("Ingresa la primera nota (40%):"));
const nota2 = parseFloat(prompt("Ingresa la segunda nota (30%):"));
const nota3 = parseFloat(prompt("Ingresa la tercera nota (30%):"));

const promedio = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);

if (promedio < 3.95) {
    console.log(`Promedio: ${promedio.toFixed(2)} - Has reprobado.`);
} else if (promedio >= 3.95 && promedio < 4.95) {
    console.log(`Promedio: ${promedio.toFixed(2)} - Debes ir a examen.`);
} else {
    console.log(`Promedio: ${promedio.toFixed(2)} - Te eximes.`);
}
