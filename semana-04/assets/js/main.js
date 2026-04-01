// =============================================================
// SEMANA 04 — MANIPULACIÓN DEL DOM CON JAVASCRIPT
// =============================================================
// Temas que cubre este archivo:
//   - Selección de elementos del DOM
//   - Creación dinámica de HTML con template literals
//   - Eventos del DOM (addEventListener)
//   - Modificación de estilos y atributos
//   - Creación de nuevos elementos con createElement
//   - Variables de estado (toggle flags)
//   - Scroll y visibilidad de elementos
// =============================================================

// 'DOMContentLoaded': evento que se dispara cuando el navegador terminó de parsear
// todo el HTML y construyó el árbol DOM, sin esperar imágenes ni hojas de estilo.
// Envolvemos todo el código aquí para garantizar que los elementos ya existan.
window.addEventListener('DOMContentLoaded', function () {

    // ----------------------------------------------------------------
    // 1. REFERENCIA AL CONTENEDOR DE CARDS
    // ----------------------------------------------------------------

    // getElementById() selecciona un elemento del DOM por su atributo id.
    // Guardamos la referencia en una variable 'const' porque no cambiará.
    const main = document.getElementById('innerCard');


    // ----------------------------------------------------------------
    // 2. GENERAR ARREGLO DE OBJETOS (datos de las tarjetas)
    // ----------------------------------------------------------------

    // Array.from() crea un arreglo a partir de un objeto similar a un arreglo.
    // { length: 16 } actúa como un arreglo vacío de 16 posiciones.
    // El segundo argumento es una función de mapeo que se ejecuta por cada posición:
    //   _  → valor en la posición (lo ignoramos con el nombre _)
    //   i  → índice actual: 0, 1, 2, ..., 15
    // La función retorna un objeto literal ({ }) por cada iteración.
    const cards = Array.from({ length: 16 }, (_, i) => ({

        // Template literal (``) para construir la URL de imagen con el índice.
        // picsum.photos devuelve imágenes aleatorias de 300x200px.
        // ?random=${i + 1} garantiza una imagen distinta para cada card.
        picture: `https://picsum.photos/300/200?random=${i + 1}`,

        // Título de relleno igual para todas las cards
        title: 'Lorem ipsum dolor sit amet',

        // Texto descriptivo de relleno para cada card
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore accusantium voluptate deserunt repellendus quibusdam dolor.'
    }));


    // ----------------------------------------------------------------
    // 3. RENDERIZAR LAS CARDS EN EL DOM
    // ----------------------------------------------------------------

    // MEJORA: usamos .map() para construir el HTML completo PRIMERO como string,
    // y luego lo insertamos de una sola vez con innerHTML.
    // Esto es más eficiente que usar innerHTML += dentro de un forEach,
    // porque innerHTML += obliga al navegador a re-parsear el DOM en cada iteración.

    // .map() recorre el arreglo y retorna un nuevo arreglo con el HTML de cada card.
    // Cada elemento usa template literals para incrustar los datos del objeto card.
    const cardsHTML = cards.map(card => `
      <div class="col-md-3 mb-3">
        <div class="card">
            <img src="${card.picture}" class="card-img-top" alt="Imagen aleatoria" loading="lazy"/>
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.content}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    `
    // .join('') convierte el arreglo de strings en un solo string (sin comas entre ellos)
    ).join('');

    // Insertamos todo el HTML generado de una sola vez en el contenedor.
    // innerHTML permite escribir HTML como string directamente en un elemento.
    main.innerHTML = cardsHTML;


    // ----------------------------------------------------------------
    // 4. VARIABLES DE ESTADO (TOGGLE FLAGS)
    // ----------------------------------------------------------------

    // Estas variables actúan como interruptores (toggles).
    // Guardan si una acción fue aplicada (true) o no (false).
    // Nos permiten alternar entre dos estados con cada clic.

    let isColorChanged = false; // ¿El color de los títulos fue cambiado?
    let isTextChanged  = false; // ¿El texto del tercer título fue cambiado?
    let isImageChanged = false; // ¿La imagen de la tercera card fue cambiada?
    let originalSrc    = '';    // Guarda la URL original de la imagen para restaurarla


    // ----------------------------------------------------------------
    // 5. FUNCIÓN: Cambiar / restaurar el color de todos los títulos
    // ----------------------------------------------------------------

    function toggleTitleColor() {
        // querySelectorAll() selecciona TODOS los elementos que coinciden con el selector CSS.
        // Retorna un NodeList (parecido a un arreglo, pero no es exactamente un Array).
        const titles = document.querySelectorAll('.card-title');

        // forEach() itera sobre cada elemento del NodeList.
        titles.forEach(title => {
            // Operador ternario: condición ? valorSiVerdadero : valorSiFalso
            // Si isColorChanged es true → restauramos el color (string vacío = hereda el CSS)
            // Si isColorChanged es false → aplicamos el color 'tomato'
            title.style.color = isColorChanged ? '' : 'tomato';
        });

        // Invertimos el flag con el operador NOT lógico (!):
        // false → true (fue cambiado), true → false (fue restaurado)
        isColorChanged = !isColorChanged;
    }


    // ----------------------------------------------------------------
    // 6. FUNCIÓN: Cambiar / restaurar el texto del tercer título
    // ----------------------------------------------------------------

    // El parámetro 'e' es el objeto Event que contiene información sobre el clic.
    function toggleThirdTitleText(e) {
        // preventDefault() cancela la acción por defecto del evento.
        // Para un <a href="#"> evita que la página haga scroll al inicio.
        e.preventDefault();

        // Seleccionamos todos los títulos de las cards
        const titles = document.querySelectorAll('.card-title');

        // Verificamos que el tercer elemento existe antes de usarlo.
        // Índices en JS empiezan en 0, por lo tanto el tercero está en la posición [2].
        if (titles[2]) {
            // innerText lee o escribe el contenido de texto VISIBLE del elemento.
            // Operador ternario: si ya fue cambiado → revertimos, si no → actualizamos.
            titles[2].innerText = isTextChanged
                ? 'Lorem ipsum dolor sit amet'   // texto original
                : 'Título actualizado con JS';   // texto nuevo

            // Alternamos el estado del flag
            isTextChanged = !isTextChanged;
        }
    }


    // ----------------------------------------------------------------
    // 7. FUNCIÓN: Cambiar / restaurar el atributo src de la tercera imagen
    // ----------------------------------------------------------------

    function toggleAttr(e) {
        e.preventDefault(); // Evitamos el comportamiento por defecto del enlace

        // Seleccionamos TODAS las imágenes del documento
        const images = document.querySelectorAll('img');

        // Verificamos que existe la imagen en la posición [2] (tercera imagen)
        if (images[2]) {

            if (!isImageChanged) {
                // ── PRIMER CLIC: Cambiamos la imagen ──────────────────────────
                // getAttribute('src') obtiene el valor actual del atributo src.
                // Lo guardamos en originalSrc para poder restaurarlo después.
                originalSrc = images[2].getAttribute('src');

                // setAttribute('atributo', 'valor') modifica el valor de un atributo HTML.
                // Reemplazamos la imagen original por un placeholder gris de 300x200.
                images[2].setAttribute('src', 'https://placehold.jp/300x200.png');

            } else {
                // ── SEGUNDO CLIC: Restauramos la imagen original ───────────────
                images[2].setAttribute('src', originalSrc);
            }

            // Alternamos el flag de estado
            isImageChanged = !isImageChanged;
        }
    }


    // ----------------------------------------------------------------
    // 8. FUNCIÓN: Crear un nuevo elemento dinámicamente
    // ----------------------------------------------------------------

    function createNewElement(e) {
        e.preventDefault(); // Evitamos el comportamiento por defecto del enlace

        // querySelector() selecciona el PRIMER elemento que coincida con el selector.
        // Aquí buscamos la línea horizontal <hr> como punto de referencia.
        const hr = document.querySelector('hr');

        // createElement('etiqueta') crea un nuevo nodo HTML en memoria.
        // El elemento existe en JS pero todavía NO está en el DOM de la página.
        const newParagraph = document.createElement('p');

        // .innerText asigna el contenido de texto del nuevo elemento
        newParagraph.innerText = '🎉 ¡Etiqueta creada dinámicamente!';

        // .classList.add() agrega una o varias clases CSS al elemento.
        // Estas son clases de Bootstrap: margen superior, color verde y negrita.
        newParagraph.classList.add('mt-3', 'text-success', 'fw-bold');

        // .after() inserta el elemento nuevo INMEDIATAMENTE DESPUÉS del nodo de referencia.
        // Es un método moderno de la API DOM (ChildNode.after).
        // Ahora sí el párrafo queda visible en la página.
        hr.after(newParagraph);
    }


    // ----------------------------------------------------------------
    // 9. SELECCIÓN DE BOTONES DEL DOM
    // ----------------------------------------------------------------

    // Capturamos referencias a los botones del HTML usando su atributo id.
    // Guardamos en variables const porque estas referencias no cambiarán.
    const buttonChangeColor  = document.getElementById('buttonChangeColor');
    const buttonInnerText    = document.getElementById('buttonInnerText');
    const buttonSetAttr      = document.getElementById('buttonSetAttr');
    const buttonCreateElement = document.getElementById('buttonCreateElement');

    // Referencia al botón flotante "Subir al inicio"
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');


    // ----------------------------------------------------------------
    // 10. ASIGNAR EVENTOS A LOS BOTONES
    // ----------------------------------------------------------------

    // addEventListener(tipoDeEvento, funcionCallback) escucha un evento en un elemento.
    // Cuando el usuario hace clic, JavaScript ejecuta automáticamente la función indicada.
    // Pasamos la función SIN paréntesis (toggleTitleColor, no toggleTitleColor())
    // para que sea una referencia, no una llamada inmediata.
    buttonChangeColor.addEventListener('click', toggleTitleColor);
    buttonInnerText.addEventListener('click', toggleThirdTitleText);
    buttonSetAttr.addEventListener('click', toggleAttr);
    buttonCreateElement.addEventListener('click', createNewElement);


    // ----------------------------------------------------------------
    // 11. BOTÓN "SUBIR AL INICIO" - Visibilidad según scroll
    // ----------------------------------------------------------------

    // Escuchamos el evento 'scroll' sobre el objeto window (la ventana del navegador).
    // Este evento se dispara CADA VEZ que el usuario desplaza la página.
    // Usamos una arrow function (() => {}) como callback.
    window.addEventListener('scroll', () => {

        // window.scrollY devuelve los píxeles que se han desplazado verticalmente.
        // Si el usuario bajó más de 300px → mostramos el botón.
        // Si bajó menos (o está arriba) → lo ocultamos.
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block'; // Mostramos el botón "Subir"
        } else {
            scrollToTopBtn.style.display = 'none';  // Ocultamos el botón "Subir"
        }
    });


    // ----------------------------------------------------------------
    // 12. BOTÓN "SUBIR AL INICIO" - Acción de scroll suave
    // ----------------------------------------------------------------

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Evitamos que el <a href="#"> haga un salto brusco

        // window.scrollTo() desplaza la ventana a una posición específica.
        // top: 0      → ir a los 0px desde el inicio (la parte superior de la página)
        // behavior: 'smooth' → la animación de desplazamiento es suave en lugar de instantánea
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}); // ← Fin del bloque DOMContentLoaded