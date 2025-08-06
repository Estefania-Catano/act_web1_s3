// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.

let frase = "Anita lava la tina";
let fraseLimpia = frase.toLowerCase().replace(/[^a-z0-9]/g, '');
let esPalindromo = true;
for (let i = 0; i < fraseLimpia.length / 2; i++) {
    if (fraseLimpia[i] !== fraseLimpia[fraseLimpia.length - 1 - i]) {
        esPalindromo = false;
        break;
    }
}
if (esPalindromo) {
    console.log(`"${frase}" es un palíndromo.`);
} else {
    console.log(`"${frase}" no es un palíndromo.`);
}
