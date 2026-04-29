/**
 * ============================================================
 *  VALIDACIÓN DE FORMULARIOS CON JQUERY VALIDATION PLUGIN
 * ============================================================
 *
 *  El plugin "jQuery Validation" permite validar formularios
 *  de forma sencilla y declarativa, sin tener que escribir
 *  manualmente cada condición con if/else.
 *
 *  Conceptos clave:
 *  - rules:         Define las reglas que debe cumplir cada campo.
 *  - messages:      Define los mensajes de error para cada campo.
 *  - submitHandler: Función que se ejecuta SOLO si el formulario
 *                   pasó todas las validaciones correctamente.
 *
 *  El plugin agrega automáticamente la clase CSS "error" a los
 *  elementos que no pasen la validación, y un <label> con el
 *  mensaje de error junto al campo.
 *
 *  Documentación oficial: https://jqueryvalidation.org/
 * ============================================================
 */

// $(function() { ... }) es equivalente a $(document).ready(function() { ... })
// Asegura que el código se ejecute DESPUÉS de que el DOM esté completamente cargado.
$(function () {

    console.log('DOM cargado correctamente');

    // Seleccionamos el formulario y el mensaje de éxito usando jQuery.
    // $('selector') retorna un objeto jQuery que nos permite usar métodos como
    // .validate(), .removeClass(), .fadeOut(), etc.
    let form = $('form');
    let successMsg = $('.alert');

    // ----------------------------------------------------------------
    //  MÉTODOS PERSONALIZADOS - $.validator.addMethod()
    // ----------------------------------------------------------------
    //  Permite crear reglas de validación propias que no vienen
    //  incluidas por defecto en el plugin.
    //
    //  Sintaxis:
    //    $.validator.addMethod("nombreRegla", function(value, element) {
    //      return condición; // true = válido, false = inválido
    //    });
    //
    //  PASO 1: Se REGISTRA la regla con un nombre clave, en este caso "letters".
    //          Este nombre es arbitrario, lo elegimos nosotros.
    //
    //  PASO 2: Más abajo, dentro de rules: { name: { letters: true } },
    //          se APLICA esa regla al campo cuyo atributo name="name" en el HTML.
    //          El plugin busca "letters" en el registro de métodos y ejecuta
    //          esta función cada vez que el usuario escribe en ese campo.
    //
    //  En resumen:
    //    addMethod("letters", ...)  →  registra la regla con ese nombre
    //    rules: { name: { letters: true } }  →  la activa para el input name="name"
    //
    //  - value:   El valor actual del campo de texto.
    //  - element: El elemento HTML del campo (input, select, etc.).
    //  - this.optional(element): Retorna true si el campo está vacío.
    //    Se usa para no mostrar el error cuando el campo no es requerido
    //    y está en blanco (no interferir con la regla "required").
    // ----------------------------------------------------------------
    $.validator.addMethod("letters", function (value, element) {
      // La expresión regular /^[a-zA-Z\s]+$/ acepta solo letras (a-z, A-Z) y espacios.
      // ^ = inicio de la cadena | $ = fin de la cadena | \s = espacio en blanco
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    });

    // ----------------------------------------------------------------
    //  REGLA PERSONALIZADA para el campo email: "customEmail"
    // ----------------------------------------------------------------
    //  PASO 1: Se REGISTRA la regla con el nombre "customEmail".
    //
    //  Aunque el plugin trae la regla nativa "email: true", aquí
    //  creamos una propia para mostrar cómo funciona el mecanismo
    //  y para tener control total sobre el patrón permitido.
    //
    //  La expresión regular valida que el correo tenga la estructura:
    //    algo@algo.algo
    //    - [\w.-]+   → una o más letras, números, puntos o guiones (antes del @)
    //    - @         → el símbolo arroba obligatorio
    //    - [\w.-]+   → dominio (ej: gmail, outlook)
    //    - \.        → punto literal escapado (el punto en .com, .cl, etc.)
    //    - [a-zA-Z]{2,} → extensión de al menos 2 letras (com, cl, org, edu...)
    //
    //  PASO 2: Más abajo, en rules: { email: { customEmail: true } },
    //          se APLICA esta regla al campo cuyo atributo name="email" en el HTML.
    // ----------------------------------------------------------------
    $.validator.addMethod("customEmail", function (value, element) {
      // this.optional(element): si el campo está vacío, no muestra este error
      // (la regla "required" ya se encarga de campo vacío).
      return this.optional(element) || /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value);
    });

    // ----------------------------------------------------------------
    //  form.validate({ ... }) - Inicialización del plugin
    // ----------------------------------------------------------------
    //  Este es el método principal del plugin. Recibe un objeto
    //  de configuración con las siguientes propiedades clave:
    //  - rules, messages, submitHandler (entre otras opciones).
    //
    //  IMPORTANTE: Los nombres de los campos en "rules" y "messages"
    //  deben coincidir con el atributo "name" del <input> en el HTML.
    //  Ejemplo: <input name="email"> → rules: { email: { ... } }
    // ----------------------------------------------------------------
    form.validate({

      // --------------------------------------------------------------
      //  RULES - Reglas de validación por campo
      // --------------------------------------------------------------
      //  Cada clave es el "name" del input en el HTML.
      //  Reglas disponibles de forma nativa:
      //    required   → El campo no puede estar vacío.
      //    minlength  → Cantidad mínima de caracteres.
      //    maxlength  → Cantidad máxima de caracteres.
      //    email      → Verifica que el formato sea un email válido.
      //    url        → Verifica que sea una URL válida.
      //    number     → Permite solo números.
      //    min        → Valor numérico mínimo.
      //    max        → Valor numérico máximo.
      //    equalTo    → El campo debe ser igual a otro (ej: confirmar contraseña).
      //    letters    → Regla personalizada que definimos más arriba.
      // --------------------------------------------------------------
      rules: {
        // La clave "name" aquí corresponde al atributo name="name" del <input> en el HTML.
        // El plugin conecta automáticamente cada clave con el campo del formulario
        // que tenga ese mismo valor en su atributo name.
        name: {
          required: true,   // El campo Nombre es obligatorio
          minlength: 3,     // Debe tener al menos 3 caracteres
          letters: true     // AQUÍ se activa la regla registrada con addMethod("letters").
                            // El valor "true" le dice al plugin que aplique esa regla.
                            // El plugin ejecutará la función de addMethod cada vez
                            // que valide este campo.
        },
        // La clave "email" corresponde al atributo name="email" del <input> en el HTML.
        email: {
          required: true,       // El campo Email es obligatorio
          email: true,          // Regla nativa del plugin: valida formato básico de email
          customEmail: true     // AQUÍ se activa la regla registrada con addMethod("customEmail").
                                // El plugin ejecutará nuestra función con la regex
                                // personalizada cada vez que valide este campo.
        }
      },

      // --------------------------------------------------------------
      //  MESSAGES - Mensajes de error personalizados
      // --------------------------------------------------------------
      //  Si no se definen mensajes aquí, el plugin mostrará sus
      //  mensajes en inglés por defecto.
      //  Se pueden personalizar por campo o incluso por regla:
      //    name: {
      //      required:  "El nombre es obligatorio.",
      //      minlength: "Mínimo 3 caracteres."
      //    }
      //  Si se pone un solo string, aplica para todas las reglas del campo.
      // --------------------------------------------------------------
      messages: {
        name: "Por favor ingrese su nombre (solo letras y espacios, mínimo 3 caracteres).",
        // Cuando un campo tiene varias reglas, los messages se pueden definir
        // como un objeto para asignar un mensaje distinto a cada regla.
        // El plugin mostrará el mensaje correspondiente a la regla que falle.
        email: {
          required:    "El correo electrónico es obligatorio.",
          email:       "Por favor ingrese un correo electrónico válido.",
          customEmail: "El formato debe ser: usuario@dominio.com"
        }
      },

      // --------------------------------------------------------------
      //  SUBMITHANDLER - Acción al enviar el formulario exitosamente
      // --------------------------------------------------------------
      //  Esta función se ejecuta SOLO cuando todas las reglas se
      //  cumplen correctamente. Reemplaza el comportamiento por
      //  defecto del formulario (que sería recargar la página).
      //
      //  - formElement: referencia al elemento <form> nativo del DOM
      //    (no el objeto jQuery). Por eso usamos formElement.reset()
      //    en lugar de $(formElement).reset().
      // --------------------------------------------------------------
      submitHandler: function (formElement) {

        // Mostramos el mensaje de éxito quitando la clase "d-none" de Bootstrap
        // (d-none equivale a display: none en CSS)
        successMsg.removeClass('d-none');

        // Después de 3000ms (3 segundos), ocultamos el mensaje con una
        // animación de desvanecimiento de 1000ms (1 segundo).
        // fadeOut() es un método de jQuery para animar la opacidad hasta 0.
        setTimeout(() => {
            successMsg.fadeOut(1000);
        }, 3000);

        // Limpia todos los campos del formulario usando el método nativo reset()
        formElement.reset();
      }
    });
});

