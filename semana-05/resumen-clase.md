# Resumen de Clase — Semana 05
**Fecha:** 8 de abril de 2026  
**Tema:** Manipulación del DOM con JavaScript modular (ES Modules)

---

## 1. ¿Qué es el DOM?

El **DOM** (Document Object Model) es la representación en memoria que el navegador construye a partir del HTML. Cada etiqueta se convierte en un **nodo**, formando un árbol que JavaScript puede leer y modificar en tiempo real sin recargar la página.

---

## 2. Arquitectura del proyecto (ES Modules)

El proyecto separa responsabilidades en tres archivos JavaScript con `type="module"`:

```
assets/js/
├── main.js               → Event Listeners (punto de entrada)
└── utilities/
    ├── DOM.js            → Referencias a elementos del DOM + estado compartido
    └── funciones.js      → Lógica de cada función (importa desde DOM.js)
```

| Archivo | Responsabilidad |
|---|---|
| `DOM.js` | `document.getElementById` / `querySelectorAll` + exportaciones |
| `funciones.js` | Lógica de transformación. Importa `DOM.js` |
| `main.js` | Registra `addEventListener`. Importa `DOM.js` y `funciones.js` |

> **Ventaja:** cada archivo tiene una sola responsabilidad. Si cambias un selector, solo tocas `DOM.js`.

---

## 3. Selección de elementos del DOM

### Por ID — `getElementById`
```js
const boton = document.getElementById('changeColor');
```
Retorna **un único elemento** o `null` si no existe.

### Por múltiples elementos — `querySelectorAll`
```js
const encabezados = document.querySelectorAll('.header');
```
Retorna un **NodeList** (estático) con todos los elementos que coincidan con el selector CSS.

> Un `NodeList` se puede recorrer con `forEach`, pero para usar `map` o `filter` hay que convertirlo con `Array.from(NodeList)`.

---

## 4. Estado compartido con un objeto exportado

```js
// DOM.js
export const estado = {
    valorBoolean: true
};
```

Al exportar un **objeto**, todos los módulos que lo importen comparten la **misma referencia en memoria**. Cambiar `estado.valorBoolean` en `funciones.js` lo actualiza para todos.

> Si se exportara una variable primitiva (`export let flag = true`) no funcionaría, porque cada módulo recibiría una copia.

---

## 5. Patrón Toggle con un booleano

Muchas funciones siguen el mismo patrón de **interruptor**:

```js
function cambiarColor(e) {
    e.preventDefault(); // evita que el <a href="#"> recargue la página

    DOM.encabezados.forEach(function(element) {
        if (DOM.estado.valorBoolean) {
            element.style.color = 'red';   // aplica cambio
        } else {
            element.style.color = '';      // revierte (restaura CSS externo)
        }
    });

    DOM.estado.valorBoolean = !DOM.estado.valorBoolean; // invierte para el próximo click
}
```

**Regla:** `element.style.propiedad = ''` (string vacío) elimina el estilo **inline** y deja que el CSS externo tome control.

---

## 6. Funciones implementadas en clase

### 6.1 `cambiarColor(e)`
- Aplica `style.color = 'red'` o lo elimina en todos los `.header`.
- Usa el estado compartido `DOM.estado.valorBoolean` como toggle.

### 6.2 `cambiarFont(e)`
- Aplica `style.fontFamily = 'Roboto, sans-serif'` o lo elimina en todos los `.header`.
- Mismo patrón toggle que `cambiarColor`.

### 6.3 `cambiarTexto(e)`
- Guarda el texto original de cada `.text` en el atributo `data-original`.
- En el primer click reemplaza el contenido con texto generado dinámicamente:  
  ```js
  parrafo.innerText = `Párrafo ${index + 1} — texto modificado dinámicamente con JavaScript`;
  ```
- En el segundo click recupera el valor de `data-original` y lo restaura.
- **Concepto clave:** `data-*` atributos permiten almacenar información personalizada directamente en el nodo HTML.

### 6.4 `cambiarURL(e)`
- Lee el `src` actual de `#image1` con `DOM.image1.src.includes('placehold.jp')`.
- Alterna entre la imagen placeholder y el logo local `assets/img/javascript.svg`.
- También actualiza el `alt` para mantener la accesibilidad.

### 6.5 `addList(e)`
Agrega items a una `<ol>` con tres pasos de validación:

```
1. ¿El input está vacío?        → alerta y retorna
2. ¿El texto ya existe en la lista? → comparación toLowerCase(), alerta y retorna
3. Crea <li>, le asigna texto y lo inserta con appendChild()
```

**Métodos de creación dinámica de nodos:**

| Método | Para qué sirve |
|---|---|
| `document.createElement('li')` | Crea un nodo en memoria (no en el DOM aún) |
| `element.classList.add('clase')` | Añade una clase CSS al nodo |
| `element.innerText = 'texto'` | Establece el contenido de texto visible |
| `padre.appendChild(hijo)` | Inserta el nodo al final del padre en el DOM |

### 6.6 `destacarPares(e)` y `destacarImpares(e)`
```js
Array.from(DOM.encabezados).forEach(function(element, index) {
    if (index % 2 === 0) {            // par
        element.classList.toggle('destacado');
    }
});
```
- `Array.from()` convierte el NodeList en Array para acceder al índice.
- `classList.toggle('clase')` agrega la clase si no la tiene, la quita si ya la tiene.
- La clase `.destacado` en CSS aplica fondo amarillo y borde izquierdo dorado.

### 6.7 `agrandarEncabezados(e)` y `disminuirEncabezados(e)`
```js
const tamañoActual  = window.getComputedStyle(element).fontSize; // "24px"
const tamañoNumerico = parseFloat(tamañoActual);                 // 24
element.style.fontSize = (tamañoNumerico + 4) + 'px';           // "28px"
```
- `window.getComputedStyle(el)` retorna el estilo **final calculado** incluido lo del CSS externo.
- `parseFloat` elimina la unidad `'px'` dejando solo el número.
- Solo actúa sobre los encabezados que tienen la clase `.destacado`.
- `disminuirEncabezados` no baja de 10px: `if (tamañoNumerico > 10) { ... }`.

---

## 7. Event Listeners en `main.js`

```js
window.addEventListener('DOMContentLoaded', (e) => {
    DOM.changeColor.addEventListener('click', cambiarColor);
    DOM.changeFont.addEventListener('click', cambiarFont);
    DOM.changeText.addEventListener('click', cambiarTexto);
    DOM.changeURL.addEventListener('click', cambiarURL);
    DOM.agregarAlaLista.addEventListener('click', addList);
    DOM.changeDetacarEncabezadoPares.addEventListener('click', destacarPares);
    DOM.changeDestacarEncabezadoImpares.addEventListener('click', destacarImpares);
    DOM.changeAgrandarEncabezados.addEventListener('click', agrandarEncabezados);
    DOM.changeDisminuirEncabezados.addEventListener('click', disminuirEncabezados);
});
```

**¿Por qué `DOMContentLoaded`?**  
Los scripts con `type="module"` en el `<body>` ya se cargan diferidos, pero envolver los listeners en `DOMContentLoaded` garantiza que **todos los nodos del HTML existen** antes de intentar seleccionarlos.

**Regla al pasar callbacks:** se pasa la función **sin paréntesis** (`cambiarColor`, no `cambiarColor()`). Los paréntesis ejecutarían la función de inmediato en lugar de registrarla como listener.

---

## 8. `classList` — métodos principales

| Método | Descripción |
|---|---|
| `.add('clase')` | Agrega la clase |
| `.remove('clase')` | Elimina la clase |
| `.toggle('clase')` | La agrega si no existe, la quita si existe |
| `.contains('clase')` | Retorna `true` / `false` |

---

## 9. Operador módulo `%` para pares e impares

```js
4 % 2 === 0   // → true  (par)
5 % 2 === 0   // → false (impar)
```

Se usa en los índices del `forEach` para distinguir qué encabezados son pares y cuáles impares.

---

## 10. Buenas prácticas aplicadas

- **`e.preventDefault()`** en todo listener de `<a href="#">` para evitar scroll al tope.
- **Comparación con `toLowerCase()`** para que la búsqueda de duplicados no distinga mayúsculas.
- **`return` temprano** (early return) para evitar anidamiento innecesario en validaciones.
- **Límite mínimo de tamaño** en `disminuirEncabezados` para no romper la UI.
- **`data-original`** para persistir información en el nodo sin variables globales.
- **Módulos ES** (`import`/`export`) para evitar contaminar el scope global.
