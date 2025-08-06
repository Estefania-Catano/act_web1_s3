// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.}

let numeros = [];
let buscado = 50;
let indice = 0;
let encontrado = false;


for (let i = 0; i < 15; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

while (indice < numeros.length) {
    if (numeros[indice] === buscado) {
        encontrado = true;
        break;
    }
    indice++;
}

console.log("Array:", numeros);

if (encontrado) {
    console.log(`El número ${buscado} se encontró en la posición ${indice}.`);
} else {
    console.log(`El número ${buscado} no se encuentra en el array.`);
}

