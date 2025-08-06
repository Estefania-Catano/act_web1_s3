// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.

let numero = 5;
let factorial = 1;
let contador = 1;

while (contador <= numero) {
    factorial *= contador;
    contador++;
}

console.log(`El factorial de ${numero} es ${factorial}`); 