# Resumen de Clase — Semana 01: Fundamentos de JavaScript

**Duración:** 45 minutos  
**Archivo de trabajo:** `assets/js/main.js`

---

## 1. Salidas básicas en JavaScript

JavaScript ofrece distintas formas de mostrar información o interactuar con el usuario:

| Método | Descripción |
|--------|-------------|
| `alert('mensaje')` | Muestra una ventana emergente con un mensaje |
| `confirm('pregunta')` | Muestra una ventana con Aceptar/Cancelar. Retorna `true` o `false` |
| `prompt('pregunta')` | Solicita un dato al usuario. Siempre retorna un `string` |
| `document.write('texto')` | Escribe directamente en el HTML (solo uso didáctico) |
| `console.log('mensaje')` | Muestra información en la consola del navegador (para depuración) |

```javascript
alert('Hola Mundo con Javascript');
confirm('¿Eres mayor de edad?');
prompt('Ingresa tu edad');
document.write('Hola Mundo desde fichero externo');
console.log('Muestra esto en la consola');
console.log(88 + 4); // → 92
```

---

## 2. Variables

Las variables son contenedores con nombre para almacenar datos. En JavaScript moderno se declaran con `let`.

```javascript
let pais       = "Chile";
let continente = "Latino America";
let antiguedad = 1810;

// Concatenación de strings con el operador +
let pais_y_continente = pais + ' ' + continente; // "Chile Latino America"

// Reasignación de variables
pais = "España";
continente = "Europa";

// pais_y_continente sigue siendo "Chile Latino America"
// porque se calculó en el momento de la asignación
console.log(pais, continente, antiguedad, pais_y_continente);
```

> **Clave:** Al reasignar `pais`, las variables que ya usaron su valor anterior **no se actualizan** automáticamente.

---

## 3. Ámbito de variables: `var` vs `let`

El **ámbito** (scope) define en qué parte del código una variable es accesible.

### `var` — Ámbito de función (function scope) ⚠️

```javascript
var texto1 = "Curso de Javascript";
{
    var texto1 = "Curso de Laravel 5"; // sobreescribe la variable exterior
}
console.log(texto1); // → "Curso de Laravel 5"  ← ¡peligroso!
```

### `let` — Ámbito de bloque (block scope) ✅

```javascript
let texto2 = "Curso de Javascript";
{
    let texto2 = "Curso de Laravel 5"; // variable independiente dentro del bloque
}
console.log(texto2); // → "Curso de Javascript"  ← se preservó
```

> **Regla:** Usar siempre `let` (o `const`). Nunca usar `var`.

---

## 4. Tipos de datos y `typeof`

JavaScript tiene tipado dinámico: el tipo se infiere del valor asignado.

| Tipo | Ejemplo | `typeof` retorna |
|------|---------|-----------------|
| Número entero | `44` | `"number"` |
| Número decimal | `33.4` | `"number"` |
| Cadena de texto | `"Hola"` | `"string"` |
| Booleano | `true` / `false` | `"boolean"` |

```javascript
let numero_entero    = 44;
let cadena_de_texto  = "Hola que tal";
let booleano         = true;
let numero_falso     = "33"; // ← es string, no número

console.log(typeof numero_entero);   // "number"
console.log(typeof cadena_de_texto); // "string"
console.log(typeof booleano);        // "boolean"
console.log(typeof numero_falso);    // "string"
```

### Coerción implícita de tipos ⚠️

```javascript
let valor = "33.4";
console.log(valor + 7); // → "33.47"  ← concatena, no suma

// Solución: convertir primero
console.log(parseFloat(valor) + 7); // → 40.4  ✅
console.log(Number(valor) + 7);     // → 40.4  ✅
```

---

## 5. Operadores

### Operadores relacionales (de comparación)

| Operador | Significado |
|----------|-------------|
| `>`  | Mayor que |
| `<`  | Menor que |
| `>=` | Mayor o igual que |
| `<=` | Menor o igual que |
| `==` | Igual (con coerción de tipo) |
| `===`| Igual estricto (valor Y tipo) |
| `!=` | Distinto |

### Operadores lógicos

| Operador | Significado | Se cumple cuando... |
|----------|-------------|---------------------|
| `&&` | AND (Y) | Ambas condiciones son verdaderas |
| `\|\|` | OR (O) | Al menos una condición es verdadera |
| `!`  | NOT (Negación) | Invierte el valor booleano |

### Condicional `if / else if / else`

```javascript
let year = 2025;

if (year >= 2000 && year <= 2025) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era Post moderna");
}
```

> **Importante:** Preferir siempre `===` sobre `==` para evitar comparaciones inesperadas por coerción de tipo.  
> Ejemplo: `"5" == 5` → `true` | `"5" === 5` → `false`

---

## 6. Funciones

Una función es un bloque de código reutilizable que recibe parámetros, ejecuta una lógica y puede retornar un valor.

```javascript
function areaDeUnTriangulo(base = 100, altura = 200) {
    let area = (base * altura) / 2;
    return area;
}

console.log(areaDeUnTriangulo(400, 100)); // → 20000
console.log(areaDeUnTriangulo());          // → 10000  (usa valores por defecto)
```

**Conceptos clave:**
- **Parámetros por defecto** (`base = 100`): se usan si no se pasa un argumento al llamar la función.
- **`return`**: envía el resultado hacia afuera de la función. Sin él, la función devuelve `undefined`.

---

## 7. Ejercicio integrador: Calculadora de Edad

Integra todos los conceptos de la clase: variables, aritmética, comparaciones, operadores lógicos y funciones.

```javascript
let anioActual     = new Date().getFullYear(); // Año actual dinámico
let anioNacimiento = 2005;
let edad           = anioActual - anioNacimiento;

let esMenor      = edad < 18;
let esMayor      = edad >= 18;
let esAdultoJoven = esMayor && edad <= 25;

function determinarCategoria(edad) {
    if (edad < 18)       return "Eres menor de edad";
    else if (edad <= 25) return "Eres un adulto joven";
    else                 return "Eres un adulto";
}

console.log("Edad:", edad);
console.log("¿Es menor?", esMenor);
console.log("¿Es mayor?", esMayor);
console.log("¿Es adulto joven?", esAdultoJoven);
console.log("Categoría:", determinarCategoria(edad));
```

---

## Resumen de conceptos

```
Salidas básicas    → alert, confirm, prompt, document.write, console.log
Variables          → let (block scope), var (function scope — evitar), const
Tipos de datos     → number, string, boolean
typeof             → identifica el tipo de un valor
Coerción de tipos  → "texto" + número = concatenación ⚠️
Conversión         → Number(), parseInt(), parseFloat()
Comparación        → >, <, >=, <=, == (con coerción), === (estricto), !=
Lógicos            → && (AND), || (OR), ! (NOT)
Condicional        → if / else if / else
Funciones          → parámetros, valores por defecto, return
```

---

## Tarea

Modificar el ejercicio de la Calculadora de Edad para que el año de nacimiento se capture dinámicamente con `prompt()`. Recordar convertir el valor con `Number()` antes de operar:

```javascript
let anioNacimiento = Number(prompt("Ingresa tu año de nacimiento:"));
```
