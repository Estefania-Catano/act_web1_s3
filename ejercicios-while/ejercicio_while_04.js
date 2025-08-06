// Crea un programa que use un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga un número mayor a 95. 
// Muestra cada número generado y al final indica cuántos números se generaron.

let numeroAleatorio;
let contadorNumeros = 0;

while (true) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(`Número generado: ${numeroAleatorio}`);
    contadorNumeros++;

    if (numeroAleatorio > 95) {
        break; // Sale del ciclo si el número es mayor a 95
    }
}

console.log(`Total de números generados: ${contadorNumeros}`);

