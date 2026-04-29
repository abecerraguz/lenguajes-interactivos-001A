

    /**
     * Fancybox.bind(selector, opciones)
     * -----------------------------------------------
     * Método que vincula el comportamiento de lightbox
     * a todos los elementos que coincidan con el selector.
     *
     * - selector: "[data-fancybox='gallery']"
     *   Selecciona todos los <a> que tengan ese atributo.
     *   Al hacer clic en cualquiera de ellos, Fancybox
     *   abre la imagen de alta resolución (del href).
     *
     * - Si varios elementos tienen el mismo valor en
     *   data-fancybox, Fancybox los agrupa y permite
     *   navegar entre ellos con las flechas del lightbox.
     */
    Fancybox.bind("[data-fancybox='gallery']", {

      /**
       * Thumbs - Panel de miniaturas inferior
       * showOnStart: true → muestra las miniaturas automáticamente
       * al abrir el lightbox, sin que el usuario tenga que activarlas.
       */
      Thumbs: {
        showOnStart: true,
      },

      /**
       * Toolbar - Barra de herramientas superior del lightbox
       * display: lista de botones que se mostrarán y en qué orden.
       * Opciones disponibles:
       *   zoom       → aumentar/reducir la imagen
       *   slideshow  → reproducción automática de la galería
       *   fullscreen → pantalla completa
       *   download   → descargar la imagen
       *   close      → cerrar el lightbox
       */
      Toolbar: {
        display: {
          left:   [],
          middle: [],
          right:  ["zoom", "slideshow", "fullscreen", "download", "close"],
        },
      },

      /**
       * Animations - Controla las animaciones de entrada y salida
       * "zoom-in-out" hace que la imagen crezca desde la miniatura
       * al abrirse y se reduzca al cerrarse.
       */
      animated: true,

    });
