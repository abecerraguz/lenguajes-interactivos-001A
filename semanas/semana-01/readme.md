# Semana 01 — Guión de Clase: Fundamentos de JavaScript

**Duración:** 45 minutos  
**Nivel:** Introductorio  
**Archivo de trabajo:** `assets/js/main.js`

---

## Estructura de la clase

| Bloque | Tema | Tiempo estimado |
|--------|------|-----------------|
| 1 | Bienvenida y contextualización | 3 min |
| 2 | Salidas básicas: `console`, `alert`, `prompt`, `confirm`, `document.write` | 7 min |
| 3 | Variables: declaración y concatenación | 7 min |
| 4 | Ámbito de variables: `var` vs `let` | 6 min |
| 5 | Tipos de datos y `typeof` | 6 min |
| 6 | Operadores relacionales, lógicos y condicionales | 7 min |
| 7 | Funciones con parámetros por defecto | 5 min |
| 8 | Ejercicio integrador: Calculadora de Edad | 4 min |

---

## BLOQUE 1 — Bienvenida y contextualización (3 min)

**Objetivo:** Que el estudiante entienda qué es JavaScript y dónde se ejecuta.

**Guión:**
> "Hoy vamos a escribir nuestras primeras líneas de JavaScript. Antes de empezar, quiero que tengan el navegador abierto con las DevTools (F12) en la pestaña **Console**. Todo lo que programemos se va a ver ahí."

**Puntos clave:**
- JavaScript se ejecuta en el navegador y también en el servidor (Node.js).
- El archivo `main.js` está vinculado al `index.html` con una etiqueta `<script>` al final del `<body>`.
- Mostrar brevemente la estructura de carpetas del proyecto.

---

## BLOQUE 2 — Salidas básicas en JavaScript (7 min)

**Código trabajado — PASO 1:**

```javascript
alert('Hola Mundo con Javascript');
alert('Bienvenidos');
confirm('¿Eres mayor de edad?');
prompt('Ingresa tu edad');

document.write('Hola Mundo desde fichero externo');

console.log('Muestra esto en la consola');
console.log(88 + 4);
```

**Guión:**
> "JavaScript tiene varias formas de comunicarse con el usuario o con nosotros como desarrolladores. Vamos a ver las más importantes."

**Explicación paso a paso:**

1. **`alert()`** → Abre un cuadro de diálogo emergente. Útil para mensajes simples, pero interrumpe la experiencia del usuario.  
   > *"Ejecuten la línea y vean la ventana que aparece en el navegador."*

2. **`confirm()`** → Muestra un cuadro con botones "Aceptar" y "Cancelar". Devuelve `true` o `false`.  
   > *"¿Qué creen que retorna si presionan Cancelar?"*

3. **`prompt()`** → Solicita un dato al usuario. Retorna el texto ingresado como `string`.  
   > *"Ojo: todo lo que el usuario escribe en un prompt llega como cadena de texto, incluso si escribe un número."*

4. **`document.write()`** → Escribe directamente en el HTML. Solo se usa en ejemplos didácticos; en producción puede sobreescribir el documento completo.

5. **`console.log()`** → La herramienta más importante para los desarrolladores. Se usa para depurar código. No lo ve el usuario final.  
   > *"Noten que `console.log(88+4)` muestra 92 — JavaScript ya hizo la operación."*

**Pregunta al curso:**
> *"¿Cuál de estos métodos usarían en una aplicación real para mostrarle información al usuario?"*

---

## BLOQUE 3 — Variables: declaración y concatenación (7 min)

**Código trabajado — PASO 2:**

```javascript
let pais       = "Chile";
let continente = "Latino America";
let antiguedad = 1810;
let pais_y_continente = pais + ' ' + continente;

pais = "España";
continente = "Europa";
console.log(pais, continente, antiguedad, 'Pais y continente-->', pais_y_continente);
alert(pais_y_continente);
```

**Guión:**
> "Las variables son contenedores con nombre donde guardamos información. En JavaScript moderno usamos `let` para declararlas."

**Explicación paso a paso:**

1. Declarar tres variables con tipos diferentes: `string`, `number` y otro `string`.
2. Concatenar dos variables con el operador `+` y un espacio `' '` entre ellas.
3. **Punto de reflexión importante:**
   > *"Cuando cambiamos el valor de `pais` a 'España', ¿qué muestra `pais_y_continente`? — Sigue mostrando 'Chile Latino America'. ¿Por qué?"*  
   > Porque `pais_y_continente` se calculó **en el momento de la asignación**. No es una fórmula viva, es un valor fijo.

4. `console.log()` acepta múltiples argumentos separados por coma — muy útil para depurar varias variables a la vez.

**Concepto a reforzar:** La diferencia entre **declarar** (`let x = valor`) y **reasignar** (`x = nuevoValor`).

---

## BLOQUE 4 — Ámbito de variables: `var` vs `let` (6 min)

**Código trabajado — PASO 3:**

```javascript
// Con var — ámbito de función (function scope)
var texto1 = "Curso de Javascript";
console.log(texto1); // "Curso de Javascript"
{
    var texto1 = "Curso de Laravel 5";
    console.log(texto1); // "Curso de Laravel 5"
}
console.log(texto1); // "Curso de Laravel 5" ← se sobreescribió!

// Con let — ámbito de bloque (block scope)
let texto2 = "Curso de Javascript";
console.log(texto2); // "Curso de Javascript"
{
    let texto2 = "Curso de Laravel 5";
    console.log(texto2); // "Curso de Laravel 5"
}
console.log(texto2); // "Curso de Javascript" ← se preservó!
```

**Guión:**
> "Aquí viene uno de los conceptos más importantes para evitar bugs: el **ámbito** (scope) de las variables."

**Explicación paso a paso:**

1. Ejecutar el bloque de `var` y mostrar el resultado en consola.  
   > *"¿Ven cómo `var` permite redeclarar la misma variable? Esto es peligroso porque podemos sobreescribir un valor sin darnos cuenta."*

2. Ejecutar el bloque de `let` y comparar el resultado.  
   > *"`let` respeta el bloque `{ }`. La variable declarada adentro es una variable diferente, no contamina el ámbito exterior."*

**Regla práctica para el curso:**
> "A partir de hoy: **nunca usen `var`**. Usen siempre `let` (o `const` para valores que no cambian)."

---

## BLOQUE 5 — Tipos de datos y `typeof` (6 min)

**Código trabajado — PASO 4:**

```javascript
let numero_entero    = 44;
let cadena_de_texto  = "Hola que tal";
let verdadero_o_falso = true;
let numero_falso     = "33";

console.log(typeof numero_entero);    // "number"
console.log(typeof cadena_de_texto);  // "string"
console.log(typeof verdadero_o_falso); // "boolean"
console.log(typeof numero_falso);     // "string" ← está entre comillas!

let numero_falso_string = "33.4";
console.log(numero_falso_string + 7); // "33.47" ← concatenación, no suma
```

**Guión:**
> "JavaScript es un lenguaje de tipado dinámico: no declaramos el tipo de dato, JavaScript lo infiere. Con `typeof` podemos consultarlo."

**Explicación paso a paso:**

1. Revisar los cuatro tipos fundamentales: `number`, `string`, `boolean` y el truco de `"33"`.  
   > *"¿Por qué `numero_falso` es `string`? — Porque lo pusimos entre comillas. El valor `33` sin comillas sería un número; con comillas, es texto."*

2. Demostrar la **coerción implícita** con `"33.4" + 7`:  
   > *"Cuando sumamos un string con un número, JavaScript convierte el número a string y los concatena. El resultado es `"33.47"`, no `40.4`. Esto es un error clásico."*

**Pregunta al curso:**
> *"¿Qué harían para convertir `"33.4"` a un número real antes de sumarlo?"*  
> Mostrar brevemente: `parseFloat("33.4") + 7 = 40.4` y `Number("33.4") + 7 = 40.4`.

---

## BLOQUE 6 — Operadores relacionales, lógicos y condicionales (7 min)

**Código trabajado — PASO 5:**

```javascript
let year = 2025;

if (year >= 2000 && year <= 2025) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era Post moderna");
}

if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año termina en 8");
} else {
    console.log("Año no registrado");
}
```

**Guión:**
> "Los operadores nos permiten comparar valores y tomar decisiones. Combinados con `if/else`, podemos controlar el flujo del programa."

**Explicación paso a paso:**

1. Repasar los operadores de comparación como referencia rápida (`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`).

2. Explicar `&&` (AND) y `||` (OR):  
   > *"Con `&&`, las DOS condiciones deben ser verdaderas para que el bloque se ejecute. Con `||`, basta con que UNA sea verdadera."*

3. Analizar la primera condición: `year >= 2000 && year <= 2025`.  
   > *"Le estamos preguntando: ¿`year` está entre 2000 y 2025 inclusive? Si es así, ejecuta el primer bloque."*

4. Analizar la segunda condición y notar los paréntesis:  
   > *"Los paréntesis cambian la precedencia, igual que en matemáticas. Esta condición segunda nunca se cumple con 2025 — ¿pueden ver por qué? `year == 2028` es falso."*

5. **Diferencia importante:** `==` vs `===`:  
   > *"`==` compara solo el valor (con coerción de tipos). `===` compara valor Y tipo. Siempre prefieran `===`."*  
   > Ejemplo: `"5" == 5` → `true`; `"5" === 5` → `false`.

---

## BLOQUE 7 — Funciones con parámetros por defecto (5 min)

**Código trabajado — PASO 6:**

```javascript
function areaDeUnTriangulo(base = 100, altura = 200) {
    let area = (base * altura) / 2;
    return area;
}

console.log(areaDeUnTriangulo(400, 100)); // 20000
console.log(areaDeUnTriangulo());          // 10000 ← usa valores por defecto
```

**Guión:**
> "Las funciones son bloques de código reutilizables. Reciben datos de entrada (parámetros), procesan algo y retornan un resultado."

**Explicación paso a paso:**

1. Anatomía de una función: `function nombre(parámetros) { cuerpo; return resultado; }`.

2. Los **parámetros por defecto** (`base = 100`) son una característica de ES6: si no se pasa un valor al llamar la función, se usa el valor por defecto.  
   > *"Llamen a `areaDeUnTriangulo()` sin argumentos — ¿qué resultado esperan?"*

3. `return` es fundamental: sin él, la función devuelve `undefined`.  
   > *"Una función que no retorna nada es como una calculadora que hace la operación pero no muestra el resultado."*

4. Mostrar que el resultado de la función puede usarse directamente dentro de `console.log()`.

---

## BLOQUE 8 — Ejercicio integrador: Calculadora de Edad (4 min)

**Guión:**
> "Ahora vamos a ver un ejercicio que integra todo lo que vimos. Lo revisamos juntos."

**Recorrido del ejercicio:**

```javascript
let anioActual    = 2025;
let anioNacimiento = 2005;
let edad           = anioActual - anioNacimiento; // aritmética
let miEdad         = edad;                         // asignación

let esMenor     = miEdad < 18;
let esMayor     = miEdad >= 18;
let esAdultoJoven = esMayor && miEdad <= 25;       // lógico

function determinarCategoria(edad) {
    if (edad < 18)              return "Eres menor de edad";
    else if (edad <= 25)        return "Eres un adulto joven";
    else                        return "Eres un adulto";
}

console.log("Categoría:", determinarCategoria(miEdad));
```

**Puntos a destacar:**

1. El cálculo de la edad es pura aritmética con variables.
2. Las variables booleanas (`esMenor`, `esMayor`) guardan el resultado de una comparación — es un patrón muy común.
3. La función `determinarCategoria` aplica todo lo aprendido: parámetros, condicionales anidados y `return`.

**Propuesta de mejora para mostrar al curso:**
> *"¿Cómo podrían hacer esto más dinámico? — Usando `new Date().getFullYear()` para obtener el año actual automáticamente en lugar de hardcodear 2025."*

```javascript
let anioActual = new Date().getFullYear();
```

---

## Cierre de la clase (1 min)

**Resumen de conceptos vistos:**
- `console.log`, `alert`, `prompt`, `confirm`, `document.write`
- `let` vs `var` y el ámbito de bloque
- Tipos de datos primitivos y `typeof`
- Coerción implícita de tipos
- Operadores relacionales (`>`, `<`, `==`, `===`) y lógicos (`&&`, `||`)
- Condicionales `if / else if / else`
- Funciones con parámetros por defecto y `return`

**Tarea sugerida:**
> Modificar el ejercicio de la Calculadora de Edad para que use `prompt()` y capture el año de nacimiento directamente del usuario. Recordar convertir el valor con `Number()` o `parseInt()` antes de operar.

---

> **Nota para el docente:** Los errores de sintaxis presentes en el archivo (`console,log` en lugar de `console.log`) son intencionales para que los estudiantes los identifiquen y corrijan como ejercicio de depuración.
