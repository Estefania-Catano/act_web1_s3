// Ejercicio For 4: Generador de Números Primos
// Utiliza ciclos for anidados para encontrar y mostrar todos los números primos entre 1 y 100. 
// Debe indicar cuántos números primos se encontraron.

let primos = [];
for (let num = 2; num <= 100; num++) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        primos.push(num);
    }
}

console.log("Números primos entre 1 y 100:", primos);
console.log(`Total de números primos encontrados: ${primos.length}`);