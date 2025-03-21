/*

    Crear un programa que le permita a una persona jugar al cachipún contra el computador, indicando cuántas veces desea jugar o repetir el juego. El cachipún es un juego entre dos personas (en este caso, tú y el computador) donde cada una de ellas de manera independiente y secreta debe elegir una de las opciones (piedra, papel y tijera) y compararla con la opción de la otra persona. Para determinar quien gana, se deben seguir 
    las siguientes reglas:

    ● Tijera le gana a papel
    ● Papel le gana a piedra
    ● Piedra le gana a tijera
    ● Si ambos jugadores eligen la misma opción es un empate


*/


let ingreseNumeroJugada;

do {
    ingreseNumeroJugada = prompt('Ingrese el número de jugadas:', 1);

    // Si el usuario cancela el prompt, se vuelve a pedir la entrada
    if (ingreseNumeroJugada === null) {
        alert("Debe ingresar un número para continuar.");
    }

} while ( ingreseNumeroJugada === null || isNaN(ingreseNumeroJugada) || ingreseNumeroJugada.trim() === "" || ingreseNumeroJugada <= 0 );

ingreseNumeroJugada = Number(ingreseNumeroJugada); // Convertir a número


let num = 0;



while (num < ingreseNumeroJugada) {
    num++;
    let igresaJugadaHumano;

    do {
    /*
    do { ... } while (...)

    Se trata de un bucle do...while, que garantiza que el código dentro del bloque se ejecutará al menos una vez antes de evaluar la condición del while.
    prompt('Ingresa Piedra, Papel o Tijera')

    Muestra un cuadro de diálogo al usuario pidiéndole que ingrese una opción.
    Lo que el usuario escriba será guardado en la variable igresaJugadaHumano.

    .toLowerCase().trim()

    toLowerCase(): Convierte el texto ingresado en minúsculas para que no importe si el usuario escribe "Piedra", "PIEDRA" o "pIeDrA", ya que todas serán convertidas a "piedra".
    trim(): Elimina los espacios en blanco al inicio y al final, por si el usuario escribe " piedra " con espacios extra.

    while (!["piedra", "papel", "tijera"].includes(igresaJugadaHumano))

    ["piedra", "papel", "tijera"] es un array que contiene las opciones válidas.
    .includes(igresaJugadaHumano): Comprueba si lo que ingresó el usuario está dentro de este array.
    !(negación lógica): Si la opción no está en el array, la condición se mantiene en true y el bucle se repite.

    Una vez que el usuario ingrese un valor válido ("piedra", "papel" o "tijera"), la condición será false y el bucle terminará.
    
    */
        igresaJugadaHumano = prompt('Ingresa Piedra, Papel o Tijera').toLowerCase().trim();
    } while (!["piedra", "papel", "tijera"].includes(igresaJugadaHumano));

    /*
    Paso a paso:
    Math.random()

    Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo), es decir, un valor entre 0.0000... y 0.9999....
    Multiplicación por 3 ( Math.random() * 3 )

    Esto expande el rango de Math.random() para que el número aleatorio esté entre 0 y 2.9999....

    Ejemplos:
    Si Math.random() da 0.2, entonces 0.2 * 3 = 0.6.
    Si Math.random() da 0.9, entonces 0.9 * 3 = 2.7.
    
    Math.floor(...)

    Redondea el número hacia abajo (elimina los decimales), dejando solo los valores enteros 0, 1 o 2.
    Ejemplos:
        Math.floor(0.6) → 0
        Math.floor(2.7) → 2
        Suma + 1

    Desplaza el rango de valores posibles de [0, 2] a [1, 3].
    Ahora los posibles valores finales son 1, 2 o 3.
    
    */

    const randomNum = Math.floor( Math.random() * 3 ) + 1;
    quienGana(igresaJugadaHumano, jugadaMaquina(randomNum), num);
}

function jugadaMaquina( jugada ) {
    switch (jugada) {
        case 1: return 'piedra';
        case 2: return 'papel';
        case 3: return 'tijera';
        default: return 'empate';
    }
}

function quienGana( humano, maquina, num ) {
    if ( maquina === 'tijera' && humano === 'papel' ||
         maquina === 'papel' && humano === 'piedra' ||
         maquina === 'piedra' && humano === 'tijera') {
        document.write(`<div class="container"><div class="alert alert-success my-5" role="alert">Jugada ${num}, Gana Maquina (${maquina} vs ${humano})</div></div>`);
    } else if (humano === 'tijera' && maquina === 'papel' ||
               humano === 'papel' && maquina === 'piedra' ||
               humano === 'piedra' && maquina === 'tijera') {
        document.write(`<div class="container"><div class="alert alert-success my-5" role="alert">Jugada ${num}, Gana Humano (${humano} vs ${maquina})</div></div>`);
    } else {
        document.write(`<div class="container"><div class="alert alert-success my-5" role="alert">Jugada ${num}, Es un empate (${humano} vs ${maquina})</div></div>`);
    }
}
