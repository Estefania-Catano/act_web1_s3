// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.

let calificacion = 0;
let sumaCalificaciones = 0;
let contadorCalificaciones = 0;
let calificacionMasAlta = -Infinity;
let calificacionMasBaja = Infinity;

while (calificacion !== -1) {
    calificacion = Math.floor(Math.random() * 101);
    console.log(`Calificación ingresada: ${calificacion}`);
    if (calificacion !== -1) {
        sumaCalificaciones += calificacion;
        contadorCalificaciones++;
        if (calificacion > calificacionMasAlta) {
            calificacionMasAlta = calificacion;
        }
        if (calificacion < calificacionMasBaja) {
            calificacionMasBaja = calificacion;
        }
    }
}