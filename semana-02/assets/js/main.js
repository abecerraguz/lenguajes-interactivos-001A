/**
 * ============================================================
 * CLASE 02 - SEMANA 2
 * Lenguajes Interactivos
 * Tema: Profundizando en el control de JavaScript
 *
 * Contenidos trabajados en esta clase:
 * 1. Arreglos (arrays)
 * 2. Métodos comunes de arreglos
 * 3. Arreglos bidimensionales
 * 4. Objetos
 * 5. Bucles: for, while y do...while
 * 6. Recorrido de arrays con bucles
 * 7. Recorrido de objetos con for...in
 * 8. Ejemplo integrador usando una función reutilizable
 *
 * Este archivo está pensado para:
 * - Ejecutarse con Node.js
 * - Ser leído paso a paso por estudiantes
 * - Servir como apoyo a una clase explicada en vivo
 *
 * Sugerencia de ejecución:
 * node index.js
 * ============================================================
 */

// ============================================================
// FUNCIONES DE APOYO PARA HACER LA SALIDA MÁS ORDENADA
// ============================================================

/**
 * Muestra un título grande en consola para separar cada bloque de contenido.
 * Esto no es obligatorio en JavaScript, pero ayuda mucho en una clase.
 */
function mostrarTitulo(titulo) {
  console.log("\n%c============================================================",   "color: aquamarine;font-weight: bold;");
    console.log(`%c${titulo}`, "color: aquamarine; font-weight: normal;");
  console.log("%c============================================================", "color: aquamarine;font-weight: bold;" );
}

/**
 * Muestra un subtítulo para ordenar las ideas dentro de cada bloque.
 */
function mostrarSubtitulo(subtitulo) {
    console.log("\n%c============================================================",   "color: yellowgreen;font-weight: bold;");
    console.log(`%c${subtitulo}`, "color: yellowgreen; font-weight: normal;");
  console.log("%c============================================================", "color: yellowgreen;font-weight: bold;" );
}

// ============================================================
// 0. INTRODUCCIÓN
// ============================================================

mostrarTitulo("CLASE 02 - PROFUNDIZANDO EN EL CONTROL DE JAVASCRIPT");

console.log(
  "En esta clase revisaremos arreglos, objetos y bucles, que son estructuras fundamentales para manipular datos y automatizar tareas repetitivas."
);
console.log(
  "La idea es avanzar desde ejemplos simples hasta un caso integrador final."
);

// ============================================================
// 1. ARREGLOS (ARRAYS)
// ============================================================

mostrarTitulo("1. ARREGLOS (ARRAYS)");

mostrarSubtitulo("1.1 ¿Qué es un arreglo?");
console.log(
  "Un arreglo es una lista ordenada de elementos. Cada elemento tiene una posición llamada índice."
);
console.log("Importante: en JavaScript los índices comienzan en 0.");

mostrarSubtitulo("1.2 Crear un arreglo con notación de corchetes []");

// Creamos un arreglo llamado frutas con tres elementos de texto.
const frutas = ["manzana", "plátano", "naranja"];

console.table("Arreglo frutas:", frutas);

mostrarSubtitulo("1.3 Acceder a un elemento por su índice");

// Accedemos al primer elemento del arreglo.
// Como los índices empiezan en 0, frutas[0] corresponde a "manzana".
const primeraFruta = frutas[0];
console.log("Primera fruta:", primeraFruta);

// Accedemos al segundo elemento.
console.log("Segunda fruta:", frutas[1]);

mostrarSubtitulo("1.4 Modificar un elemento del arreglo");

// Cambiamos el elemento que está en la posición 1.
// Antes era "plátano" y ahora será "uva".
frutas[1] = "uva";
console.log("Arreglo después de modificar la posición 1:", frutas);

mostrarSubtitulo("1.5 Agregar elementos al final del arreglo con push()");

// push() agrega un nuevo elemento al final del arreglo.
frutas.push("pera");
console.log("Arreglo después de push('pera'):", frutas);

mostrarSubtitulo("1.6 Obtener la cantidad de elementos con length");

// length devuelve el tamaño del arreglo.
const cantidadDeFrutas = frutas.length;
console.log("Cantidad de frutas:", cantidadDeFrutas);

mostrarSubtitulo("1.7 Crear un arreglo con el constructor Array()");

// También es posible crear arreglos usando Array().
const colores = new Array("rojo", "verde", "azul");
console.log("Arreglo colores:", colores);

// ============================================================
// 2. MÉTODOS COMUNES DE ARREGLOS
// ============================================================

mostrarTitulo("2. MÉTODOS COMUNES DE ARREGLOS");

// Creamos un arreglo de apoyo para practicar varios métodos.
const numeros = [10, 20, 30];
console.log("Arreglo inicial de números:", numeros);

mostrarSubtitulo("2.1 push() -> agrega al final");
numeros.push(40);
console.log("Después de push(40):", numeros);

mostrarSubtitulo("2.2 unshift() -> agrega al inicio");
numeros.unshift(5);
console.log("Después de unshift(5):", numeros);

mostrarSubtitulo("2.3 pop() -> elimina el último elemento");
const ultimoEliminado = numeros.pop();
console.log("Elemento eliminado con pop():", ultimoEliminado);
console.log("Arreglo actual:", numeros);

mostrarSubtitulo("2.4 shift() -> elimina el primer elemento");
const primeroEliminado = numeros.shift();
console.log("Elemento eliminado con shift():", primeroEliminado);
console.log("Arreglo actual:", numeros);

mostrarSubtitulo("2.5 indexOf() -> buscar la posición de un valor");
const posicionDe20 = numeros.indexOf(20);
console.log("Posición del número 20:", posicionDe20);

mostrarSubtitulo("2.6 splice() -> eliminar o reemplazar elementos");

// En este ejemplo:
// - Comenzamos en el índice 1
// - Eliminamos 1 elemento
numeros.splice(1, 1);
console.log("Arreglo después de splice(1, 1):", numeros);

mostrarSubtitulo("2.7 concat() -> unir arreglos");
const masNumeros = [50, 60];
const numerosUnidos = numeros.concat(masNumeros);
console.log("Arreglo resultante de concat():", numerosUnidos);

mostrarSubtitulo("2.8 sort() -> ordenar elementos");

// Con textos suele funcionar de forma directa.
const nombres = ["Carlos", "Ana", "Beatriz"];
nombres.sort();
console.log("Nombres ordenados:", nombres);

mostrarSubtitulo("2.9 reverse() -> invertir el orden");
nombres.reverse();
console.log("Nombres invertidos:", nombres);

mostrarSubtitulo("2.10 split() -> convertir texto en arreglo");
const texto = "HTML,CSS,JavaScript";
const tecnologias = texto.split(",");
console.log("Texto original:", texto);
console.log("Resultado de split(','):", tecnologias);

mostrarSubtitulo("2.11 join() -> convertir arreglo en texto");
const textoUnido = tecnologias.join(" - ");
console.log("Resultado de join(' - '):", textoUnido);

// ============================================================
// 3. ARREGLOS BIDIMENSIONALES
// ============================================================

mostrarTitulo("3. ARREGLOS BIDIMENSIONALES");

mostrarSubtitulo("3.1 ¿Qué es un arreglo bidimensional?");
console.log(
  "Es un arreglo que contiene otros arreglos. Se puede imaginar como una tabla con filas y columnas."
);

// Creamos una cuadrícula de números.
const cuadricula = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Cuadrícula completa:", cuadricula);

mostrarSubtitulo("3.2 Acceder a un valor con doble índice");

// cuadricula[1] corresponde a la segunda fila: [4, 5, 6]
// cuadricula[1][1] corresponde al segundo elemento de esa fila: 5
const numeroCentral = cuadricula[1][1];
console.log("Valor central de la cuadrícula:", numeroCentral);

// ============================================================
// 4. OBJETOS
// ============================================================

mostrarTitulo("4. OBJETOS");

mostrarSubtitulo("4.1 ¿Qué es un objeto?");
console.log(
  "Un objeto permite almacenar información en formato clave: valor. A diferencia de un arreglo, no se accede por posición, sino por nombre de propiedad."
);

mostrarSubtitulo("4.2 Crear un objeto");

const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Santiago",
};

console.log("Objeto persona:", persona);

mostrarSubtitulo("4.3 Acceder a propiedades con notación de punto");
console.log("Nombre de la persona:", persona.nombre);

mostrarSubtitulo("4.4 Acceder a propiedades con corchetes");
console.log("Edad de la persona:", persona["edad"]);

mostrarSubtitulo("4.5 Modificar propiedades existentes");
persona.edad = 31;
console.log("Objeto después de modificar edad:", persona);

mostrarSubtitulo("4.6 Agregar nuevas propiedades");
persona.profesion = "Desarrollador";
console.log("Objeto después de agregar profesion:", persona);

// ============================================================
// 5. BUCLES
// ============================================================

mostrarTitulo("5. BUCLES");

mostrarSubtitulo("5.1 Bucle for");
console.log(
  "El bucle for se utiliza cuando sabemos cuántas veces queremos repetir una acción."
);

// Estructura del for:
// for (inicialización; condición; actualización) {
//   código a repetir
// }
for (let i = 0; i < 5; i++) {
  console.log("Valor de i en for:", i);
}

mostrarSubtitulo("5.2 Bucle while");
console.log(
  "El bucle while se ejecuta mientras una condición sea verdadera."
);

let contadorWhile = 0;
while (contadorWhile < 5) {
  console.log("Valor de contadorWhile:", contadorWhile);
  contadorWhile++;
}

mostrarSubtitulo("5.3 Bucle do...while");
console.log(
  "El bucle do...while ejecuta el bloque al menos una vez, aunque la condición después resulte falsa."
);

let contadorDoWhile = 0;
do {
  console.log("Valor de contadorDoWhile:", contadorDoWhile);
  contadorDoWhile++;
} while (contadorDoWhile < 5);

mostrarSubtitulo("5.4 Cuidado con los bucles infinitos");
console.log(
  "Siempre debe existir una condición de salida. Si una variable nunca cambia, el bucle podría ejecutarse para siempre."
);

// ============================================================
// 6. RECORRER ARRAYS CON BUCLES
// ============================================================

mostrarTitulo("6. RECORRER ARRAYS CON BUCLES");

const animales = ["perro", "gato", "conejo", "tortuga"];
console.log("Arreglo animales:", animales);

mostrarSubtitulo("6.1 Recorrer un arreglo con for");

for (let i = 0; i < animales.length; i++) {
  console.log(`Índice ${i}: ${animales[i]}`);
}

mostrarSubtitulo("6.2 ¿Qué está pasando en este recorrido?");
console.log(
  "1) i comienza en 0. 2) Mientras i sea menor que animales.length, el bucle continúa. 3) En cada vuelta, i aumenta en 1. 4) animales[i] entrega el valor de la posición actual."
);

// ============================================================
// 7. RECORRER OBJETOS CON for...in
// ============================================================

mostrarTitulo("7. RECORRER OBJETOS CON for...in");

const estudiante = {
  nombre: "María",
  edad: 22,
  carrera: "Diseño Web",
};

console.log("Objeto estudiante:", estudiante);

mostrarSubtitulo("7.1 Recorrer propiedades del objeto");

for (const propiedad in estudiante) {
  console.log(`${propiedad}: ${estudiante[propiedad]}`);
}

mostrarSubtitulo("7.2 ¿Qué hace for...in?");
console.log(
  "for...in recorre las propiedades enumerables de un objeto. En cada vuelta obtenemos el nombre de la propiedad y luego accedemos a su valor usando corchetes."
);

// ============================================================
// 8. FUNCIÓN REUTILIZABLE: NÚMERO PAR O IMPAR
// ============================================================

mostrarTitulo("8. FUNCIÓN REUTILIZABLE: NÚMERO PAR O IMPAR");

/**
 * Esta función recibe un número.
 * Si el número es divisible por 2, retorna "par".
 * En caso contrario, retorna "impar".
 *
 * Esta idea conecta con lo trabajado en la semana anterior,
 * donde se usaban condicionales y funciones.
 */
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log("El número 8 es:", esParOImpar(8));
console.log("El número 13 es:", esParOImpar(13));

// ============================================================
// 9. EJEMPLO INTEGRADOR
// ============================================================

mostrarTitulo("9. EJEMPLO INTEGRADOR");

mostrarSubtitulo("9.1 Problema");
console.log(
  "Tenemos un arreglo de números y queremos recorrerlo para indicar si cada valor es par o impar."
);

const listaDeNumeros = [3, 8, 11, 20, 25, 42];
console.log("Lista de números:", listaDeNumeros);

mostrarSubtitulo("9.2 Solución paso a paso con for");

for (let i = 0; i < listaDeNumeros.length; i++) {
  const numeroActual = listaDeNumeros[i];
  const resultado = esParOImpar(numeroActual);

  console.log(`El número ${numeroActual} es ${resultado}.`);
}

mostrarSubtitulo("9.3 Ejemplo práctico con objetos dentro de un arreglo");
console.log(
  "Ahora combinaremos arreglos, objetos, bucles y una función reutilizable."
);

const productos = [
  { nombre: "Teclado", precio: 19990, stock: 8 },
  { nombre: "Mouse", precio: 9990, stock: 5 },
  { nombre: "Monitor", precio: 129990, stock: 4 },
];

for (let i = 0; i < productos.length; i++) {
  const producto = productos[i];

  console.log(
    `Producto: ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock} unidades | El stock es ${esParOImpar(producto.stock)}.`
  );
}

// ============================================================
// 10. CIERRE
// ============================================================

mostrarTitulo("10. CIERRE DE LA CLASE");

console.log("Hoy aprendimos a:");
console.log("- Crear y manipular arreglos.");
console.log("- Utilizar métodos comunes de arrays.");
console.log("- Trabajar con arreglos bidimensionales.");
console.log("- Crear, leer y modificar objetos.");
console.log("- Repetir acciones con for, while y do...while.");
console.log("- Recorrer arreglos y objetos.");
console.log("- Reutilizar una función dentro de un problema práctico.");

console.log(
  "Siguiente paso sugerido: llevar estos ejemplos al navegador y luego conectarlos con eventos y manipulación del DOM."
);
