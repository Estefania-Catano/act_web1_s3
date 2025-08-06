// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.

let numero = 990218;
let contadorDigitos = 0;

if (numero === 0) {
    contadorDigitos = 1;
} else {
    while (numero > 0) {
        numero = Math.floor(numero / 10);
        contadorDigitos++;
    }
}
console.log(`El número tiene ${contadorDigitos} dígitos.`);
