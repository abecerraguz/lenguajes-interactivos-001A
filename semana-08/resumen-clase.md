# Resumen de Clase — Semana 08
**Fecha:** 29 de abril de 2026  
**Tema:** Plugins jQuery — Validación de Formularios, AOS, Owl Carousel 2 y Fancybox

---

## 1. ¿Qué es un Plugin jQuery?

Un **plugin** es una extensión de jQuery que agrega nuevas funcionalidades al objeto `$`.  
Se carga como un `<script>` después de jQuery y expone nuevos métodos que se usan directamente sobre los selectores:

```js
// Patrón general de uso de un plugin jQuery
$('selector').nombrePlugin({ opción: valor })
```

> **Regla de oro:** Los scripts siempre deben cargarse en orden:  
> `1. jQuery` → `2. jQuery Migrate (si aplica)` → `3. Plugin` → `4. main.js`

---

## 2. jQuery Validation — `01-formulario-jquery-validate`

Plugin para validar formularios de forma declarativa, sin escribir `if/else` manualmente.  
Documentación: [https://jqueryvalidation.org/](https://jqueryvalidation.org/)

### Integración

```html
<script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/jquery.validate.min.js"></script>
```

### Estructura base

```js
$('form').validate({
    rules:         { /* reglas por campo */ },
    messages:      { /* mensajes de error */ },
    submitHandler: function(formElement) { /* se ejecuta si todo es válido */ }
});
```

> Los nombres de las claves en `rules` y `messages` deben coincidir con el atributo `name` del `<input>` en el HTML.

### Reglas nativas disponibles

| Regla | Descripción |
|---|---|
| `required: true` | El campo no puede estar vacío |
| `minlength: n` | Mínimo de caracteres |
| `maxlength: n` | Máximo de caracteres |
| `email: true` | Formato de correo electrónico válido |
| `url: true` | Formato de URL válida |
| `number: true` | Solo números |
| `min: n` / `max: n` | Valor numérico mínimo / máximo |
| `equalTo: '#id'` | Debe ser igual a otro campo (ej: confirmar contraseña) |

### Reglas personalizadas — `$.validator.addMethod()`

Permite crear reglas propias que no vienen incluidas por defecto:

```js
// PASO 1: registrar la regla con un nombre clave
$.validator.addMethod("letters", function(value, element) {
    // true = válido | false = inválido
    // this.optional(element) evita mostrar el error si el campo está vacío
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
});

// PASO 2: activar la regla en el campo que la necesita
$('form').validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            letters: true   // ← se activa aquí, por el nombre registrado
        }
    }
});
```

> La clave `name` en `rules` corresponde al atributo `name="name"` del `<input>` en el HTML.  
> El plugin conecta automáticamente cada clave con su campo.

### Mensajes por regla

Cuando un campo tiene varias reglas, se pueden asignar mensajes distintos a cada una:

```js
messages: {
    email: {
        required:    "El correo es obligatorio.",
        email:       "Formato de email inválido.",
        customEmail: "El formato debe ser: usuario@dominio.com"
    }
}
```

### submitHandler

```js
submitHandler: function(formElement) {
    // Solo se ejecuta si TODAS las reglas se cumplen.
    // formElement es el <form> nativo (no jQuery), por eso usamos .reset()
    successMsg.removeClass('d-none');
    setTimeout(() => { successMsg.fadeOut(1000); }, 3000);
    formElement.reset();
}
```

---

## 3. AOS — Animate On Scroll — `02-AOS`

Librería que anima elementos cuando entran al viewport al hacer scroll.  
**No depende de jQuery.** Funciona solo con atributos `data-aos` en el HTML.  
Documentación: [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)

### Integración

```html
<!-- CSS en el <head> -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- JS antes del </body> -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

### Inicialización

```js
AOS.init({
    offset:   200,          // píxeles desde el borde inferior del viewport para activar
    duration: 600,          // duración de la animación en ms
    easing:   'ease-in-sine', // curva de aceleración
    delay:    100,          // retraso antes de iniciar la animación (ms)
});
```

### Uso en HTML — atributos `data-aos`

```html
<!-- Animación básica -->
<div data-aos="fade-up">Contenido</div>

<!-- Con opciones individuales por elemento -->
<div data-aos="fade-right"
     data-aos-duration="3000"
     data-aos-easing="ease-in-sine"
     data-aos-delay="300"
     data-aos-offset="500">
  Contenido
</div>
```

### Animaciones disponibles

| Tipo | Ejemplos |
|---|---|
| **Fade** | `fade-up`, `fade-down`, `fade-right`, `fade-left`, `fade-up-right`, `fade-up-left` |
| **Flip** | `flip-left`, `flip-right`, `flip-up`, `flip-down` |
| **Zoom** | `zoom-in`, `zoom-in-up`, `zoom-out`, `zoom-out-down` |
| **Slide** | `slide-up`, `slide-down`, `slide-right`, `slide-left` |

### Anchor Placement — `data-aos-anchor-placement`

Controla en qué punto del elemento respecto al viewport se dispara la animación:

```html
<div data-aos="fade-up" data-aos-anchor-placement="top-center">
<!-- Se anima cuando el TOP del elemento llega al CENTER del viewport -->
```

Formato: `"[parte del elemento]-[parte del viewport]"`  
Valores: `top`, `center`, `bottom` para cada lado.

---

## 4. Owl Carousel 2 — `03-Owl-Carousel-2`

Plugin jQuery para crear carruseles de imágenes responsivos y configurables.  
Documentación: [https://owlcarousel2.github.io/OwlCarousel2/](https://owlcarousel2.github.io/OwlCarousel2/)

### Integración (requiere jQuery)

```html
<!-- CSS (dos archivos obligatorios) -->
<link rel="stylesheet" href="owl.carousel.min.css">   <!-- estructura -->
<link rel="stylesheet" href="owl.theme.default.css">  <!-- estilos visuales -->

<!-- JS después de jQuery -->
<script src="owl.carousel.js"></script>
```

### Estructura HTML mínima

```html
<!-- Contenedor externo: para posicionar las flechas con CSS -->
<div class="carousel-wrap">
    <!-- La clase "owl-carousel" es OBLIGATORIA: el plugin la detecta -->
    <div class="owl-carousel">
        <div class="item"><img src="imagen.jpg" alt="..."></div>
        <div class="item"><img src="imagen.jpg" alt="..."></div>
    </div>
</div>
```

### Inicialización y opciones

```js
$('.owl-carousel').owlCarousel({
    loop:               true,    // vuelve al inicio al llegar al final
    margin:             10,      // espacio en px entre items
    nav:                true,    // muestra botones anterior/siguiente
    dots:               true,    // puntos de paginación
    autoplay:           true,    // avance automático
    autoplayTimeout:    3000,    // ms entre cada avance automático
    autoplayHoverPause: true,    // pausa el autoplay al pasar el mouse

    // navText: permite HTML en los botones de navegación
    navText: [
        "<i class='bi bi-arrow-left-circle'></i>",
        "<i class='bi bi-arrow-right-circle'></i>"
    ],

    // responsive: cuántos items mostrar por breakpoint
    responsive: {
        0:    { items: 1 },   // móvil
        600:  { items: 3 },   // tablet
        1000: { items: 5 }    // escritorio
    }
});
```

> **Importante:** El selector CSS para las flechas generadas por el plugin es  
> `.owl-nav button.owl-prev` y `.owl-nav button.owl-next` (no `.owl-nav > div`).

---

## 5. Fancybox — `04-fancybook`

Librería para crear lightboxes (visualizadores de imágenes en capa superior).  
**No requiere jQuery** (versión 5 — `@fancyapps/ui`).  
Documentación: [https://fancyapps.com/fancybox/](https://fancyapps.com/fancybox/)

### Integración

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox/fancybox.css">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox/fancybox.umd.js"></script>
```

### Estructura HTML

```html
<!-- data-fancybox="gallery" agrupa las imágenes en una misma galería navegable -->
<!-- href            = imagen en alta resolución (se muestra en el lightbox)     -->
<!-- src             = miniatura visible en la página                            -->
<!-- data-caption    = texto que aparece debajo de la imagen en el lightbox      -->

<a data-fancybox="gallery"
   href="imagen-grande.jpg"
   data-caption="Descripción de la imagen">
    <img src="miniatura.jpg" alt="Descripción">
</a>
```

> Todos los `<a>` con el mismo valor en `data-fancybox` quedan agrupados.  
> El usuario puede navegar entre ellos con las flechas sin cerrar el lightbox.

### Inicialización con `Fancybox.bind()`

```js
Fancybox.bind("[data-fancybox='gallery']", {

    // Thumbs: panel de miniaturas inferior
    Thumbs: {
        showOnStart: true,   // muestra las miniaturas al abrir el lightbox
    },

    // Toolbar: botones visibles en la barra superior del lightbox
    Toolbar: {
        display: {
            left:   [],
            middle: [],
            right:  ["zoom", "slideshow", "fullscreen", "download", "close"],
        },
    },
});
```

> `Fancybox.bind(selector, opciones)` vincula el lightbox a todos los elementos
> que coincidan con el selector. Se diferencia de versiones anteriores donde
> se usaba `$('[data-fancybox]').fancybox({})`.

---

## 6. Comparativa de plugins vistos

| Plugin | Depende de jQuery | Activación | Uso principal |
|---|---|---|---|
| jQuery Validation | ✅ Sí | `$('form').validate({})` | Validar formularios |
| AOS | ❌ No | `AOS.init({})` + atributos HTML | Animaciones al hacer scroll |
| Owl Carousel 2 | ✅ Sí | `$('.owl-carousel').owlCarousel({})` | Carruseles responsivos |
| Fancybox v5 | ❌ No | `Fancybox.bind(selector, {})` | Lightbox de imágenes |
