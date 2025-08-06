// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.

let texto = "programacion";
let frecuencia = {};
for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    frecuencia[char] = (frecuencia[char] || 0) + 1;
}
let caracteresOrdenados = Object.keys(frecuencia).sort();
for (let char of caracteresOrdenados) {
    console.log(`${char}: ${frecuencia[char]}`);
}
