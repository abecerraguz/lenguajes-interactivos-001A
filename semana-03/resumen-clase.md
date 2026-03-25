# Clase 03 - Semana 3

## Interactuando con JavaScript y los navegadores

Este material fue corregido para quedar **alineado al PDF de la Semana 3**, centrando la clase en **BOM (Browser Object Model)** y dejando **DOM** para la **Semana 4**.

## Enfoque de esta clase

En el documento de la semana se trabaja principalmente con objetos y métodos del **BOM**, especialmente:

- `window`
- `print()`
- `open()` y `close()`
- `location`
- `history`
- `setTimeout()` y `setInterval()`
- `screen`
- `navigator`
- `geolocation`

## Importante

Aunque en el resultado de aprendizaje y en los indicadores se menciona BOM y DOM, el desarrollo real del contenido de la Semana 3 está enfocado principalmente en **BOM**. Por eso, este archivo `index.js` fue dejado con ese alcance.

El ejemplo del reloj que aparece en el PDF utiliza una actualización sobre HTML, pero en esta versión no se desarrolla como contenido central para no adelantar formalmente el tema de DOM.

---

# Temas abordados paso a paso

## 1. `window` y mensajes

Se incluyen ejemplos de:

- `alert()`
- `confirm()`
- `prompt()`

### Qué se explica

- Cómo mostrar mensajes al usuario.
- Cómo capturar una respuesta booleana con `confirm()`.
- Cómo pedir texto con `prompt()`.
- Cómo validar si el usuario canceló o dejó el campo vacío.

---

## 2. `window.print()`

Se incluye una función para abrir la ventana de impresión del navegador.

### Qué se explica

- Que `window.print()` permite imprimir el contenido visible.
- Que normalmente se acompaña con estilos CSS para impresión.
- Que este punto conecta con la actividad del PDF sobre una página tipo currículum imprimible.

---

## 3. `window.open()` y `window.close()`

Se incluyen funciones para:

- abrir una nueva ventana
- cerrarla
- revisar si sigue abierta o ya fue cerrada

### Qué se explica

- Qué parámetros recibe `open()`.
- Qué significa URL, nombre y atributos.
- Que `close()` funciona sobre ventanas abiertas desde JavaScript.

---

## 4. `location`

Se incluye una función que muestra en consola:

- `href`
- `protocol`
- `host`
- `pathname`
- `search`
- `hash`

### Qué se explica

- Cómo obtener información de la URL actual.
- Cómo recargar la página.
- Cómo redirigir con `assign()`.
- Cómo reemplazar la URL actual con `replace()`.

---

## 5. `history`

Se incluyen ejemplos de:

- `back()`
- `forward()`
- `go()`
- `pushState()`
- `replaceState()`

### Qué se explica

- Cómo moverse dentro del historial del navegador.
- Cómo agregar o reemplazar estados sin recargar la página.
- Qué precauciones tomar al probar estos métodos.

---

## 6. Manejo del tiempo

Se incluyen ejemplos de:

- `setTimeout()`
- `clearTimeout()`
- `setInterval()`
- `clearInterval()`

### Qué se explica

- Cómo programar acciones futuras.
- Cómo cancelar una ejecución programada.
- Cómo repetir una acción cada cierto tiempo.
- Cómo detener una repetición.

---

## 7. `screen`

Se incluye una función que imprime en consola:

- alto de pantalla
- ancho de pantalla
- profundidad de color
- alto y ancho disponibles

### Qué se explica

- Que `screen` entrega información sobre la pantalla.
- Que permite consultar datos, pero no modificar la pantalla del usuario.

---

## 8. `navigator`

Se incluyen ejemplos para revisar:

- `cookieEnabled`
- `appName`
- `appVersion`
- `language`
- `platform`
- `userAgent`

### Qué se explica

- Cómo conocer características del navegador.
- Cómo revisar si las cookies están habilitadas.
- Cómo obtener el idioma preferido del usuario.

---

## 9. `geolocation`

Se incluye un ejemplo con:

- `navigator.geolocation.getCurrentPosition()`

### Qué se explica

- Que el navegador pide permiso al usuario.
- Que se puede obtener latitud y longitud.
- Que puede fallar si el usuario bloquea el acceso.

---

# Cómo probar el archivo

## Opción simple

Crea un archivo `index.html` mínimo como este:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clase 03 - BOM</title>
</head>
<body>
  <h1>Clase 03 - BOM</h1>
  <p>Abre la consola del navegador para ejecutar los ejemplos.</p>

  <script src="index.js"></script>
</body>
</html>
```

Luego:

1. Abre el archivo en el navegador.
2. Abre la consola del navegador.
3. Ejecuta las funciones manualmente.

## Ejemplos para probar en consola

```js
example = "Recuerda usar los nombres reales de las funciones";
```

Funciones disponibles:

```js
example = [
  "ejemploAlerta()",
  "ejemploConfirm()",
  "ejemploPrompt()",
  "imprimirPagina()",
  "abrirVentanaDemo()",
  "cerrarVentanaDemo()",
  "estadoVentanaDemo()",
  "datosLocation()",
  "irAtras()",
  "irAdelante()",
  "moverHistorial(-1)",
  "agregarEstadoHistorial()",
  "reemplazarEstadoHistorial()",
  "demoSetTimeoutCancelado()",
  "demoSetTimeoutEjecutado()",
  "demoSetInterval()",
  "detenerIntervalo()",
  "demoSetIntervalConDetencionAutomatica()",
  "datosScreen()",
  "datosNavigator()",
  "verificarCookies()",
  "mostrarIdioma()",
  "obtenerGeolocalizacion()"
];
```

---

# Sugerencia didáctica para la clase

## Inicio

Explicar que JavaScript no solo trabaja con variables, funciones y condicionales, sino también con objetos del navegador.

## Desarrollo

Ir mostrando cada bloque en este orden:

1. mensajes con `alert`, `confirm`, `prompt`
2. impresión con `print()`
3. ventanas con `open()` y `close()`
4. URL actual con `location`
5. navegación con `history`
6. tiempo con `setTimeout` y `setInterval`
7. información del equipo con `screen`
8. información del navegador con `navigator`
9. ubicación con `geolocation`

## Cierre

Reforzar que esta semana el foco está en **interactuar con el navegador** y que la siguiente semana puede profundizarse la **modificación de elementos de la página web**, es decir, el trabajo más directo con **DOM**.

---

# Archivo principal

- `index.js`: contiene todos los ejemplos explicados paso a paso con comentarios.

