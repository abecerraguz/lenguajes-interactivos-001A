const estilo1 = `
  background:linear-gradient(#4682B4, #F08080);
  color:#fff; padding:10px 10px; font-weight:bold; border-radius:10px;
`;
const estilo2 = `
  background:#4682B4; color:#fff; border-radius:10px; padding:5px 10px; font-weight:bold; margin-top:20px
`;
const estilo3 = `
  background:#F08080; color:#2F4F4F; border-radius:10px; padding:5px 10px; font-weight:bold;
`;
const estilo4 = `font-weight:bold;`;

console.log("%c Semana 2 - Mini-Kiosco (Arreglos, Objetos y Bucles)", estilo1);

// ====== Inventario (Array de objetos)

let inventario = [
  {nombre:"Agua 500ml", precio:900, stock: 15, categoria:"Bebestible"},
  { nombre: "Galletas",   precio: 1200, stock: 10, categoria: "Snacks" },
  { nombre: "Chocolate",  precio: 1500, stock: 8,  categoria: "Snacks" },
]

let humano = {
    nombre:"Pedro",
    edad :20
}

// console.log(humano['nombre']);

// console.log("%c Salida de Inventario", estilo1 ,inventario[1].stock )
// console.table(inventario);

function listarProductos(){
    console.log("%c Inventario actual:", estilo2);
    for(let i = 0; i <  inventario.length; i++){
        // console.log(i)
        const item = inventario[i]
        // console.log(item);
        let linea = "";
        for(let clave in item){
            // console.log('Salida de clave',clave)
            // console.log('salida de item', item)
            linea += `${clave}: ${item[clave]}`
        }
        console.log(`%c#${i} → ${linea}`, estilo4)
    }
}

// listarProductos();

function buscarIndicePorNombre(nombre){

    for(let i = 0; i < inventario.length; i++){
  

        // console.log('YYYYYYY-->', typeof nombre.toLowerCase())
       if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return i
        }
    }
    return console.log -1
}

buscarIndicePorNombre("Chocolate");


function venderProducto(){
    const nombre = prompt("¿Qué producto deseas vender?");
    if(!nombre) return
    // console.log('Salida de nombre-->', nombre)
    const idx = buscarIndicePorNombre(nombre);

    if(idx === -1){
         console.log("%c No existe ese producto en inventario.", estilo3);
         return
    }

    let cantidad = parseInt(prompt("¿Cuántas unidades deseas vender?"))
    if(isNaN(cantidad) || cantidad <= 0){
        console.log("%c Cantidad inválida.", estilo3);
        return;
    }

    let vendido = 0
    // console.log('XXXXXXX--->',inventario[idx])
    while(cantidad > 0 && inventario[idx].stock > 0){
        inventario[idx].stock--;
        cantidad--
        vendido++;
    }

    const total = vendido * inventario[idx].precio;

    console.log(
        `%c Vendidas ${vendido} unidad(es) de ${inventario[idx].nombre}. ` +
        `Total: $${total}. Stock restante: ${inventario[idx].stock}`,
        estilo2
    );

  if (cantidad > 0) {
    console.log("%c Venta parcial: faltó stock para completar la solicitud.", estilo3);
  }



}

// venderProducto()
// listarProductos()

// ===== Menú principal (do...while)
function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Mini-Kiosco\n" +
      "1) Listar productos\n" +
      "2) Vender producto\n" +
      "0) Salir"
    );

    switch (opcion) {
      case "1":
        listarProductos();
        break;
      case "2":
        venderProducto();
        break;
      case "0":
        console.log("%c ¡Hasta luego!", estilo1);
        break;
      default:
        console.log("%c Opción inválida.", estilo3);
    }
  } while (opcion !== "0");
}


menu();

