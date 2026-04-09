// Importa todos los elementos del DOM desde el módulo DOM.js
// El alias "DOM" permite acceder a ellos como DOM.encabezados, DOM.estado, etc.
import * as DOM from './DOM.js';


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: cambiarColor
// Alterna el color de TODOS los encabezados entre rojo y el color original del CSS
// ─────────────────────────────────────────────────────────────────────────────
function cambiarColor(e){
    // Previene el comportamiento por defecto del <a> (evitar que navegue al "#")
    e.preventDefault();

    // Recorre cada encabezado del NodeList usando forEach
    DOM.encabezados.forEach(function(element){
        // Si el estado es true: aplica color rojo a cada encabezado
        if( DOM.estado.valorBoolean ){
            element.style.color = 'red';
        }else{
            // Si el estado es false: elimina el estilo inline para restaurar el CSS original
            element.style.color = '';
        }
    });
    // Invierte el booleano para que el próximo click haga la acción contraria
    DOM.estado.valorBoolean = !DOM.estado.valorBoolean;
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: cambiarFont
// Alterna la tipografía de TODOS los encabezados entre 'Roboto' y la fuente original
// ─────────────────────────────────────────────────────────────────────────────
function cambiarFont(e){
    // Previene el comportamiento por defecto del <a>
    e.preventDefault();

    // Recorre cada encabezado del NodeList
    DOM.encabezados.forEach(function(element){
        // Si el estado es true: aplica la fuente 'Roboto, sans-serif'
        if(DOM.estado.valorBoolean){
            element.style.fontFamily = 'Roboto, sans-serif';
        }else{
            // Si el estado es false: elimina el estilo inline para restaurar la fuente del CSS
            element.style.fontFamily = '';
        }
    });
    // Invierte el booleano para el próximo click
    DOM.estado.valorBoolean = !DOM.estado.valorBoolean;
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: cambiarTexto
// Alterna el contenido de todos los párrafos (.text) entre el texto original
// y un texto de reemplazo generado por JavaScript.
// Usa el atributo data-original para guardar y restaurar el texto original.
// ─────────────────────────────────────────────────────────────────────────────
function cambiarTexto(e){

    // Previene el comportamiento por defecto del <a>
    e.preventDefault();

    // Selecciona todos los párrafos con clase "text" del documento
    const parrafos = document.querySelectorAll('.text');
    console.log('Salida de parrafos-->', parrafos )
    // Comprueba si el primer párrafo ya tiene guardado el texto original
    // Esto determina si estamos en estado "cambiado" o en estado "original"
    const yaModificado = parrafos[0].hasAttribute('data-original');

    // Recorre cada párrafo junto con su índice (0, 1, 2...)
    parrafos.forEach(function(parrafo, index){
        if(!yaModificado){
            // PRIMERA PASADA: guarda el texto original en un atributo data para no perderlo
            parrafo.setAttribute('data-original', parrafo.innerText);
            // Reemplaza el contenido del párrafo con un texto generado dinámicamente
            parrafo.innerText = `Párrafo ${index + 1} — texto modificado dinámicamente con JavaScript`;
        }else{
            // SEGUNDA PASADA: recupera el texto original del atributo data y lo restaura
            parrafo.innerText = parrafo.getAttribute('data-original');
            // Elimina el atributo data-original para que el toggle vuelva al estado inicial
            parrafo.removeAttribute('data-original');
        }
    });
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: cambiarURL
// Alterna la imagen #image1 entre la imagen placeholder y el logo de JavaScript
// La detección del estado se hace leyendo el src actual de la imagen
// ─────────────────────────────────────────────────────────────────────────────
function cambiarURL(e){
    // Previene el comportamiento por defecto del <a>
    e.preventDefault();

    // URL de la imagen original (servicio externo de placeholders)
    const urlOriginal   = 'https://placehold.jp/150x150.png';
    // URL de la imagen alternativa (el logo SVG de JavaScript ya disponible en assets)
    const urlAlternativa = 'assets/img/javascript.svg';

    // Verifica el src actual: si contiene 'placehold.jp' estamos mostrando el placeholder
    if(DOM.image1.src.includes('placehold.jp')){
        // Cambia el src para mostrar el logo de JavaScript
        DOM.image1.src = urlAlternativa;
        // Actualiza el texto alternativo para accesibilidad
        DOM.image1.alt = 'Logo de JavaScript';
        // Agrega un borde de color para indicar visualmente el cambio
        DOM.image1.style.border = '3px solid #f7df1e';
    }else{
        // Restaura el src original con el placeholder
        DOM.image1.src = urlOriginal;
        // Restaura el texto alternativo original
        DOM.image1.alt = 'Imagen de ejemplo';
        // Restaura el estilo de borde por defecto
        DOM.image1.style.border = '';
    }
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: addList
// Agrega el valor del input a la lista <ol> como un nuevo <li>.
// Valida que el campo no esté vacío y que el elemento no exista ya en la lista.
// ─────────────────────────────────────────────────────────────────────────────
function addList(e){
    // Previene el comportamiento por defecto del <a>
    e.preventDefault();

    // Verifica que el input no esté vacío antes de continuar
    if(DOM.inputAgregar.value.length === 0){
        // Muestra una alerta al usuario indicando que debe escribir algo
        alert('Debes agregar un lenguaje de programación');
        // Sale de la función para no continuar con la lógica
        return;
    }

    // Obtiene todos los <li> actuales dentro de la lista
    const items = DOM.lista.querySelectorAll('li');

    // Recorre cada item para verificar si el texto ya existe en la lista
    for(let item of items){
        // Compara en minúsculas para que la comparación no distinga mayúsculas de minúsculas
        if(item.innerText.toLowerCase() === DOM.inputAgregar.value.toLowerCase()){
            // Informa al usuario que el elemento ya existe
            alert('La palabra ya fue agregada a la lista');
            // Limpia el input para que el usuario pueda escribir otro
            DOM.inputAgregar.value = '';
            // Sale de la función sin agregar el duplicado
            return;
        }
    }

    // Crea un nuevo elemento <li> en memoria (aún no está en el DOM)
    const elementList = document.createElement('li');
    // Aplica la clase de Bootstrap para el estilo visual del item de lista
    elementList.classList.add('list-group-item');
    // Asigna el texto del input como contenido visible del <li>
    elementList.innerText = DOM.inputAgregar.value;
    // Inserta el nuevo <li> al final del <ol> en el DOM
    DOM.lista.appendChild(elementList);

    // Limpia el input después de agregar el elemento exitosamente
    DOM.inputAgregar.value = '';
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: destacarPares
// Activa o desactiva la clase CSS "destacado" en los encabezados de índice par
// (índices 0, 2, 4... dentro del NodeList .header)
// ─────────────────────────────────────────────────────────────────────────────
function destacarPares(e){
    // Previene el comportamiento por defecto del <a>
    e.preventDefault();
    alert('Pares')

    // Convierte el NodeList a Array para poder usar forEach con índice numérico
    Array.from(DOM.encabezados).forEach(function(element, index){
        // El operador módulo (%) retorna 0 si el índice es par
        if(index % 2 === 0){
            // classList.toggle agrega la clase si no la tiene, y la quita si ya la tiene
            element.classList.toggle('destacado');
        }
    });
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: destacarImpares
// Activa o desactiva la clase CSS "destacado" en los encabezados de índice impar
// (índices 1, 3... dentro del NodeList .header)
// ─────────────────────────────────────────────────────────────────────────────
function destacarImpares(e){
    // Previene el comportamiento por defecto del <a>
    e.preventDefault();

    // Convierte el NodeList a Array para poder usar forEach con índice numérico
    Array.from(DOM.encabezados).forEach(function(element, index){
        // El operador módulo (%) retorna distinto de 0 si el índice es impar
        if(index % 2 !== 0){
            // classList.toggle agrega la clase si no la tiene, y la quita si ya la tiene
            element.classList.toggle('destacado');
        }
    });
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: agrandarEncabezados
// Aumenta en 4px el font-size de TODOS los encabezados que tengan la clase "destacado"
// ─────────────────────────────────────────────────────────────────────────────
function agrandarEncabezados(e){
    // Previene el comportamiento por defecto del <a>
    e.preventDefault();

    // Selecciona solo los encabezados que actualmente tienen la clase "destacado"
    const destacados = document.querySelectorAll('.header.destacado');

    // Recorre cada encabezado destacado
    destacados.forEach(function(element){
        // getComputedStyle lee el estilo calculado final del elemento (devuelve "XXpx")
        const tamañoActual = window.getComputedStyle(element).fontSize;
        // parseFloat convierte el string "XXpx" al número XX eliminando la unidad "px"
        const tamañoNumerico = parseFloat(tamañoActual);
        // Suma 4px al tamaño actual y aplica el nuevo valor como estilo inline
        element.style.fontSize = (tamañoNumerico + 4) + 'px';
    });
}


// ─────────────────────────────────────────────────────────────────────────────
// FUNCIÓN: disminuirEncabezados
// Reduce en 4px el font-size de TODOS los encabezados que tengan la clase "destacado"
// Tiene un límite mínimo de 10px para evitar que el texto desaparezca
// ─────────────────────────────────────────────────────────────────────────────
function disminuirEncabezados(e){
    // Previene el comportamiento por defecto del <a>
    e.preventDefault();

    // Selecciona solo los encabezados que actualmente tienen la clase "destacado"
    const destacados = document.querySelectorAll('.header.destacado');

    // Recorre cada encabezado destacado
    destacados.forEach(function(element){
        // getComputedStyle lee el estilo calculado final del elemento (devuelve "XXpx")
        const tamañoActual = window.getComputedStyle(element).fontSize;
        // parseFloat convierte el string "XXpx" al número XX eliminando la unidad "px"
        const tamañoNumerico = parseFloat(tamañoActual);
        // Solo disminuye si el tamaño es mayor a 10px (límite mínimo de seguridad)
        if(tamañoNumerico > 10){
            // Resta 4px al tamaño actual y aplica el nuevo valor como estilo inline
            element.style.fontSize = (tamañoNumerico - 4) + 'px';
        }
    });
}


// ─────────────────────────────────────────────────────────────────────────────
// Exporta todas las funciones para que main.js pueda importarlas y usarlas
// como callbacks en los event listeners
// ─────────────────────────────────────────────────────────────────────────────
export {
    cambiarColor,
    cambiarFont,
    cambiarTexto,
    cambiarURL,
    addList,
    destacarPares,
    destacarImpares,
    agrandarEncabezados,
    disminuirEncabezados
}