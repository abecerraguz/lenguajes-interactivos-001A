/*
============================================================
CLASE 03 - SEMANA 3
Tema central: BOM (Browser Object Model)
Archivo: index.js

IMPORTANTE:
- Este archivo fue corregido para alinearse al PDF de Semana 3.
- El foco está en BOM: window, print, ventanas, location,
  history, temporizadores, screen y navigator.
- NO se desarrolla DOM como contenido central en esta clase.
- Cuando aparece alguna referencia menor a HTML o a la consola,
  es solo para ejecutar ejemplos, no para enseñar DOM.

Sugerencia de uso:
1. Crear un archivo index.html simple.
2. Vincular este index.js con <script src="index.js"></script>
3. Abrir el navegador.
4. Probar las funciones desde la consola o enlazarlas a botones.
============================================================
*/

// ============================================================
// 1) PRESENTACIÓN GENERAL DE LA CLASE
// ============================================================

console.log("========================================");
console.log("CLASE 03 - BOM EN JAVASCRIPT");
console.log("========================================");
console.log("En esta clase revisaremos:");
console.log("1. window y mensajes: alert, confirm, prompt");
console.log("2. print()");
console.log("3. open() y close()");
console.log("4. location");
console.log("5. history");
console.log("6. setTimeout y setInterval");
console.log("7. screen");
console.log("8. navigator");
console.log("9. geolocation");
console.log("========================================");

// ============================================================
// 2) WINDOW - MENSAJES
// ============================================================
// El PDF explica que dentro de window encontramos métodos como:
// - alert()
// - confirm()
// - prompt()
// Estos sirven para interactuar con el usuario por medio de
// ventanas emergentes del navegador.

function ejemploAlerta() {
  // alert muestra un mensaje simple al usuario.
  alert("Hola. Esta es una alerta.");
}

function ejemploConfirm() {
  // confirm devuelve true si el usuario acepta
  // y false si el usuario cancela.
  let respuesta = confirm("Elige si confirmas o cancelas");

  if (respuesta) {
    alert("Has confirmado");
  } else {
    alert("Has cancelado");
  }
}

function ejemploPrompt() {
  // prompt solicita un dato al usuario.
  // Puede devolver texto o null si el usuario cancela.
  let respuesta = prompt("Por favor, ingresa tu nombre:");

  // Primero revisamos que NO sea null.
  if (respuesta !== null) {
    // Luego quitamos espacios al inicio y al final con trim()
    // para validar que el usuario realmente escribió algo.
    if (respuesta.trim() !== "") {
      alert("Hola, " + respuesta + ". ¡Bienvenido!");
    } else {
      alert("No ingresaste tu nombre. ¡Adiós!");
    }
  } else {
    alert("No ingresaste tu nombre. ¡Adiós!");
  }
}

// ============================================================
// 3) WINDOW - IMPRESIÓN
// ============================================================
// El PDF propone una actividad donde una página se prepara para
// impresión. Para eso se utiliza window.print().
// Este método abre la ventana de impresión del navegador.

function imprimirPagina() {
  window.print();
}

// ============================================================
// 4) WINDOW - VENTANAS
// ============================================================
// window.open() permite abrir una nueva ventana.
// window.close() permite cerrar una ventana abierta por JavaScript.

// Declaramos la variable fuera de las funciones para que ambas
// funciones puedan acceder a la misma ventana emergente.
let nuevaVentana;

function abrirVentanaDemo() {
  // Parámetros de open:
  // 1. URL
  // 2. nombre de la ventana
  // 3. atributos separados por coma y sin espacios
  nuevaVentana = window.open(
    "https://www.duoc.cl",
    "Nueva Ventana",
    "status=yes,resizable=yes,width=500,height=400"
  );

  console.log("Intentando abrir una nueva ventana...");
}

function cerrarVentanaDemo() {
  // Para cerrar, verificamos primero si la ventana existe.
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.close();
    console.log("La ventana fue cerrada.");
  } else {
    console.log("No hay una ventana abierta para cerrar.");
  }
}

function estadoVentanaDemo() {
  // opener indica si la ventana fue abierta por otra ventana.
  // closed indica si la ventana ya está cerrada.
  if (nuevaVentana) {
    console.log("¿Tiene opener?:", nuevaVentana.opener !== null);
    console.log("¿La ventana está cerrada?:", nuevaVentana.closed);
  } else {
    console.log("Aún no se ha abierto ninguna ventana.");
  }
}

// ============================================================
// 5) WINDOW - LOCATION
// ============================================================
// location entrega información de la URL actual.
// El PDF muestra ejemplos con href, protocol, host, pathname,
// search y hash.

function datosLocation() {
  let urlCompleta = location.href;
  let protocolo = location.protocol;
  let host = location.host;
  let ruta = location.pathname;
  let consulta = location.search;
  let anclaje = location.hash;

  console.log("URL completa:", urlCompleta);
  console.log("Protocolo:", protocolo);
  console.log("Host:", host);
  console.log("Ruta:", ruta);
  console.log("Consulta:", consulta);
  console.log("Anclaje:", anclaje);
}

function recargarPagina() {
  // Recarga la página actual.
  location.reload();
}

function irAUrlConAssign() {
  // assign navega a una nueva URL y deja registro en el historial.
  location.assign("https://developer.mozilla.org/es/");
}

function reemplazarUrl() {
  // replace navega a otra URL, pero reemplaza la actual en el historial.
  // Ojo: después de ejecutarla no podrás volver a esta misma página
  // con el botón atrás.
  location.replace("https://developer.mozilla.org/es/");
}

// ============================================================
// 6) WINDOW - HISTORY
// ============================================================
// El objeto history permite moverse dentro del historial del navegador.

function irAtras() {
  window.history.back();
}

function irAdelante() {
  window.history.forward();
}

function moverHistorial(valor) {
  // Ejemplos:
  // moverHistorial(-1) => atrás
  // moverHistorial(1)  => adelante
  // moverHistorial(0)  => recarga según el contexto del navegador
  window.history.go(valor);
}

function agregarEstadoHistorial() {
  // Agrega una nueva entrada al historial sin recargar la página.
  // Este ejemplo es útil para explicar la idea del historial moderno.
  window.history.pushState({ pagina: "demo" }, "", "?demo=history");
  console.log("Se agregó un nuevo estado al historial.");
}

function reemplazarEstadoHistorial() {
  // Reemplaza la entrada actual del historial.
  window.history.replaceState({ pagina: "reemplazo" }, "", "?demo=reemplazo");
  console.log("Se reemplazó el estado actual del historial.");
}

// ============================================================
// 7) WINDOW - MANEJO DEL TIEMPO
// ============================================================
// El PDF trabaja:
// - setTimeout
// - clearTimeout
// - setInterval
// - clearInterval

function miFuncionTimeout() {
  console.log("La función se ha ejecutado.");
}

function demoSetTimeoutCancelado() {
  let timeoutID = setTimeout(miFuncionTimeout, 3000);

  // Cancelamos antes de que se ejecute.
  clearTimeout(timeoutID);

  console.log("La función ha sido cancelada.");
}

function demoSetTimeoutEjecutado() {
  setTimeout(function () {
    console.log("Han pasado 3 segundos y esta función sí se ejecutó.");
  }, 3000);
}

let intervalID;

function demoSetInterval() {
  // Antes de crear uno nuevo, revisamos si ya existe un intervalo activo.
  if (intervalID) {
    console.log("Ya existe un intervalo ejecutándose.");
    return;
  }

  intervalID = setInterval(function () {
    console.log("La función se está ejecutando repetidamente.");
  }, 2000);

  console.log("Intervalo iniciado. Se ejecutará cada 2 segundos.");
}

function detenerIntervalo() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
    console.log("La función ha sido detenida.");
  } else {
    console.log("No hay ningún intervalo activo.");
  }
}

function demoSetIntervalConDetencionAutomatica() {
  let intervaloTemporal = setInterval(function () {
    console.log("Ejecutando intervalo temporal cada 2 segundos...");
  }, 2000);

  setTimeout(function () {
    clearInterval(intervaloTemporal);
    console.log("El intervalo temporal fue detenido después de 10 segundos.");
  }, 10000);
}

// NOTA DIDÁCTICA:
// En el PDF aparece un ejemplo de reloj en tiempo real. Ese ejemplo
// usa un elemento HTML con id="hora" y lo actualiza con JavaScript.
// Como pediste centrar esta clase en BOM y dejar DOM para Semana 4,
// aquí NO desarrollamos el reloj como contenido principal.
// Lo dejamos mencionado solo como referencia del material.

// ============================================================
// 8) SCREEN
// ============================================================
// screen permite obtener información sobre la pantalla del usuario.
// Según el PDF, entrega datos como ancho, alto y profundidad de color.

function datosScreen() {
  console.log("Alto de pantalla:", screen.height);
  console.log("Ancho de pantalla:", screen.width);
  console.log("Profundidad de color:", screen.colorDepth);
  console.log("Profundidad de píxel:", screen.pixelDepth);
  console.log("Alto disponible:", screen.availHeight);
  console.log("Ancho disponible:", screen.availWidth);
}

// ============================================================
// 9) NAVIGATOR
// ============================================================
// navigator permite conocer información del navegador y del dispositivo.

function datosNavigator() {
  console.log("Cookies habilitadas:", navigator.cookieEnabled);
  console.log("Nombre del navegador:", navigator.appName);
  console.log("Versión del navegador:", navigator.appVersion);
  console.log("Idioma del navegador:", navigator.language);
  console.log("Plataforma:", navigator.platform);
  console.log("User Agent:", navigator.userAgent);
}

function verificarCookies() {
  if (navigator.cookieEnabled) {
    console.log("Las cookies están habilitadas en el navegador.");
  } else {
    console.log("Las cookies no están habilitadas en el navegador.");
  }
}

function mostrarIdioma() {
  console.log("El idioma del navegador es:", navigator.language);
}

// ============================================================
// 10) GEOLOCALIZACIÓN DESDE NAVIGATOR
// ============================================================
// El PDF incluye getCurrentPosition() como ejemplo.
// Este método solicita permiso al usuario para acceder a su ubicación.

function obtenerGeolocalizacion() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;

        console.log(
          "Tu ubicación actual es: Latitud " + latitud + ", Longitud " + longitud
        );
      },
      function (error) {
        console.error("Error al obtener la ubicación:", error.message);
      }
    );
  } else {
    console.log("Geolocalización no está disponible en este navegador.");
  }
}

// ============================================================
// 11) GUÍA RÁPIDA DE PRUEBAS EN CONSOLA
// ============================================================
// Puedes copiar y ejecutar estas funciones desde la consola del navegador:
// ejemploAlerta()
// ejemploConfirm()
// ejemploPrompt()
// imprimirPagina()
// abrirVentanaDemo()
// cerrarVentanaDemo()
// estadoVentanaDemo()
// datosLocation()
// irAtras()
// irAdelante()
// moverHistorial(-1)
// agregarEstadoHistorial()
// reemplazarEstadoHistorial()
// demoSetTimeoutCancelado()
// demoSetTimeoutEjecutado()
// demoSetInterval()
// detenerIntervalo()
// demoSetIntervalConDetencionAutomatica()
// datosScreen()
// datosNavigator()
// verificarCookies()
// mostrarIdioma()
// obtenerGeolocalizacion()

// ============================================================
// 12) CIERRE DIDÁCTICO
// ============================================================
console.log("Clase cargada correctamente.");
console.log("Uso y manejo del BOM.");
console.log("DOM se deja para la Semana 4");
