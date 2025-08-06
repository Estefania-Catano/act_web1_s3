// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.

let numeros = [];
for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let contadorPares = 0;
let contadorImpares = 0;

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    suma += num;
    if (num > mayor){
        mayor = num;
    }
    if (num < menor){
        menor = num;
    }
    if (num % 2 === 0) {
        contadorPares++;
    } else {
        contadorImpares++;
    }
}

let promedio = suma / numeros.length;

console.log("Array de números:", numeros);
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Cantidad de números pares: ${contadorPares}`);
console.log(`Cantidad de números impares: ${contadorImpares}`);