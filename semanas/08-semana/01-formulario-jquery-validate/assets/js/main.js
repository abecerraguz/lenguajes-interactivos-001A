$(function () {
  // --- Método: solo letras (incluye tildes y ñ) y espacios ---
  $.validator.addMethod("lettersES", function (value, element) {
    return this.optional(element) || /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value);
  }, "Solo letras y espacios.");

  // --- Método: RUT chileno ---
  $.validator.addMethod("rutCL", function (value, element) {
    if (this.optional(element)) return true;

    // Normalizar: quitar puntos/espacios y convertir DV a mayúscula
    let rut = value.replace(/\./g, "").replace(/\s/g, "").toUpperCase();

    // Debe venir con guion y DV
    if (!/^\d{1,8}-[\dK]$/.test(rut)) return false;

    const [cuerpo, dvIngresado] = rut.split("-");
    let suma = 0, multiplo = 2;

    // Calcular DV (módulo 11)
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo.charAt(i), 10) * multiplo;
      multiplo = (multiplo === 7) ? 2 : multiplo + 1; // ciclo 2..7
    }
    const resto = suma % 11;
    let dvCalc = 11 - resto;
    if (dvCalc === 11) dvCalc = "0";
    else if (dvCalc === 10) dvCalc = "K";
    else dvCalc = String(dvCalc);

    return dvCalc === dvIngresado;
  }, "RUT inválido.");

  // --- Hook de validación del formulario ---
  const $form = $("form"); // si tienes un id: $("#miFormulario")

  $form.validate({
    // Opcional: integrar clases Bootstrap (si usas Bootstrap)
    errorClass: "is-invalid",
    validClass: "is-valid",
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.addClass("invalid-feedback");
      if (element.parent(".input-group").length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function (el) { $(el).addClass("is-invalid").removeClass("is-valid"); },
    unhighlight: function (el) { $(el).removeClass("is-invalid").addClass("is-valid"); },

    // --- Reglas por nombre de input ---
    rules: {
      // <input name="nombres">
      nombres: {
        required: true,
        minlength: 2,
        lettersES: true,
        // normaliza: recorta espacios dobles
        normalizer: function (value) {
          return $.trim(value.replace(/\s+/g, " "));
        }
      },
      // <input name="apellidos">
      apellidos: {
        required: true,
        minlength: 2,
        lettersES: true,
        normalizer: function (value) {
          return $.trim(value.replace(/\s+/g, " "));
        }
      },
      // <input name="email">
      email: {
        required: true,
        email: true,
        normalizer: function (value) {
          return $.trim(value);
        }
      },
      // <input name="rut">
      rut: {
        required: true,
        rutCL: true,
        // permite escribir con o sin puntos / en minúscula; igual se normaliza en el método
        normalizer: function (value) {
          return $.trim(value);
        }
      }
    },

    // --- Mensajes exactos solicitados ---
    messages: {
      nombres: {
        required: "Debes ingresar tu nombre."
      },
      apellidos: {
        required: "Debes ingresar tus apellidos."
      },
      email: {
        required: "Debes ingresar tu correo electrónico.",
        email: "El correo no es válido. Por favor ingresa uno correcto."
      },
      rut: {
        required: "Debes ingresar tu rut.",
        rutCL: "El rut es incorrecto. Revisa e inténtalo de nuevo."
      }
    },

    // Qué hacer al enviar válido
    submitHandler: function (formEl) {
      // Ejemplo: mostrar alerta Bootstrap y resetear
      const $alert = $(".alert"); // <div class="alert alert-success d-none">...
      if ($alert.length) {
        $alert.removeClass("d-none").hide().fadeIn(200);
        setTimeout(() => {
          $alert.fadeOut(300, () => $alert.addClass("d-none").show());
        }, 3000);
      }
      formEl.reset();
      // limpiar clases de estado
      $($form).find(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
    }
  });
});