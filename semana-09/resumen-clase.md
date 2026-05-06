# Semana 09 — Examen Transversal
## Barra de Accesibilidad con JavaScript Modular

**Asignatura:** Lenguajes Interactivos  
**Fecha:** Mayo 2026

---

## ¿Qué es una barra de accesibilidad?

Una **barra de accesibilidad** es un panel de herramientas que le permite al usuario adaptar la experiencia visual y auditiva de un sitio web según sus necesidades. Es una buena práctica de desarrollo web inclusivo (WCAG).

En este proyecto la barra incluye:
- Cambio de color en encabezados
- Cambio de tipografía
- Control de tamaño de fuente (aumentar / disminuir)
- Modo oscuro / claro
- Lector de contenido en voz alta
- Panel desplegable con transición CSS

---

## Arquitectura del proyecto (módulos ES6)

El proyecto usa **módulos JavaScript (ES Modules)**, divididos en tres archivos:

```
assets/js/
├── main.js              → punto de entrada, registra todos los eventos
└── utilities/
    ├── DOM.js           → referencias a los elementos del HTML
    └── funciones.js     → lógica de cada funcionalidad
```

### ¿Por qué separar en módulos?

| Archivo | Responsabilidad |
|---|---|
| `DOM.js` | Centraliza los `querySelector` / `getElementById`. Si cambia un `id` en el HTML, solo se actualiza aquí. |
| `funciones.js` | Contiene la lógica pura. No sabe nada del HTML directamente, recibe todo desde `DOM.js`. |
| `main.js` | Conecta el DOM con las funciones a través de `addEventListener`. |

---

## DOM.js — Referencias al HTML

```js
import * as DOM from './utilities/DOM.js';
```

Exporta cada elemento del HTML como una variable y también exporta el objeto `estado`:

```js
export const estado = {
    valorBoolean: true
}
```

> **`estado.valorBoolean`** actúa como un **interruptor global**: permite que las funciones de toggle sepan en qué estado están (activado / desactivado).

---

## main.js — Registro de eventos

```js
window.addEventListener('DOMContentLoaded', (e) => {
    const fontSizes = initializeFontSizeControl(); // se ejecuta una sola vez al cargar

    DOM.changeColor.addEventListener('click', cambiarColor)
    DOM.changeFont.addEventListener('click', cambiarFont)
    DOM.agregarAlaLista.addEventListener('click', addList)
    DOM.iconUniversal.addEventListener('click', toggleClassIconUniversal)
    DOM.iconThemeToggle.addEventListener('click', toggleClassTheme)
    DOM.buttonIncreaseText.addEventListener('click', () => increaseBtn(fontSizes))
    DOM.buttonDecreaseText.addEventListener('click', () => decreaseBtn(fontSizes))
    DOM.listenButton.addEventListener('click', leerContenido)
})
```

> **`DOMContentLoaded`**: espera a que el HTML esté completamente cargado antes de buscar elementos y registrar eventos.

---

## funciones.js — Funciones de la barra

### 1. `cambiarColor(e)` — Toggle de color en encabezados

**Concepto clave:** patrón toggle con booleano.

```js
function cambiarColor(e) {
    e.preventDefault();
    DOM.encabezados.forEach(function (element) {
        if (DOM.estado.valorBoolean) {
            element.style.color = 'red'
        } else {
            element.style.color = ''  // vuelve al CSS original
        }
    })
    DOM.estado.valorBoolean = !DOM.estado.valorBoolean // invierte el estado
}
```

| Concepto | Explicación |
|---|---|
| `e.preventDefault()` | Cancela el comportamiento por defecto del evento (ej: seguir un enlace) |
| `forEach` | Recorre cada elemento del `NodeList` de encabezados |
| `!DOM.estado.valorBoolean` | El operador `!` (NOT) invierte `true → false` y `false → true` |
| `element.style.color = ''` | Al asignar vacío, el estilo inline se elimina y toma el control el CSS |

---

### 2. `cambiarFont(e)` — Toggle de tipografía

Mismo patrón que `cambiarColor`, pero modifica `fontFamily` en lugar de `color`.

```js
element.style.fontFamily = 'Roboto, sans-serif'; // activa
element.style.fontFamily = '';                    // desactiva
```

---

### 3. `addList(e)` — Agregar elementos a una lista

**Conceptos clave:** validación de input, búsqueda de duplicados, creación dinámica de nodos.

```js
function addList(e) {
    e.preventDefault();

    // Validación: no agregar si el input está vacío
    if (DOM.inputAgregar.value.length === 0) { ... }

    // Búsqueda de duplicados (case-insensitive)
    const items = DOM.lista.querySelectorAll('li');
    for (let item of items) {
        if (item.innerText.toLowerCase() === DOM.inputAgregar.value.toLowerCase()) {
            return; // salimos sin agregar
        }
    }

    // Crear y agregar el <li> al DOM
    const elementList = document.createElement('li')
    elementList.classList.add('list-group-item')
    elementList.innerText = DOM.inputAgregar.value
    DOM.lista.appendChild(elementList);
}
```

| Método | Qué hace |
|---|---|
| `document.createElement('li')` | Crea un nuevo nodo `<li>` en memoria (aún no está en el HTML) |
| `classList.add()` | Agrega una clase CSS al elemento |
| `appendChild()` | Inserta el elemento al final del contenedor |
| `.toLowerCase()` | Convierte a minúsculas para comparar sin distinguir mayúsculas |

---

### 4. `toggleClassIconUniversal()` — Abrir/cerrar panel de accesibilidad

```js
function toggleClassIconUniversal() {
    DOM.contentAccesoUniversal.classList.toggle('accesoUniversalTransition')
}
```

> **`classList.toggle(clase)`**: si la clase existe la quita, si no existe la agrega. La animación de apertura/cierre está definida en el CSS con esa clase.

---

### 5. `toggleClassTheme()` — Modo oscuro / claro

**Concepto clave:** atributos HTML (`data-*`), Bootstrap dark mode.

```js
function toggleClassTheme() {
    const html = document.documentElement; // apunta al elemento <html>

    if (html.getAttribute('data-bs-theme') === 'dark') {
        html.removeAttribute('data-bs-theme'); // modo claro
    } else {
        html.setAttribute('data-bs-theme', 'dark'); // modo oscuro
    }
}
```

> Bootstrap 5.3+ activa el modo oscuro en todos sus componentes cuando el elemento `<html>` tiene el atributo `data-bs-theme="dark"`.

---

### 6. `initializeFontSizeControl(selector)` — Inicialización del control de fuentes

**Concepto clave:** la estructura de datos `Map`.

```js
const fontSizes = new Map();

elements.forEach(el => {
    const size = parseFloat(window.getComputedStyle(el).fontSize);
    fontSizes.set(el, {
        original: size,   // tamaño original (límite mínimo)
        current:  size,   // tamaño actual (cambia con cada clic)
        max:      size + (3 * 2) // límite máximo: 3 incrementos de 2px
    });
});
```

| Concepto | Explicación |
|---|---|
| `Map` | Estructura clave→valor donde la clave puede ser un nodo del DOM |
| `getComputedStyle(el).fontSize` | Obtiene el tamaño de fuente real que calcula el navegador (ej: `"16px"`) |
| `parseFloat("16px")` | Convierte el string `"16px"` al número `16` |
| `max: size + (3 * 2)` | El máximo permitido es el tamaño original + 6px (3 incrementos de 2px) |

> Esta función se llama **una sola vez** en `main.js` al cargar la página. El `Map` resultante se pasa a `increaseBtn` y `decreaseBtn` en cada clic.

---

### 7. `increaseBtn(fontSizes, step)` — Aumentar tamaño de fuente

```js
function increaseBtn(fontSizes, step = 2) {
    let reachedMax = false;

    fontSizes.forEach((sizes, el) => {
        if (sizes.current < sizes.max) {
            sizes.current += step;
            if (sizes.current > sizes.max) sizes.current = sizes.max;
            el.style.fontSize = sizes.current + 'px';
        }
        if (sizes.current >= sizes.max) reachedMax = true;
    });

    // Efecto de accesibilidad: al llegar al máximo, fuerza menú hamburguesa
    const navbar = document.querySelector('.navbar');
    if (reachedMax && navbar) {
        navbar.classList.remove('navbar-expand-lg');
    }
}
```

**Flujo:**
1. Recorre cada elemento del `Map`
2. Si `current < max` → aumenta y aplica el estilo
3. Si algún elemento llegó al máximo → quita `navbar-expand-lg` del navbar

> Al quitar `navbar-expand-lg`, Bootstrap colapsa el menú de navegación a modo hamburguesa, porque los textos más grandes necesitan más espacio horizontal.

---

### 8. `decreaseBtn(fontSizes, step)` — Disminuir tamaño de fuente

Patrón simétrico a `increaseBtn`. El límite mínimo es `sizes.original`.

```js
function decreaseBtn(fontSizes, step = 2) {
    let backToOriginal = true;

    fontSizes.forEach((sizes, el) => {
        if (sizes.current > sizes.original) {
            sizes.current -= step;
            if (sizes.current < sizes.original) sizes.current = sizes.original;
            el.style.fontSize = sizes.current + 'px';
        }
        if (sizes.current > sizes.original) backToOriginal = false;
    });

    // Cuando todos vuelven al original → restauramos el navbar expandido
    const navbar = document.querySelector('.navbar');
    if (backToOriginal && navbar) {
        navbar.classList.add('navbar-expand-lg');
    }
}
```

**Comparativa de límites:**

| Función | Límite | Dónde se guarda |
|---|---|---|
| `increaseBtn` | No superar `sizes.max` | En el `Map` (calculado en `initializeFontSizeControl`) |
| `decreaseBtn` | No bajar de `sizes.original` | En el `Map` (leído al inicializar) |

---

### 9. `leerContenido()` — Lector de voz (Web Speech API)

**Concepto clave:** API nativa del navegador para síntesis de voz.

```js
function leerContenido() {
    const content = document.querySelector('main');

    // Manejo de estados: pausar / reanudar / iniciar
    if (window.speechSynthesis.speaking) {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume(); // reanudar
        } else {
            window.speechSynthesis.pause();  // pausar
        }
        return;
    }

    // Iniciar lectura desde el principio
    const declaracion = new SpeechSynthesisUtterance(content.innerText);
    declaracion.lang  = 'es-ES';
    declaracion.rate  = 1;
    declaracion.pitch = 1;
    window.speechSynthesis.speak(declaracion);

    // Cuando termina → restaurar ícono
    declaracion.onend = () => { ... };
}
```

| API | Descripción |
|---|---|
| `window.speechSynthesis` | Motor de voz del navegador (nativo, sin librerías) |
| `SpeechSynthesisUtterance` | Objeto que representa el texto a leer y su configuración |
| `.speaking` | `true` si hay algo reproduciéndose (incluso pausado) |
| `.paused` | `true` si la reproducción está pausada |
| `.speak()` | Inicia la lectura |
| `.pause()` / `.resume()` | Pausa y reanuda |
| `.onend` | Callback que se ejecuta al terminar de leer |

---

## Resumen de conceptos vistos en la semana

| Concepto | Dónde se aplica |
|---|---|
| **Módulos ES6** (`import` / `export`) | Toda la arquitectura del proyecto |
| **`addEventListener`** | `main.js` — conexión de eventos |
| **Patrón Toggle** (booleano `!`) | `cambiarColor`, `cambiarFont` |
| **`forEach`** | Recorrer `NodeList` y `Map` |
| **`createElement` / `appendChild`** | `addList` |
| **`classList`** (toggle, add, remove, replace) | `toggleClassIconUniversal`, `toggleClassTheme`, `increaseBtn`, `decreaseBtn` |
| **`getComputedStyle`** | `initializeFontSizeControl` |
| **`Map`** | `initializeFontSizeControl`, `increaseBtn`, `decreaseBtn` |
| **`parseFloat`** | Convertir `"16px"` → `16` |
| **Parámetros por defecto** (`step = 2`) | `increaseBtn`, `decreaseBtn` |
| **Web Speech API** | `leerContenido` |
| **`data-bs-theme`** (Bootstrap dark mode) | `toggleClassTheme` |
| **`navbar-expand-lg`** (Bootstrap responsive) | `increaseBtn`, `decreaseBtn` |
