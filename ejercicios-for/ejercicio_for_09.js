// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.

let frecuenciaSuma = Array(13).fill(0); // Índices 0-12, usaremos 2-12
let lanzamientos = 1000;

for (let i = 0; i < lanzamientos; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    frecuenciaSuma[suma]++;
}
console.log("Frecuencia de sumas al lanzar dos dados 1000 veces:");
for (let suma = 2; suma <= 12; suma++) {
    console.log(`Suma ${suma}: ${frecuenciaSuma[suma]} veces`);
}