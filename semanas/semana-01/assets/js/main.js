
// PASO 1 INICIO
console,log('=============EJEMPLO CONSOLE Y OTROS ==========')
    alert('Hola Mundo con Javascript');
    alert('Bienvenidos');
    confirm('Eres mayor de edad?');
    prompt('Ingresa tu edad');

    // Función Incoorporar un texto al DOM ( Document Object Model )
    document.write('Hola Mundo desde fichero externo');

    // Metodo log se utiliza para Debugger
    console.log('Muestra esto en la consola');
    console.log(88+4);
console,log('=============EJEMPLO CONSOLE Y OTROS ==========')
// PASO 1 CIERRE




// PASO 2 VARIABLESINICIO
console,log('=============EJEMPLO VARIABLES ==========')
    let pais       = "Chile";
    let continente = "Latino America";
    let antiguedad = 1810;
    let pais_y_continente = pais+' '+continente;

    pais = "España";
    continente = "Europa";
    console.log ( pais, continente, antiguedad, 'Pais y continente-->', pais_y_continente );
    alert( pais_y_continente );
console,log('=============EJEMPLO VARIABLES ==========')
// PASO 2 VARIABLES CIERRE



// PASO 3 VARIABLES AMBITO
console,log('=============EJEMPLO VARIABLES ==========')
    console.log('=============EJMEPLO VAR ==========')
    var texto1 = "Curso de Javascript";
    console.log( texto1 );
    {
        var texto1 = "Curso de Laravel 5";
        console.log( texto1 )
    }
    console.log( texto1 )


    console.log('=============EJMEPLO LET ==========')
    let texto2 = "Curso de Javascript";
    console.log( texto2 ); 
    {
        let texto2 = "Curso de Laravel 5";
        console.log( texto2 )
    }
    console.log( texto2)
console,log('=============EJEMPLO VARIABLES ==========')
// PASO 3 VARIABLES AMBITO




// PASO 4 TIPOS DE DATOS
    //--------------TYPEOF FUNCIONES QUE RETORNA EL TIPO DE DATO
    let numero_entero   	= 44;
    let cadena_de_texto 	= "Hola que tal";
    let verdadero_o_falso 	= true; //Valor booleano puede ser true o false
    let numero_falso        = "33";

    console.log( typeof numero_entero );
    console.log( typeof cadena_de_texto );
    console.log( typeof verdadero_o_falso );
    console.log( typeof numero_falso );

    //--------------FUNCIONES PARA CONVERTIR UN DATO A OTRO
    let numero_falso_string = "33.4";
    let numero = 50;
    console.log( numero_falso_string+7 ) // No se suma el valor dado que es un string 
// PASO 4 TIPOS DE DATOS


// PASO 5 OPERADORES OPERADORES RELACIONALES Y LOGICOS , CONCICIONAL
    /*

        Mayor: >
        Menor: <
        Mayor o Igual : >=
        Menor o Igual : <=
        Igual: ==
        Igual estricto: ===
        Distinto :!=

        AND(Y):&&
        OR(O):||
        NEGACIÓN:!
    */

    let year = 2025;

    if(year >= 2000 && year <=2025){

        console.log("Estamos en la era actual");
        
    }else{
        console.log("Estamos en la era Post moderna")
    }

    if( year == 2008 || (year >= 2018 && year == 2028) ){
        console.log("El año termina en 8");
    }else{
        console.log("Año no registrado")
    }

// PASO 5 OPERADORES OPERADORES RELACIONALES Y LOGICOS, CONCICIONAL

// PASO 6 FUNCIONES
    function areaDeUnTriangulo( base=100, altura=200 ){
        // (Base * Altura) / 2
        let area = ( base*altura )/2
        return area
    }
    console.log( areaDeUnTriangulo( 400,100 ) );
// PASO 6 FUNCIONES



/*

    Ejercicio: Calculadora de Edad y Categoría

    Instrucciones:
        - Declara una variable para almacenar el año actual y otra para el año de nacimiento del usuario.
        - Calcula la edad del usuario usando operadores aritméticos.
        - Usa operadores de asignación para almacenar la edad en una nueva variable.
        - Usa operadores de comparación para determinar si el usuario es menor de edad (menos de 18 años) o mayor de edad.
        - Usa operadores lógicos para verificar si el usuario es adulto joven (18-25 años).
        - Crea una función que reciba la edad y retorne la categoría del usuario:

    Menor de edad: "Eres menor de edad"
    Adulto joven (18-25): "Eres un adulto joven"
    Adulto (26+): "Eres un adulto"

    Muestra el resultado en la consola con console.log().
 */

// 1. Declaración de variables
let anioActual = 2025; // Puedes cambiarlo por el año en curso
let anioNacimiento = 2005; // Modificar según sea necesario

// 2. Operación aritmética para calcular la edad
let edad = anioActual - anioNacimiento;

// 3. Uso de operadores de asignación
let miEdad = edad; // Asignamos la edad a otra variable

// 4. Operadores de comparación
let esMenor = miEdad < 18; // ¿Es menor de edad?
let esMayor = miEdad >= 18; // ¿Es mayor o igual a 18 años?

// 5. Operadores lógicos para determinar si es adulto joven
let esAdultoJoven = esMayor && miEdad <= 25;

// 6. Función para determinar la categoría de edad
function determinarCategoria(edad) {
    if (edad < 18) {
        return "Eres menor de edad";
    } else if (edad >= 18 && edad <= 25) {
        return "Eres un adulto joven";
    } else {
        return "Eres un adulto";
    }
}

// 7. Mostrar los resultados en la consola
console.log("Año actual:", anioActual);
console.log("Año de nacimiento:", anioNacimiento);
console.log("Edad:", miEdad);
console.log("¿Es menor de edad?", esMenor);
console.log("¿Es mayor de edad?", esMayor);
console.log("¿Es un adulto joven?", esAdultoJoven);
console.log("Categoría:", determinarCategoria(miEdad));


