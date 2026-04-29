/**
 * ============================================================
 *  CARRUSEL INTERACTIVO CON OWL CAROUSEL 2
 * ============================================================
 *
 *  Owl Carousel 2 es un plugin jQuery para crear carruseles
 *  responsivos y altamente configurables.
 *
 *  Funcionamiento básico:
 *  1. Se selecciona el elemento con clase "owl-carousel" usando jQuery.
 *  2. Se llama al método .owlCarousel({}) pasando un objeto de opciones.
 *  3. El plugin transforma los div.item en diapositivas navegables.
 *
 *  Documentación oficial: https://owlcarousel2.github.io/OwlCarousel2/
 * ============================================================
 */

// $(document).ready(function() { ... })
// Garantiza que el DOM esté completamente cargado antes de inicializar
// el carrusel. Si se ejecuta antes, el plugin no encontrará el elemento.
$(function () {

    // Seleccionamos el elemento con clase "owl-carousel" y llamamos al método
    // .owlCarousel() para inicializarlo. Recibe un objeto con todas las opciones.
    $('.owl-carousel').owlCarousel({

        // ----------------------------------------------------------
        //  dots: true
        //  Muestra los puntos de paginación debajo del carrusel.
        //  Cada punto representa un item (o grupo de items) y
        //  permite saber en qué posición se encuentra el carrusel.
        //  El dot activo se resalta con CSS en main.css.
        // ----------------------------------------------------------
        dots: true,

        // ----------------------------------------------------------
        //  autoplayTimeout: 3000
        //  Tiempo en milisegundos que el carrusel espera antes de
        //  avanzar al siguiente item. 3000ms = 3 segundos.
        // ----------------------------------------------------------
        autoplayTimeout: 3000,

        // ----------------------------------------------------------
        //  loop: true
        //  El carrusel vuelve al principio cuando llega al último item.
        //  Si es false, se detiene al llegar al final.
        // ----------------------------------------------------------
        loop: true,

        // ----------------------------------------------------------
        //  margin: 10
        //  Espacio en píxeles entre cada item del carrusel.
        // ----------------------------------------------------------
        margin: 10,

        // ----------------------------------------------------------
        //  nav: true
        //  Muestra los botones de navegación (anterior / siguiente).
        //  El texto de cada botón se personaliza con navText.
        // ----------------------------------------------------------
        nav: true,

        // ----------------------------------------------------------
        //  navText: [ "html anterior", "html siguiente" ]
        //  Permite usar HTML dentro de los botones de navegación.
        //  Aquí usamos íconos de Bootstrap Icons (bi-arrow-*).
        //  Los íconos funcionan porque se cargó bootstrap-icons CSS en el HTML.
        // ----------------------------------------------------------
        navText: [
            "<i class='bi bi-arrow-left-circle'></i>",
            "<i class='bi bi-arrow-right-circle'></i>"
        ],

        // ----------------------------------------------------------
        //  autoplay: true
        //  El carrusel avanza automáticamente sin que el usuario
        //  tenga que hacer clic en los botones de navegación.
        // ----------------------------------------------------------
        autoplay: true,

        // ----------------------------------------------------------
        //  autoplayHoverPause: true
        //  Pausa el autoplay cuando el usuario pasa el mouse
        //  sobre el carrusel. Mejora la experiencia de usuario
        //  ya que le da tiempo de ver el item que le interesa.
        // ----------------------------------------------------------
        autoplayHoverPause: true,

        // ----------------------------------------------------------
        //  responsive: { breakpoint: { items: n } }
        //  Define cuántos items se muestran a la vez según el
        //  ancho de la pantalla (diseño responsivo).
        //
        //  Breakpoints (puntos de quiebre):
        //    0px   y más → 1 item  (móvil)
        //    600px y más → 3 items (tablet)
        //    1000px y más → 5 items (escritorio)
        //
        //  El plugin aplica la regla del breakpoint más cercano
        //  por debajo del ancho actual de la pantalla.
        // ----------------------------------------------------------
        responsive: {
            0: {
                items: 1    // Pantallas pequeñas (móvil): 1 imagen a la vez
            },
            600: {
                items: 3    // Pantallas medianas (tablet): 3 imágenes a la vez
            },
            1000: {
                items: 5    // Pantallas grandes (escritorio): 5 imágenes a la vez
            }
        }

    });

});