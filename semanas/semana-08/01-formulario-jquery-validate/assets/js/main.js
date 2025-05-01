$(document).ready(function () {
    console.log('DOM cargado correctamente');

    let form = $('form');
    let successMsg = $('.alert');

    // Método personalizado para permitir solo letras y espacios
    $.validator.addMethod("letters", function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    });

    // Configuración de validación del formulario
    form.validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
          letters: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Por favor ingrese su nombre (solo letras y espacios, mínimo 3 caracteres).",
        email: "Por favor ingrese un correo electrónico válido."
      },
      submitHandler: function (formElement) {
        // Mostrar mensaje de éxito y limpiar el formulario
        successMsg.removeClass('d-none');
        setTimeout(() => {
            successMsg.fadeOut(1000);
        }, 3000);
        formElement.reset(); // Limpia los campos
      }
    });
  });