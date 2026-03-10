# Mini‑Kiosco — Semana 2 (Arreglos, Objetos y Bucles)

> **Duración sugerida:** 45 minutos  
> **Modo de ejecución:** Consola del navegador (prompt/alert opcional)

Este ejercicio consolida los contenidos de la **Semana 2** de Lenguajes Interactivos:
- **Arreglos** (arrays) y **objetos** (clave/valor)
- **Bucles:** `for`, `for…in`, `while`, `do…while`
- **Métodos y control de flujo** con `switch`
- Interacción básica por `prompt` y salida en `console.log`

---

## 🎯 Objetivo
Construir un **Mini‑Kiosco** que:
1. Mantiene un **inventario** (array de objetos).
2. **Lista** productos recorriendo arrays y objetos.
3. **Vende** productos descontando stock con un `while`.
4. Presenta un **menú** que se repite con `do…while` y `switch`.

---

## 🧩 Contenidos que se practican
- **Arrays de objetos**: `[{ nombre, precio, stock, categoria }, ...]`
- **Bucles**:
  - `for`: recorrer un array.
  - `for…in`: recorrer propiedades de un objeto.
  - `while`: repetir mientras haya stock y unidades por vender.
  - `do…while`: menú interactivo que se repite hasta “Salir”.
- **Funciones**: descomponer tareas (`listarProductos`, `venderProducto`, `buscarIndicePorNombre`, `menu`).

---

## ✅ Requisitos previos
- Navegador web (Chrome/Firefox/Edge).
- Conocer cómo **abrir la consola** del navegador (F12 → “Console”).

---

## 🗂️ Estructura de archivos
Crea una carpeta (por ejemplo, `mini-kiosco/`) con los siguientes archivos:

```
mini-kiosco/
├─ index.html
└─ script.js
```

---

## 🏗️ Paso a paso (45′)

### Paso 0 — Estructura mínima (0–5′)

**index.html**
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Mini-Kiosco – Semana 2</title>
</head>
<body>
  <h1>Mini-Kiosco (abre la consola del navegador)</h1>
  <script src="./script.js"></script>
</body>
</html>
```

Crea también el archivo **`script.js`** (vacío por ahora).

---

### Paso 1 — Estilos + Inventario + Listar (5–15′)

Pega esto en **`script.js`**:

```javascript
// ===== Estilos (como en tu Sumativa 1)
const estilo1 = `
  background:linear-gradient(#4682B4, #F08080);
  color:#fff; padding:10px 10px; font-weight:bold; border-radius:10px;
`;
const estilo2 = `
  background:#4682B4; color:#fff; border-radius:10px; padding:5px 10px; font-weight:bold;
`;
const estilo3 = `
  background:#F08080; color:#2F4F4F; border-radius:10px; padding:5px 10px; font-weight:bold;
`;
const estilo4 = `font-weight:bold;`;

console.log("%c Semana 2 - Mini-Kiosco (Arreglos, Objetos y Bucles)", estilo1);

// ===== Inventario (array de objetos)
let inventario = [
  { nombre: "Agua 500ml", precio: 900,  stock: 15, categoria: "Bebestibles" },
  { nombre: "Galletas",   precio: 1200, stock: 10, categoria: "Snacks" },
  { nombre: "Chocolate",  precio: 1500, stock: 8,  categoria: "Snacks" },
];

// ===== Listar productos (for + for...in)
function listarProductos() {
  console.log("%c Inventario actual:", estilo2);
  for (let i = 0; i < inventario.length; i++) {
    const item = inventario[i];
    let linea = "";
    for (let clave in item) {           // recorre propiedades del objeto
      linea += `${clave}: ${item[clave]} | `;
    }
    console.log(`%c#${i} → ${linea}`, estilo4);
  }
}

listarProductos(); // prueba inicial
```

**Qué estás practicando aquí:**
- **Array de objetos** para modelar datos reales.
- `for` para recorrer el array y `for…in` para recorrer las **propiedades** de cada objeto.

---

### Paso 2 — Buscar índice + Vender (while) (15–30′)

Agrega **debajo** de lo anterior en `script.js`:

```javascript
// ===== Buscar índice por nombre (for)
function buscarIndicePorNombre(nombre) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

// ===== Vender producto (while)
function venderProducto() {
  const nombre = prompt("¿Qué producto deseas vender?");
  if (!nombre) return;

  const idx = buscarIndicePorNombre(nombre);
  if (idx === -1) {
    console.log("%c No existe ese producto en inventario.", estilo3);
    return;
  }

  let cantidad = parseInt(prompt("¿Cuántas unidades deseas vender?"));
  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("%c Cantidad inválida.", estilo3);
    return;
  }

  let vendido = 0;
  // mientras haya por vender y stock disponible
  while (cantidad > 0 && inventario[idx].stock > 0) {
    inventario[idx].stock--;
    cantidad--;
    vendido++;
  }

  const total = vendido * inventario[idx].precio;
  console.log(
    `%c Vendidas ${vendido} unidad(es) de ${inventario[idx].nombre}. ` +
    `Total: $${total}. Stock restante: ${inventario[idx].stock}`,
    estilo2
  );

  if (cantidad > 0) {
    console.log("%c Venta parcial: faltó stock para completar la solicitud.", estilo3);
  }
}
```

**Qué estás practicando aquí:**
- **Búsqueda** en un array con `for`.
- **Condiciones** y **conversión numérica**.
- Uso de **`while`** para procesar venta mientras haya stock y unidades pendientes.

---

### Paso 3 — Menú (do…while + switch) (30–40′)

Agrega **al final** de `script.js`:

```javascript
// ===== Menú principal (do...while)
function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Mini-Kiosco\n" +
      "1) Listar productos\n" +
      "2) Vender producto\n" +
      "0) Salir"
    );

    switch (opcion) {
      case "1":
        listarProductos();
        break;
      case "2":
        venderProducto();
        break;
      case "0":
        console.log("%c ¡Hasta luego!", estilo1);
        break;
      default:
        console.log("%c Opción inválida.", estilo3);
    }
  } while (opcion !== "0");
}

// Arranque sugerido
menu();
```

**Qué estás practicando aquí:**
- **Estructura de control** `do…while` para repetir hasta “Salir”.
- **`switch`** para manejar opciones del usuario.

---

### Paso 4 — Pruebas rápidas (40–45′)

En la **consola** del navegador:
- Ver el inventario: `listarProductos()`  
- Vender con menú: recarga la página (el menú se ejecuta solo) o escribe `menu()`  

---

## 🧪 Casos de prueba sugeridos
1. **Venta normal:** “Agua 500ml”, cantidad 3 → stock baja en 3, total $2700.
2. **Venta parcial:** “Chocolate”, cantidad 20 → vende solo hasta agotar stock.
3. **Errores manejados:** nombre inexistente, cantidad vacía o 0/negativa.

---

## 🧠 Checklist de aprendizaje
- [ ] Definí un **array de objetos** para el inventario.  
- [ ] Usé **`for`** para recorrer el array.  
- [ ] Usé **`for…in`** para recorrer propiedades del objeto.  
- [ ] Implementé una **búsqueda** por nombre.  
- [ ] Apliqué **`while`** para descontar stock en una venta.  
- [ ] Creé un **menú** con `do…while` y `switch`.

---

## ⭐ Extensiones opcionales (si sobra tiempo)
- **Ordenar por precio (ASC):**
  ```javascript
  function ordenarPorPrecioAsc() {
    inventario.sort((a, b) => a.precio - b.precio);
    console.log("%c Inventario ordenado por precio (ASC).", estilo2);
  }
  // Prueba: ordenarPorPrecioAsc(); listarProductos();
  ```
- **Stock crítico:** en `listarProductos()`, marcar con `*` si `stock < 3`.
- **Agregar productos desde prompt:** usar `split(':')` y `push()`.
- **Reporte semanal (matriz 7xN):** simular ventas diarias y sumar con `for` anidados.

---

## 📏 Criterios de evaluación sugeridos
- **IL1:** Uso correcto de variables, arrays, objetos, `if/else` y bucles.  
- **IL2:** Funciones que encapsulan tareas y favorecen la **reutilización**.

---

## 🆘 Troubleshooting
- **No veo nada en pantalla:** Abre la **consola** del navegador (F12) → pestaña **Console**.
- **`prompt` bloqueado:** Algunos navegadores pueden bloquear popups; habilítalos para el sitio local.
- **Caracteres raros (tildes/ñ):** Asegúrate de tener `<meta charset="utf-8" />` en el `<head>`.
- **Variables no definidas:** Revisa que pegaste **todo** el código en `script.js` y sin errores de llaves `{}`.

---

¡Listo! Con este README y los archivos incluidos, tus estudiantes pueden completar el ejercicio en ~45 minutos practicando los pilares de la Semana 2.
