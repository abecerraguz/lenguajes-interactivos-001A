# Clase 02 - Semana 2

## Profundizando en el control de JavaScript en el front-end

Este material fue preparado para trabajar en un contexto de **JavaScript en el navegador**, Por eso, los ejemplos del archivo `index.js` están pensados para ser revisados en la **consola del navegador** o vinculados desde un archivo HTML de apoyo.

## Objetivo de la clase

Durante esta clase se profundiza en el uso de estructuras fundamentales de JavaScript que se ocupan constantemente en el front-end:

- arreglos;
- objetos;
- bucles;
- recorrido de datos;
- manipulación y organización de información en consola.

La idea es que el estudiante comprenda cómo almacenar datos, recorrerlos, modificarlos y reutilizar lógica antes de pasar a ejercicios con DOM.

## Temas abordados en `index.js`

### 1. Arreglos (arrays)
Se explica:

- qué es un arreglo;
- cómo crearlo;
- cómo acceder a sus elementos por índice;
- cómo modificar valores;
- cómo obtener su longitud con `length`.

### 2. Métodos comunes de arreglos
Se incluyen ejemplos paso a paso con métodos como:

- `push()`
- `unshift()`
- `pop()`
- `shift()`
- `indexOf()`
- `splice()`
- `concat()`
- `sort()`
- `reverse()`
- `split()`
- `join()`

### 3. Arreglos bidimensionales
Se trabaja el concepto de arreglos dentro de arreglos para representar estructuras tipo tabla, cuadrícula o matriz.

### 4. Objetos
Se revisa:

- creación de objetos;
- propiedades `clave: valor`;
- acceso con notación de punto;
- acceso con corchetes;
- modificación y agregado de nuevas propiedades.

### 5. Bucles
Se desarrollan ejemplos con:

- `for`
- `while`
- `do...while`

### 6. Recorrido de arreglos
Se muestra cómo recorrer arreglos usando índices y bucles para leer cada elemento paso a paso.

### 7. Recorrido de objetos con `for...in`
Se explica cómo iterar propiedades de un objeto mostrando tanto la clave como el valor.

### 8. Ejemplo integrador
Al final se incluye un ejercicio de cierre para reforzar la reutilización de funciones y la aplicación de condicionales, arreglos y recorridos.

## ¿Cómo usar este material en front-end?

### Opción 1: usar la consola del navegador
1. Abre cualquier página en el navegador.
2. Presiona `F12` o clic derecho → **Inspeccionar**.
3. Ve a la pestaña **Console**.
4. Copia y pega fragmentos de `index.js` para ir revisando los ejemplos.

### Opción 2: vincular `mainx.js` desde un HTML
Puedes crear un archivo `index.html` simple como este:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clase 02</title>
</head>
<body>
  <h1>Clase 02 - JavaScript</h1>
  <script src="./assets/js/main.js"></script>
</body>
</html>
```

Luego:

1. abre ese archivo en el navegador;
2. abre la consola del navegador;
3. revisa la salida de los `console.log()` paso a paso.

## Recomendación didáctica

Una buena forma de trabajar esta clase es:

1. explicar primero qué problema resuelve cada estructura;
2. ejecutar el bloque correspondiente;
3. observar la salida en consola;
4. modificar valores con los estudiantes;
5. comparar cómo cambia el resultado;
6. cerrar con el ejemplo integrador.

## Aprendizajes esperados

Al finalizar esta clase, el estudiante debería poder:

- crear y modificar arreglos;
- aplicar métodos comunes de arrays;
- construir y recorrer objetos;
- utilizar bucles para automatizar tareas repetitivas;
- comprender mejor cómo organizar datos en JavaScript antes de trabajar con el DOM.

## Archivos incluidos

- `assets/js/main.js`: clase completa con ejemplos explicados paso a paso y comentarios.
- `README.md`: resumen de contenidos y forma de uso en front-end.


