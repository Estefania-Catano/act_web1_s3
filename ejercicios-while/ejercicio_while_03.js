// Implementa un sistema que use un ciclo while para solicitar una contraseña al usuario 
// hasta que ingrese "admin123". 
// Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.

let password = "";
let intentos = 0;

while (password !== "admin123" ) {
   password = prompt("Ingresa la contraseña:");
    intentos++;

    if (password !== "admin123") {
        console.log(`Contraseña incorrecta.`);
    }
}

if (password === "admin123") {
    console.log("¡Acceso concedido!");
} else {
    console.log("Acceso denegado. Máximo de intentos alcanzado.");
}