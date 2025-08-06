// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let maxIntentos = 7;
let adivinado = false;

while (intentos < maxIntentos && !adivinado) {
    let numeroUsuario = parseInt(prompt(`Intento ${intentos + 1}/${maxIntentos}: Adivina el número entre 1 y 100:`));
    intentos++;

    if (numeroUsuario === numeroSecreto) {
        adivinado = true;
        console.log(`🎉 ¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intento(s).`);
    } else if (numeroUsuario < numeroSecreto) {
        console.log("🔼 El número es mayor. Intenta de nuevo.");
    } else if (numeroUsuario > numeroSecreto) {
        console.log("🔽 El número es menor. Intenta de nuevo.");
    }
}

// Mostrar mensaje si se acabaron los intentos y no adivinó
if (!adivinado) {
    console.log(`😢 ¡Lo siento! No adivinaste el número. Era: ${numeroSecreto}`);
}
