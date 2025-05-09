import * as DOM from './DOM.js';

function cambiarColor(e) {
    e.preventDefault();
    DOM.encabezados.forEach(function (element) {
        if (DOM.estado.valorBoolean) {
            element.style.color = 'red'
        } else {
            element.style.color = ''
        }
    })
    DOM.estado.valorBoolean = !DOM.estado.valorBoolean
}

function cambiarFont(e) {
    e.preventDefault();
    DOM.encabezados.forEach(function (element) {
        if (DOM.estado.valorBoolean) {
            element.style.fontFamily = 'Roboto, sans-serif';
        } else {
            element.style.fontFamily = '';
        }

    })
    DOM.estado.valorBoolean = !DOM.estado.valorBoolean;
}

function addList(e) {
    e.preventDefault();
    if (DOM.inputAgregar.value.length === 0) {
        alert('Debes agregar un lenguaje de programación')
    }

    // Verificar si el elemnto ya existe
    const items = DOM.lista.querySelectorAll('li');
    for (let item of items) {
        console.log('Salida de item-->', item)
        if (item.innerText.toLowerCase() === DOM.inputAgregar.value.toLowerCase()) {
            alert('la palabra ya fue agregada a la lista')
            DOM.inputAgregar.value = ''
            return;
        }
    }

    // Agregagr desde el imput a un elemento creado
    const elementList = document.createElement('li')
    elementList.classList.add('list-group-item')
    elementList.innerText = DOM.inputAgregar.value
    DOM.lista.appendChild(elementList);

    DOM.inputAgregar.value = ''
}

function toggleClassIconUniversal() {
    DOM.contentAccesoUniversal.classList.toggle('accesoUniversalTransition')
}

function toggleClassTheme() {
    const html = document.documentElement;

    if (html.getAttribute('data-bs-theme') === 'dark') {
        html.removeAttribute('data-bs-theme');
    } else {
        html.setAttribute('data-bs-theme', 'dark');
    }
}


function initializeFontSizeControl(selector = 'p, h1, h2, h3, h4, h5, h6') {
    // Seleccionamos todos los elementos que coincidan con el selector (por defecto: todos los párrafos y encabezados)
    const elements = document.querySelectorAll(selector);

    // Creamos un Map vacío que usaremos para guardar la información de cada elemento
    /*
     Aquí estamos creando un Map.

    ¿Qué es un Map?
    Es una estructura de datos en JavaScript que te permite guardar pares clave → valor.
    A diferencia de los objetos {}, los Map permiten usar cualquier tipo de dato como clave, incluyendo nodos del DOM (esto es CLAVE en tu caso).

    Por eso usamos un Map en lugar de un objeto: queremos que la clave sea el propio elemento HTML.
    */
    const fontSizes = new Map();
    console.log(fontSizes)
    // Recorremos todos los elementos seleccionados
    elements.forEach(el => {
        // Obtenemos el tamaño de fuente actual (en píxeles) de cada elemento usando getComputedStyle
        const size = parseFloat(window.getComputedStyle(el).fontSize);

        // Guardamos en el Map:
        // - clave: el propio elemento (el nodo del DOM)
        // - valor: un objeto con:
        //   - original: el tamaño original (para saber hasta dónde podemos achicar)
        //   - current: el tamaño actual (que iremos modificando al aumentar/disminuir)
        fontSizes.set(el, {
            original: size,
            current: size
        });
    });

    // Devolvemos el Map con todos los elementos y sus tamaños registrados
    return fontSizes;
}


function increaseBtn(fontSizes, step = 2) {
    console.log(fontSizes)
    fontSizes.forEach((sizes, el) => {
        console.log('Salida de sizes', sizes)
        sizes.current += step;
        el.style.fontSize = sizes.current + 'px';
    });
}

function decreaseBtn(fontSizes, step = 2) {
    fontSizes.forEach((sizes, el) => {
        if (sizes.current > sizes.original) {
            sizes.current -= step;

            // Evitar bajar más de lo original
            if (sizes.current < sizes.original) {
                sizes.current = sizes.original;
            }

            el.style.fontSize = sizes.current + 'px';
        }
    });
}



function leerContenido() {
    let declaracion;
    // Seleccionamos el contenedor principal cuyo texto queremos leer (aquí <main>)
    const content = document.querySelector('main');

    if (!content) {
        console.warn('No se encontró el contenedor principal para leer');
        return;
    }

    // Verificamos si ya se está reproduciendo alguna lectura
    if ( window.speechSynthesis.speaking ) {

        if (window.speechSynthesis.paused) {
            // Si está pausada, reanudamos la lectura
            window.speechSynthesis.resume();
            console.log('Lectura reanudada');

            // Cambiamos el icono a "pausa" para indicar que está reproduciendo
            DOM.listenIcon.classList.replace('bi-play', 'bi-pause');
        } else {
            // Si está hablando (no en pausa), pausamos la lectura
            window.speechSynthesis.pause();
            console.log('Lectura pausada');

            // Cambiamos el icono a "play" para indicar que está pausada
            DOM.listenIcon.classList.replace('bi-pause', 'bi-play');
        }
        return; // Salimos para no iniciar una nueva lectura mientras sigue la anterior
    }

    // Si no hay ninguna lectura activa, iniciamos la lectura desde el principio
    const texto = content.innerText;

    // Creamos el objeto SpeechSynthesisdeclaracion SOLO la primera vez que iniciamos lectura
    declaracion = new SpeechSynthesisUtterance(texto);

    // Configuramos el idioma, velocidad y tono de la voz
    declaracion.lang = 'es-ES'; // Español
    declaracion.rate = 1;       // Velocidad normal
    declaracion.pitch = 1;      // Tono normal

    // Iniciamos la lectura
    window.speechSynthesis.speak(declaracion);
    console.log('Lectura iniciada');

    // Cambiamos el icono a "pausa" mientras se está leyendo
    DOM.listenIcon.classList.replace('bi-volume-up', 'bi-pause');

    // Cuando la lectura termina, restauramos el icono original (altavoz)
    declaracion.onend = () => {
        DOM.listenIcon.classList.remove('bi-pause', 'bi-play'); // Quitamos cualquier estado anterior
        DOM.listenIcon.classList.add('bi-volume-up');
        console.log('Lectura finalizada');
    };
}

export {
    cambiarColor,
    cambiarFont,
    addList,
    toggleClassIconUniversal,
    toggleClassTheme,
    initializeFontSizeControl,
    increaseBtn,
    decreaseBtn,
    leerContenido
}