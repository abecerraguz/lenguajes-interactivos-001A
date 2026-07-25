# Semana 1 – Ejercicios Prácticos: Elementos básicos de JavaScript

> Trabaja en `assets/js/main.js`. Abre la consola del navegador (`F12`) para verificar cada resultado.

---

## Ejercicio 1 — ¿Qué imprime la consola?

Lee el código, **escribe tu predicción** en el espacio en blanco y luego ejecútalo para verificar.

```js
let pais = "Chile";
let anio = 1810;
let presentacion = "País: " + pais + ", Año: " + anio;

pais = "Argentina";

console.log(pais);           // Predicción: ___________
console.log(anio);           // Predicción: ___________
console.log(presentacion);   // Predicción: ___________
```

> ¿`presentacion` cambió cuando reasignaste `pais`? ¿Por qué sí o por qué no?

---

## Ejercicio 2 — `var` o `let`: predice el resultado

```js
var color = "rojo";
{
    var color = "azul";
}
console.log(color); // Predicción: ___________

let animal = "gato";
{
    let animal = "perro";
}
console.log(animal); // Predicción: ___________
```

> ¿Por qué los resultados son distintos? Escribe tu explicación como comentario en el código.

---

## Ejercicio 3 — Tipos que engañan

**Antes de ejecutar**, escribe qué tipo retornará `typeof` y qué valor producirá la operación:

```js
let a = "5";
let b = 3;

console.log(typeof a);      // Tipo: ___________
console.log(typeof b);      // Tipo: ___________
console.log(a + b);         // Valor: ___________ ← ¿suma o concatena?
console.log(a - b);         // Valor: ___________
console.log(Number(a) + b); // Valor: ___________
```

---

## Ejercicio 4 — Encuentra y corrige el error

Cada bloque tiene **un error**. Identifícalo, descríbelo con un comentario y corrígelo.

**Bloque A**
```js
const PI = 3.1416;
PI = 3.14;
console.log(PI);
```

**Bloque B**
```js
let nombre = "Sofía"
let edad = 22
console,log("Nombre:", nombre, "Edad:", edad);
```

**Bloque C**
```js
let x = "10";
let y = "20";
let suma = x + y;
console.log("La suma es:", suma); // Se espera 30, no "1020"
```

---

## Ejercicio 5 — Operadores: verdadero o falso

Completa la tabla **sin ejecutar el código**, luego verifica:

| Expresión | Resultado esperado | Resultado real |
|-----------|-------------------|----------------|
| `10 > 5` | | |
| `"5" == 5` | | |
| `"5" === 5` | | |
| `true && false` | | |
| `true \|\| false` | | |
| `!true` | | |
| `10 >= 10 && 5 < 3` | | |

---

## Ejercicio 6 — Completa el condicional

El código debe mostrar el mensaje correcto según la temperatura. Rellena los espacios:

```js
let temperatura = 28; // Cambia este valor para probar todos los casos

if (temperatura _____ 35) {
    console.log("Hace mucho calor");
} else if (temperatura _____ 20 _____ temperatura _____ 34) {
    console.log("Temperatura agradable");
} else {
    console.log("Hace frío");
}
```

Pruébalo con los valores: `38`, `25`, `10`, `35`, `20`.

---

## Ejercicio 7 — Completa la función

Rellena los espacios para que la función calcule el área de un rectángulo y retorne el resultado:

```js
function areaRectangulo(_____, _____) {
    let area = _____;
    return _____;
}

console.log(areaRectangulo(5, 3));   // → 15
console.log(areaRectangulo(10, 4));  // → 40
console.log(areaRectangulo(7, 7));   // → 49
```

---

## Ejercicio 8 — Escribe la función desde cero

Escribe una función `esMayorDeEdad(edad)` que:
- Reciba un número como parámetro.
- Retorne `true` si la edad es 18 o más.
- Retorne `false` si es menor.

```js
// Escribe tu función aquí

console.log(esMayorDeEdad(20));  // → true
console.log(esMayorDeEdad(17));  // → false
console.log(esMayorDeEdad(18));  // → true
```

---

## Desafío final — Todo junto

Escribe un programa que haga lo siguiente **usando solo lo visto en la semana**:

1. Declara variables `nombre` (string) y `anioNacimiento` (número) con tus datos.
2. Calcula la `edad` usando el año actual (`2026`).
3. Crea una función `categoria(edad)` que retorne:
   - `"Junior"` → menor de 18
   - `"Senior"` → entre 18 y 60
   - `"Golden"` → mayor de 60
4. Muestra en consola:

```
"Hola [nombre], tienes [edad] años. Categoría: [resultado]"
```

**Ejemplo de salida esperada:**
```
"Hola Sofía, tienes 22 años. Categoría: Senior"
```

---

> Cuando termines, revisa el [resumen-clase.md](resumen-clase.md) para confirmar los conceptos que usaste.
