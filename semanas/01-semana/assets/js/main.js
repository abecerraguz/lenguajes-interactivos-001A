// --------------------------------------
// Ejercicio Semana 1: Calculadora de Edad y Acceso a Evento
// Autor: Alejandro Becerra
// Descripción: Evalúa edad y otorga tipo de entrada
// --------------------------------------

// Constante para la edad mínima
const EDAD_MINIMA = 18;

// Función para saludar al usuario
function saludarUsuario(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido(a) al sistema de acceso.`);
    alert(`¡Hola, ${nombre}! Bienvenido(a) al sistema de acceso.`);
}

// Función para determinar tipo de entrada
function tipoEntrada(edad) {
    /*  
        Lógica:
        - Menores de 18 → No pueden ingresar
        - Entre 18 y 25 → Entrada estándar
        - Mayores de 25 → Entrada VIP
    */
    if (edad < EDAD_MINIMA) {
        return "Lo sentimos, no puedes ingresar al evento.";
    } else if (edad >= 18 && edad <= 25) {
        return "Puedes ingresar con entrada ESTÁNDAR.";
    } else {
        return "Puedes ingresar con entrada VIP.";
    }
}

// Capturamos datos del usuario
let nombreUsuario = prompt("Ingresa tu nombre:");
let edadUsuario = parseInt(prompt("Ingresa tu edad:"), 10);

// Llamamos a la función de saludo
saludarUsuario(nombreUsuario);

// Obtenemos el mensaje de acceso
let mensajeAcceso = tipoEntrada(edadUsuario);

// Mostramos resultados
console.log(`Nombre: ${nombreUsuario}`);
console.log(`Edad: ${edadUsuario}`);
console.log(`Resultado: ${mensajeAcceso}`);

alert(mensajeAcceso);
