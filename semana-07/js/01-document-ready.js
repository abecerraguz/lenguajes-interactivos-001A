// Detecta que el DOM este cargado
// ACTUALIZACIÓN jQuery 4.0: $(document).ready(fn) fue eliminado.
// Usar la forma abreviada $(fn), equivalente y compatible desde jQuery 1.0.

$(function () {

  
// ============================================================
    // ¿CÓMO FUNCIONA $() ? — PASO A PASO
    // ============================================================

    // PASO 1: En JavaScript podemos crear una función con cualquier nombre
    function miFuncion(selector) {
        return document.querySelectorAll(selector)
    }

    // PASO 2: También podemos guardar esa función en otra variable (alias)
    //         Las dos variables apuntan a la MISMA función en memoria
    const $ = miFuncion

    console.log( miFuncion === $ ) // → true, son la misma función

    // PASO 3: jQuery hace exactamente eso al final de su código fuente:
    //
    //         window.jQuery = jQuery   ← nombre completo
    //         window.$      = jQuery   ← alias corto
    //
    //         Por eso estas dos líneas hacen lo mismo:
    //         jQuery('p')
    //         $('p')

    // PASO 4: Cuando escribimos $('p'), jQuery internamente hace:
    //         → busca todos los <p> en el DOM
    //         → los envuelve en un objeto jQuery
    //         → nos devuelve ese objeto con métodos como .css() .on() .hide()

    // PASO 5: Por eso podemos encadenar métodos (chaining):
    //         $('p').css('color','red').hide()
    //              ↑ selecciona   ↑ cambia color  ↑ oculta

    // ============================================================
    // RESUMEN: $ no es magia, es solo un nombre corto para jQuery()
    // ============================================================



    
});