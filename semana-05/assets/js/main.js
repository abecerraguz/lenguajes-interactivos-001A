
// Importa todos los elementos del DOM exportados desde DOM.js
// El alias "DOM" permite acceder a ellos con DOM.changeColor, DOM.image1, etc.
import * as DOM from './utilities/DOM.js';

// Importa con destructuring cada función desde funciones.js
// Solo se importan las que se necesitan en este archivo
import {
    cambiarColor,       // Alterna el color de los encabezados
    cambiarFont,        // Alterna la tipografía de los encabezados
    cambiarTexto,       // Alterna el contenido de texto de los párrafos
    cambiarURL,         // Alterna la imagen entre placeholder y logo JS
    addList,            // Agrega un nuevo item a la lista ordenada
    destacarPares,      // Resalta encabezados en índices pares
    destacarImpares,    // Resalta encabezados en índices impares
    agrandarEncabezados,    // Aumenta el font-size de los encabezados destacados
    disminuirEncabezados    // Reduce el font-size de los encabezados destacados
} from './utilities/funciones.js';


// DOMContentLoaded: se dispara cuando el HTML ha sido completamente parseado
// y el DOM está listo, ANTES de que carguen imágenes, estilos y otros recursos
window.addEventListener('DOMContentLoaded', (e) => {

    // Mensaje de confirmación en consola para verificar que el DOM cargó correctamente
    console.log('✅ DOM completamente cargado y listo');

    // ── NAVBAR BUTTONS ──────────────────────────────────────────────────────

    // Botón "Cambiar color de encabezados" → llama a cambiarColor en cada click
    DOM.changeColor.addEventListener('click', cambiarColor);

    // Botón "Cambiar fuente de encabezados" → llama a cambiarFont en cada click
    DOM.changeFont.addEventListener('click', cambiarFont);

    // Botón "Cambiar texto" → llama a cambiarTexto en cada click
    DOM.changeText.addEventListener('click', cambiarTexto);

    // Botón "Cambiar ruta de la imagen" → llama a cambiarURL en cada click
    DOM.changeURL.addEventListener('click', cambiarURL);

    // ── LISTA ────────────────────────────────────────────────────────────────

    // Botón "Agregar" del formulario → llama a addList en cada click
    DOM.agregarAlaLista.addEventListener('click', addList);

    // ── DESTACAR / TAMAÑO ────────────────────────────────────────────────────

    // Botón "Destacar Pares" → aplica/quita clase "destacado" a índices 0, 2, 4...
    DOM.changeDetacarEncabezadoPares.addEventListener('click', destacarPares);

    // Botón "Destacar Impares" → aplica/quita clase "destacado" a índices 1, 3...
    DOM.changeDestacarEncabezadoImpares.addEventListener('click', destacarImpares);

    // Botón "+ Destacado" → aumenta 4px el font-size de los encabezados destacados
    DOM.changeAgrandarEncabezados.addEventListener('click', agrandarEncabezados);

    // Botón "- Destacado" → reduce 4px el font-size de los encabezados destacados
    DOM.changeDisminuirEncabezados.addEventListener('click', disminuirEncabezados);

});