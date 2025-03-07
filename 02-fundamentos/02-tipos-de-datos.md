# Tipos de datos en JavaScript

En JavaScript, existen letios tipos de datos que se pueden utilizar para almacenar información en letiables.

* `string`
* `number`
* `boolean`
* `undefined`
* `null`
* `symbol`
* `bigint`
* `array`
* `object`

## Tipo de dato `string`

El tipo de datos `string` o cadena de caracteres se utiliza para representar texto.

```js
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
```

También se pueden utilizar caracteres especiales en las cadenas de texto, como saltos de línea y tabulaciones, utilizando secuencias de escape.

```js
let mensaje = "Este es un mensaje\nen dos líneas.";
let titulo = "Página principal\t\tMi sitio web";
```

## Tipo de dato `number`

El tipo de datos `number` o numérico se utiliza para representar números enteros y decimales.

```js
let numeroEntero = 42;
let numeroDecimal = 3.14;
```

## Tipo de dato `boolean`

El tipo de datos `boolean` o booleano se utiliza para representar valores lógicos, es decir, verdadero o falso.

```js
let esMayorDeEdad = true;
let tieneLicencia = false;
```

## Tipo de dato `undefined`

El tipo de datos `undefined` se utiliza para representar un valor no definido.

```js
let valorNoDefinido;
```

## Tipo de dato `null`

El tipo de datos `null` se utiliza para representar un valor nulo o vacío.

```js
let valorNulo = null;
```

## Tipo de dato `symbol`

El tipo de datos `symbol` se utiliza para representar un valor único e inmutable.

```js
let simbolo = Symbol("mi-simbolo");
```

## Tipo de dato `bigint`

El tipo de datos `bigint` se utiliza para representar números enteros de gran tamaño.

```js
let numeroEnteroGrande = 9007199254740991n;
```

## Tipo de dato `Array`

El tipo de datos `Array` o arreglo se utiliza para representar una colección de datos ordenados.

```js
let frutas = ["manzana", "naranja", "plátano"];
let numeros = [1, 2, 3, 4, 5];
```

## Tipo de dato `object`

El tipo de datos `object` o objeto se utiliza para representar una colección de datos.

```js
let persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  programas: true,
  numeroIdentificacion: 123456789,
  bandasFavoritas: ["The Beatles", "Led Zeppelin", "Queen"],
};
```

## Buenas prácticas

Para saber cual es el tipo de dato de una letiable, podemos utilizar el operador `typeof`.

```javascript
let nombre = "Juan";
console.log(typeof nombre); // string

let edad = 30;
console.log(typeof edad); // number

let programas = true;
console.log(typeof programas); // boolean

let valorNoDefinido;
console.log(typeof valorNoDefinido); // undefined

let valorNulo = null;
console.log(typeof valorNulo); // object

let simbolo = Symbol("mi-simbolo");
console.log(typeof simbolo); // symbol

let numeroEnteroGrande = 9007199254740991n;
console.log(typeof numeroEnteroGrande); // bigint

let frutas = ["manzana", "naranja", "plátano"];
console.log(typeof frutas); // object

let persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  programas: true,
  numeroIdentificacion: 123456789,
  bandasFavoritas: ["The Beatles", "Led Zeppelin", "Queen"],
};
console.log(typeof persona); // object
```
