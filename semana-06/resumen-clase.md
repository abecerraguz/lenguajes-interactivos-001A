# Resumen de Clase — Semana 06
**Fecha:** 15 de abril de 2026  
**Tema:** Creación dinámica de elementos, objetos, arrays y Bootstrap Modal

---

## 1. Descripción del proyecto

Se construyó un **chat de comentarios** donde el usuario puede escribir su nombre y un texto, y estos se renderizan como tarjetas en pantalla. El proyecto integra:

- **Bootstrap 5** — componente Modal para el formulario de comentario.
- **Font Awesome** — íconos en los botones del header.
- **JavaScript Vanilla** — manejo del DOM, validación, objetos y arrays.

---

## 2. Estructura del HTML

```
chat
├── chat__header          → Logo + botones "Inscribirme" / "Iniciar sesión"
├── chat__body            → Título, imagen de la semana, contador y botón del modal
├── chat__body #chat      → Zona donde se insertan las tarjetas de comentarios
└── Modal Bootstrap       → Formulario con campos usuario, comentario y alerta
```

---

## 3. Selección de elementos del DOM

```js
const iniciarModalComentario = document.querySelector('#buttonModalComentarios');
const modalComentarios       = new bootstrap.Modal(document.getElementById('modalComentarios'));
const alerta                 = document.querySelector('#alerta');
const formulario             = document.querySelector('#formulario');
const chat                   = document.querySelector('#chat');
const numComentario          = document.querySelector('.chat__comentarios');
```

| Variable | Descripción |
|---|---|
| `iniciarModalComentario` | Botón que abre el modal |
| `modalComentarios` | Instancia del componente `bootstrap.Modal` |
| `alerta` | Elemento `<small>` para mostrar mensajes de error |
| `formulario` | Formulario con `id="formulario"` |
| `chat` | Contenedor donde se renderizan las tarjetas |
| `numComentario` | Texto que muestra el conteo de comentarios |

---

## 4. Datos: array de comentarios y pool de avatares

```js
const arrComentarios = [];

const avatares = [
  'https://randomuser.me/api/portraits/women/55.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  // ...
];
```

- `arrComentarios` es el **array principal** donde se almacena cada comentario como un objeto.
- `avatares` es un **pool de URLs** de imágenes. Se selecciona una al azar con:

```js
avatares[Math.floor(Math.random() * avatares.length)]
```

> `Math.random()` genera un número entre `0` (incluido) y `1` (excluido).  
> `Math.floor()` descarta los decimales, dando un índice entero válido.

---

## 5. Bootstrap Modal — abrir y cerrar por código

```js
// Abrir
modalComentarios.show();

// Cerrar
modalComentarios.hide();
```

Al crear `new bootstrap.Modal(elemento)` obtenemos un objeto con métodos para controlar el modal desde JavaScript, sin depender del atributo `data-bs-toggle`.

---

## 6. Validación del formulario

```js
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  if (infoTextArea.value.trim().length === 0) {
    alerta.style.color   = 'red';
    alerta.style.display = 'block';
    alerta.innerHTML     = '* Debe ingresar un comentario';
    return; // salimos sin continuar
  }

  alerta.style.display = 'none';
  modalComentarios.hide();
  // ...
});
```

- `e.preventDefault()` evita que el formulario recargue la página.
- `.trim()` elimina espacios al inicio y al final antes de validar.
- `return` detiene la ejecución de la función si la validación falla.

---

## 7. Creación del objeto comentario

```js
const objUser = {
  usuario:    infoUser.value.trim() || 'Anónimo',
  comentario: infoTextArea.value.trim(),
  fecha:      new Date(),
  avatar:     avatares[Math.floor(Math.random() * avatares.length)],
  likes:      0,
  dislikes:   0,
};

arrComentarios.push(objUser);
this.reset();
```

| Propiedad | Valor |
|---|---|
| `usuario` | Texto del input o `'Anónimo'` si está vacío (operador `\|\|`) |
| `comentario` | Texto del textarea |
| `fecha` | Instancia de `Date` en el momento del envío |
| `avatar` | URL aleatoria del pool |
| `likes` / `dislikes` | Inician en `0` |

> `this.reset()` dentro del listener del formulario limpia todos los campos del `<form>` en una sola llamada.

---

## 8. Tiempo relativo — `tiempoRelativo(fecha)`

```js
function tiempoRelativo(fecha) {
  const diff = Math.floor((new Date() - fecha) / 1000); // diferencia en segundos
  if (diff < 60)    return 'Hace un momento';
  if (diff < 3600)  return `Hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} h`;
  return `Hace ${Math.floor(diff / 86400)} días`;
}
```

- Restar dos objetos `Date` devuelve la diferencia en **milisegundos**.
- Dividir por `1000` convierte a segundos.
- Se aplican umbrales: 60 s → minutos, 3600 s → horas, 86400 s → días.

---

## 9. Template literal para generar HTML — `crearTarjetaComentario(obj)`

```js
function crearTarjetaComentario(obj) {
  return `
    <div class="chat__body-contenedorPadre">
      <div class="chat__body-avatarPadre">
        <img src="${obj.avatar}" alt="${obj.usuario}">
      </div>
      <div class="chat__body-contentCometarioPadre">
        <p>
          <span>${obj.usuario}</span>
          ${obj.comentario}
        </p>
        <div>
          <small><img src="./assets/img/like.svg"> <span>(${obj.likes})</span></small>
          <small><img src="./assets/img/no-like.svg"> <span>(${obj.dislikes})</span></small>
          <small>${tiempoRelativo(obj.fecha)}</small>
        </div>
      </div>
    </div>`;
}
```

Los **template literals** (backticks `` ` ``) permiten incrustar variables con `${}` directamente dentro de un string HTML, evitando concatenaciones con `+`.

---

## 10. Renderizado con `.map()` + `.join('')`

```js
// Mostrar TODOS los comentarios
chat.innerHTML = arrComentarios
  .map(function (comentario) {
    return crearTarjetaComentario(comentario);
  })
  .join('');
```

| Método | Descripción |
|---|---|
| `.map(fn)` | Transforma cada elemento del array (comentario → string HTML) |
| `.join('')` | Une todos los strings del array en uno solo, sin separador |

> Este patrón realiza **una sola escritura** al DOM (`innerHTML = ...`), que es más eficiente que hacer `appendChild` en un bucle porque evita múltiples _reflows_.

---

## 11. Lógica del botón "Mostrar todos"

```js
// Siempre se muestra el PRIMER comentario
chat.innerHTML = crearTarjetaComentario(arrComentarios[0]);

// Si hay más de uno, se agrega el botón
if (arrComentarios.length > 1) {
  const button = document.createElement('button');
  button.setAttribute('id', 'showComment');
  button.innerHTML = `Mostrar todos los comentarios (${arrComentarios.length})`;
  chat.after(button);   // inserta el botón DESPUÉS del contenedor #chat

  button.addEventListener('click', function (e) {
    e.preventDefault();
    chat.innerHTML = arrComentarios.map(...).join('');
    button.remove(); // se auto-elimina una vez desplegados todos
  });
}
```

- `chat.after(button)` inserta el elemento como **hermano siguiente** del `#chat`, no como hijo.
- `button.remove()` elimina el nodo del DOM directamente, sin necesidad del padre.
- Al inicio de `renderizarComentarios()` se revisa si el botón ya existe con `document.querySelector('#showComment')` para evitar duplicados.

---

## 12. Métodos y conceptos clave de la clase

| Concepto | Uso |
|---|---|
| `new bootstrap.Modal(el)` | Crea instancia del modal Bootstrap desde JS |
| `modal.show()` / `modal.hide()` | Abre / cierra el modal por código |
| `new Date()` | Captura el instante exacto como objeto de fecha |
| `Math.random()` | Número aleatorio entre 0 y 1 (excluido) |
| `Math.floor()` | Redondea hacia abajo al entero más cercano |
| `array.push(obj)` | Agrega un elemento al final del array |
| `form.reset()` | Limpia todos los campos del formulario |
| `element.after(nuevoNodo)` | Inserta un nodo como hermano siguiente |
| `element.remove()` | Elimina el nodo del DOM |
| `array.map().join('')` | Patrón para generar HTML eficiente desde un array |

---

## 13. Flujo completo de la aplicación

```
1. Usuario hace clic en "Hacer comentario"
       ↓
2. Se abre el Bootstrap Modal
       ↓
3. Usuario completa el formulario y hace submit
       ↓
4. Validación: ¿comentario vacío? → muestra alerta, no continúa
       ↓
5. Crea objeto { usuario, comentario, fecha, avatar, likes, dislikes }
       ↓
6. Agrega el objeto a arrComentarios con .push()
       ↓
7. Cierra el modal y limpia el formulario
       ↓
8. actualizarContador() → actualiza el texto "N Comentarios"
       ↓
9. renderizarComentarios() → escribe el HTML en #chat
       ↓
   Si hay más de 1 → muestra botón "Mostrar todos"
```
