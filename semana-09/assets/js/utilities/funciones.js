// ─────────────────────────────────────────────────────────────────────────────
// funciones.js
// Contiene todas las funciones de la barra de accesibilidad.
// Cada función recibe datos desde DOM.js (elementos del HTML) y los manipula.
// ─────────────────────────────────────────────────────────────────────────────

// Importamos todas las referencias al DOM desde el módulo DOM.js
// El * as DOM significa: "trae todo lo que exporta DOM.js bajo el nombre DOM"
import * as DOM from './DOM.js';

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: cambiarColor
// ─────────────────────────────────────────────────────────────────────────────
// Cambia el color de los encabezados entre rojo y su color original.
// Funciona como un interruptor (toggle): cada vez que se llama, alterna el estado.
//
// Parámetro:
//   e → el evento del clic (lo usamos solo para cancelar el comportamiento por defecto)
//
// ¿Cómo funciona el toggle?
//   Usamos DOM.estado.valorBoolean como un semáforo: true/false.
//   Al final de la función lo invertimos con el operador "!" (NOT lógico).
//   Así cada llamada alterna entre activar y desactivar el color.
// ─────────────────────────────────────────────────────────────────────────────
function cambiarColor(e) {
    // Cancelamos el comportamiento por defecto del evento (ej: seguir un enlace)
    e.preventDefault();

    // Recorremos todos los encabezados del DOM con forEach
    DOM.encabezados.forEach(function (element) {
        if (DOM.estado.valorBoolean) {
            // Si el estado es true → aplicamos color rojo
            element.style.color = 'red'
        } else {
            // Si el estado es false → quitamos el color (vuelve al original del CSS)
            element.style.color = ''
        }
    })

    // Invertimos el estado para la próxima llamada
    // true → false / false → true
    DOM.estado.valorBoolean = !DOM.estado.valorBoolean
}

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: cambiarFont
// ─────────────────────────────────────────────────────────────────────────────
// Cambia la tipografía de los encabezados entre 'Roboto' y la fuente original.
// Usa el mismo patrón de toggle (interruptor) que cambiarColor.
//
// Parámetro:
//   e → el evento del clic
// ─────────────────────────────────────────────────────────────────────────────
function cambiarFont(e) {
    e.preventDefault();

    DOM.encabezados.forEach(function (element) {
        if (DOM.estado.valorBoolean) {
            // Aplicamos la fuente Roboto (debe estar cargada desde Google Fonts o similar)
            element.style.fontFamily = 'Roboto, sans-serif';
        } else {
            // Quitamos la fuente inline → el CSS original toma el control
            element.style.fontFamily = '';
        }
    })

    // Alternamos el estado para la próxima llamada
    DOM.estado.valorBoolean = !DOM.estado.valorBoolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: addList
// ─────────────────────────────────────────────────────────────────────────────
// Agrega un nuevo elemento <li> a la lista del DOM.
// Antes de agregar, valida que el campo de texto no esté vacío.
// Si está vacío, muestra una alerta visual de Bootstrap.
// Si tiene contenido, crea el <li> con un ícono de eliminación y lo añade a la lista.
//
// Parámetro:
//   e → el evento del formulario o botón (evitamos el comportamiento por defecto)
// ─────────────────────────────────────────────────────────────────────────────
function addList(e) {
    // Cancelamos el comportamiento por defecto (evitar recargar la página en un form)
    e.preventDefault();

    // Obtenemos el valor actual del input de texto
    const dataInput = DOM.inputAgregar.value

    // ── Validación: campo vacío ──────────────────────────────────────────────
    // Si el input está vacío o solo tiene espacios, mostramos una alerta
    if (!dataInput || dataInput.length === 0) {

        // Verificamos que la alerta no exista ya para no duplicarla
        if (!document.getElementById('alertaId')) {
            // Creamos el <div> de alerta con clases de Bootstrap
            const alert = document.createElement('div');
            alert.classList.add('alert', 'alert-danger', 'alert-fade-in');
            alert.setAttribute('role', 'alert');
            alert.setAttribute('id', 'alertaId');
            alert.innerText = `Debe ingresar un lenguaje de programación`;

            // Insertamos la alerta justo antes de la lista en el DOM
            DOM.lista.before(alert);
        }

        // Salimos de la función sin agregar nada
        return
    }

    // ── Creación del elemento <li> ───────────────────────────────────────────
    // Creamos el nuevo ítem de lista
    const li = document.createElement('li')

    // Agregamos clases de Bootstrap para estilo y disposición (flex)
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')

    // Insertamos el texto del input y un ícono rojo de "X" para eliminar
    li.innerHTML = `${dataInput} <i class="bi bi-x-circle text-danger"></i>`

    // Indicamos visualmente que el ítem es clickeable
    li.style.cursor = 'pointer';

    // Agregamos el <li> al final de la lista en el DOM
    DOM.lista.append(li)

    // Limpiamos el input para que quede listo para el siguiente ingreso
    DOM.inputAgregar.value = ''

    // ── Evento de eliminación ────────────────────────────────────────────────
    // Seleccionamos todos los <li> actuales de la lista
    const elementList = document.querySelectorAll('#ol-list li');

    // Si hay elementos, les asignamos el evento de clic para eliminarse a sí mismos
    if (elementList.length !== 0) {
        elementList.forEach(element => {
            element.addEventListener('click', function (e) {
                // 'this' apunta al <li> clickeado → lo removemos del DOM
                this.remove()
            })
        })
    }

}

function eliminarAlert(e) {
    const alertEl = document.getElementById('alertaId');
    if (!alertEl) return;

    alertEl.classList.remove('alert-fade-in');
    alertEl.classList.add('alert-fade-out');
    alertEl.addEventListener('animationend', () => alertEl.remove(), { once: true });
}

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: toggleClassIconUniversal
// ─────────────────────────────────────────────────────────────────────────────
// Abre o cierra el panel de accesibilidad universal animando una transición CSS.
// Usa classList.toggle() que:
//   - Si la clase existe → la quita
//   - Si la clase NO existe → la agrega
// La animación real está definida en el CSS con la clase 'accesoUniversalTransition'
// ─────────────────────────────────────────────────────────────────────────────
function toggleClassIconUniversal() {
    DOM.contentAccesoUniversal.classList.toggle('accesoUniversalTransition')
}

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: toggleClassTheme
// ─────────────────────────────────────────────────────────────────────────────
// Alterna entre el tema claro y el tema oscuro de Bootstrap.
// Bootstrap 5.3+ usa el atributo data-bs-theme="dark" en el elemento <html>
// para activar el modo oscuro en todos los componentes.
//
// ¿Cómo funciona?
//   - Si <html data-bs-theme="dark"> existe → lo quitamos (modo claro)
//   - Si NO existe → lo agregamos (modo oscuro)
// ─────────────────────────────────────────────────────────────────────────────
function toggleClassTheme() {
    // document.documentElement apunta al elemento <html> de la página
    const html = document.documentElement;

    if (html.getAttribute('data-bs-theme') === 'dark') {
        // Estamos en modo oscuro → quitamos el atributo para volver al modo claro
        html.removeAttribute('data-bs-theme');
    } else {
        // Estamos en modo claro → agregamos el atributo para activar el modo oscuro
        html.setAttribute('data-bs-theme', 'dark');
    }
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: initializeFontSizeControl
// ─────────────────────────────────────────────────────────────────────────────
// Prepara y devuelve un Map con el tamaño de fuente de cada elemento del DOM.
// Esta función se ejecuta UNA SOLA VEZ al cargar la página.
// Su resultado (el Map) se pasa a increaseBtn y decreaseBtn para que puedan
// aumentar o disminuir los tamaños de forma controlada.
//
// Parámetro:
//   selector → qué elementos HTML queremos controlar.
//              Por defecto: párrafos, encabezados, links e inputs.
//
// ¿Qué es un Map?
//   Es una estructura de datos que guarda pares clave → valor.
//   A diferencia de un objeto {}, en un Map la CLAVE puede ser cualquier cosa,
//   incluso un nodo del DOM (un elemento HTML).
//   Por eso lo usamos aquí: la clave es el elemento, el valor son sus tamaños.
//
// El Map queda así por cada elemento:
//   elemento HTML → { original: 16, current: 16, max: 22 }
// ─────────────────────────────────────────────────────────────────────────────
function initializeFontSizeControl(selector = 'p, h1, h2, h3, h4, h5, h6, a, input') {
    // Seleccionamos todos los elementos del HTML que coincidan con el selector
    const elements = document.querySelectorAll(selector);

    // Creamos el Map vacío donde guardaremos la información de cada elemento
    const fontSizes = new Map();

    // Recorremos cada elemento seleccionado
    elements.forEach(el => {
        // getComputedStyle(el) devuelve los estilos reales aplicados al elemento
        // (los que calcula el navegador, no solo los del CSS).
        // .fontSize devuelve algo como "16px" → parseFloat convierte "16px" a 16 (número)
        const size = parseFloat(window.getComputedStyle(el).fontSize);

        // Guardamos en el Map para este elemento:
        //   original → tamaño inicial (límite mínimo al decrementar)
        //   current  → tamaño actual (va cambiando con cada clic)
        //   max      → límite máximo = original + 3 incrementos de 2px = original + 6px
        fontSizes.set(el, {
            original: size,
            current: size,
            max: size + (3 * 2) // límite máximo: 3 incrementos de step (por defecto step=2)
        });
    });

    // Devolvemos el Map completo para usarlo en increaseBtn y decreaseBtn
    return fontSizes;
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: increaseBtn
// ─────────────────────────────────────────────────────────────────────────────
// Aumenta el tamaño de fuente de todos los elementos registrados en el Map.
// Tiene un límite máximo (sizes.max) para no agrandar indefinidamente.
//
// Parámetros:
//   fontSizes → el Map creado por initializeFontSizeControl
//   step      → cuántos píxeles se aumenta por cada clic (por defecto: 2px)
//
// Efecto adicional de accesibilidad:
//   Cuando se llega al tamaño máximo, el navbar de Bootstrap cambia a menú
//   hamburguesa quitando la clase 'navbar-expand-lg'. Esto simula lo que
//   Bootstrap hace automáticamente en pantallas pequeñas (media queries),
//   pero aquí lo forzamos por accesibilidad al tener textos más grandes.
// ─────────────────────────────────────────────────────────────────────────────
function increaseBtn(fontSizes, step = 2) {
    // Este flag nos indica si algún elemento llegó al límite máximo
    let reachedMax = false;

    fontSizes.forEach((sizes, el) => {
        // Solo aumentamos si el tamaño actual es menor que el máximo permitido
        if (sizes.current < sizes.max) {
            sizes.current += step; // Sumamos el step al tamaño actual

            // Protección: si nos pasamos del máximo, lo fijamos justo en el máximo
            if (sizes.current > sizes.max) {
                sizes.current = sizes.max;
            }

            // Aplicamos el nuevo tamaño al elemento directamente en el HTML
            el.style.fontSize = sizes.current + 'px';
        }

        // Verificamos si este elemento ya está en su límite máximo
        if (sizes.current >= sizes.max) {
            reachedMax = true;
        }
    });

    // Si al menos un elemento llegó al máximo → activamos el menú hamburguesa
    const navbar = document.querySelector('.navbar');
    if (reachedMax && navbar) {
        // Quitamos la clase que mantiene el navbar expandido en pantallas grandes.
        // Sin esta clase, Bootstrap colapsa el nav a modo móvil (hamburguesa)
        navbar.classList.remove('navbar-expand-lg');
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: decreaseBtn
// ─────────────────────────────────────────────────────────────────────────────
// Disminuye el tamaño de fuente de todos los elementos registrados en el Map.
// Tiene un límite mínimo (sizes.original) para no achicar más del tamaño inicial.
//
// Parámetros:
//   fontSizes → el Map creado por initializeFontSizeControl
//   step      → cuántos píxeles se disminuye por cada clic (por defecto: 2px)
//
// Efecto adicional de accesibilidad:
//   Cuando todos los elementos vuelven al tamaño original, restauramos la clase
//   'navbar-expand-lg' para que el navbar vuelva a su estado normal (expandido).
// ─────────────────────────────────────────────────────────────────────────────
function decreaseBtn(fontSizes, step = 2) {
    // Este flag empieza en true.
    // Si algún elemento todavía es más grande que el original, lo ponemos en false.
    let backToOriginal = true;

    fontSizes.forEach((sizes, el) => {
        // Solo disminuimos si el tamaño actual es mayor que el tamaño original
        if (sizes.current > sizes.original) {
            sizes.current -= step; // Restamos el step al tamaño actual

            // Protección: si nos pasamos del mínimo, lo fijamos justo en el original
            if (sizes.current < sizes.original) {
                sizes.current = sizes.original;
            }

            // Aplicamos el nuevo tamaño al elemento directamente en el HTML
            el.style.fontSize = sizes.current + 'px';
        }

        // Si este elemento todavía es más grande que el original, aún no volvimos al inicio
        if (sizes.current > sizes.original) {
            backToOriginal = false;
        }
    });

    // Si todos los elementos volvieron al tamaño original → restauramos el navbar
    const navbar = document.querySelector('.navbar');
    if (backToOriginal && navbar) {
        // Volvemos a agregar la clase que expande el navbar en pantallas grandes
        navbar.classList.add('navbar-expand-lg');
    }
}



// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: leerContenido
// ─────────────────────────────────────────────────────────────────────────────
// Lee en voz alta el contenido del elemento <main> usando la Web Speech API.
// La Web Speech API es una API nativa del navegador (no necesita librerías).
// Permite convertir texto a voz con SpeechSynthesisUtterance.
//
// Estados posibles:
//   1. No hay lectura activa → inicia desde el principio
//   2. Hay lectura activa y está PAUSADA → la reanuda
//   3. Hay lectura activa y está REPRODUCIENDO → la pausa
//
// También actualiza el ícono del botón según el estado actual.
// ─────────────────────────────────────────────────────────────────────────────
function leerContenido() {
    let declaracion;

    // Seleccionamos el <main> del HTML, que es el contenedor principal del contenido
    const content = document.querySelector('main');

    // Guardamos de seguridad: si no existe <main> en el HTML, salimos sin errores
    if (!content) {
        console.warn('No se encontró el contenedor principal para leer');
        return;
    }

    // Verificamos si YA hay una lectura en curso
    // window.speechSynthesis es el motor de voz del navegador
    // .speaking es true si hay algo reproduciéndose (aunque esté pausado)
    if (window.speechSynthesis.speaking) {

        if (window.speechSynthesis.paused) {
            // ESTADO: lectura pausada → la reanudamos desde donde estaba
            window.speechSynthesis.resume();
            console.log('Lectura reanudada');

            // Cambiamos el ícono de "play" a "pausa" (estamos reproduciendo)
            DOM.listenIcon.classList.replace('bi-play', 'bi-pause');
        } else {
            // ESTADO: lectura activa → la pausamos
            window.speechSynthesis.pause();
            console.log('Lectura pausada');

            // Cambiamos el ícono de "pausa" a "play" (estamos pausados)
            DOM.listenIcon.classList.replace('bi-pause', 'bi-play');
        }

        // Importante: salimos de la función para no iniciar una lectura nueva
        return;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Si llegamos aquí, NO hay ninguna lectura activa → iniciamos desde el principio
    // ─────────────────────────────────────────────────────────────────────────

    // Obtenemos todo el texto visible del <main> como un string
    const texto = content.innerText;

    // SpeechSynthesisUtterance es el objeto que representa "lo que se va a leer"
    // Le pasamos el texto y luego configuramos sus propiedades
    declaracion = new SpeechSynthesisUtterance(texto);

    // Configuramos el idioma, velocidad y tono de la voz
    declaracion.lang = 'es-ES'; // Español
    declaracion.rate = 1;       // Velocidad normal
    declaracion.pitch = 1;      // Tono normal

    // .speak() le dice al navegador que empiece a leer el utterance
    window.speechSynthesis.speak(declaracion);
    console.log('Lectura iniciada');

    // Mientras lee → cambiamos el ícono a "pausa" para que el usuario sepa que puede pausar
    DOM.listenIcon.classList.replace('bi-volume-up', 'bi-pause');

    // onend es un evento que se dispara automáticamente cuando termina de leer todo el texto
    declaracion.onend = () => {
        DOM.listenIcon.classList.remove('bi-pause', 'bi-play');
        DOM.listenIcon.classList.add('bi-volume-up');
        console.log('Lectura finalizada');
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTACIONES
// ─────────────────────────────────────────────────────────────────────────────
// Exportamos todas las funciones para que puedan ser importadas desde otros
// archivos (como events.js o main.js) usando:
//   import { cambiarColor, cambiarFont, ... } from './funciones.js'
// ─────────────────────────────────────────────────────────────────────────────
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