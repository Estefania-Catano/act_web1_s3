// Ejercicio For 1: Tabla de Multiplicar Completa
// Usa ciclos for anidados para crear las tablas de multiplicar del 1 al 12. 
// Presenta los resultados en formato de tabla organizada.

let tablaMultiplicar = '';
for (let i = 1; i <= 12; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 12; j++) {
        let resultado = i * j;
        console.log(`${i} x ${j} = ${resultado}`);
      }
}
