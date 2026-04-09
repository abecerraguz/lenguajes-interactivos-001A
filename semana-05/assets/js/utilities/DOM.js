// Selecciona el botón "Cambiar color de encabezados" por su ID en el HTML
let changeColor = document.getElementById('changeColor'),

// Selecciona el botón "Cambiar fuente de encabezados" por su ID en el HTML
changeFont = document.getElementById('changeFont'),

// Selecciona el botón "Cambiar texto" por su ID en el HTML
changeText = document.getElementById('changeText'),

// Selecciona el botón "Cambiar ruta de la imagen" por su ID en el HTML
changeURL = document.getElementById('changeURL'),

// Selecciona todos los elementos que tienen la clase "header" (h1, h2, h3)
// querySelectorAll retorna un NodeList con todos los elementos coincidentes
encabezados = document.querySelectorAll('.header'),

// Selecciona el input de texto donde el usuario escribe el lenguaje a agregar
inputAgregar = document.getElementById('inputAgregar'),

// Selecciona el botón "Agregar" que añade el texto del input a la lista
agregarAlaLista = document.getElementById('agregarAlaLista'),

// Selecciona el elemento <ol> (lista ordenada) donde se insertarán los nuevos items
lista = document.getElementById('ol-list'),

// Selecciona el botón "Destacar Pares" para resaltar encabezados en índices pares
changeDetacarEncabezadoPares = document.getElementById('changeDetacarEncabezadoPares'),

// Selecciona el botón "Destacar Impares" para resaltar encabezados en índices impares
changeDestacarEncabezadoImpares = document.getElementById('changeDestacarEncabezadoImpares'),

// Selecciona el botón "Agrandar Destacado" para aumentar el font-size de los encabezados destacados
changeAgrandarEncabezados = document.getElementById('changeAgrandarEncabezados'),

// Selecciona el botón "Disminuir Destacado" para reducir el font-size de los encabezados destacados
changeDisminuirEncabezados = document.getElementById('changeDisminuirEncabezados'),

// Selecciona la imagen cuya URL cambiará con el botón "Cambiar ruta de la imagen"
image1 = document.getElementById('image1');


// Objeto de estado compartido para manejar el toggle de cambiarColor y cambiarFont
export const estado = {
    // true = aplicar cambio, false = revertir cambio
    valorBoolean : true
}

// Exporta todas las referencias del DOM para que los demás módulos puedan usarlas
export {
    changeColor,
    changeFont,
    changeText,
    changeURL,
    encabezados,
    agregarAlaLista,
    inputAgregar,
    lista,
    changeDetacarEncabezadoPares,
    changeDestacarEncabezadoImpares,
    changeAgrandarEncabezados,
    changeDisminuirEncabezados,
    image1
}