// Creamos siempre nuestro document ready
// Que el DOM se haya cargado correctamente 
$(function(){
  
   // Cramos nuestras variables cons sus respectivos selectores
   let buscar = $('#addEnlace');
   let inputfindID = $('#numberPokeApi');
   let contentInfoPoke = $('#dataPoke');

   // CREAMOS LOS EVENTOS PARA SACAR EL NUMERO DEL INPUT
   // ACTUALIZACIÓN jQuery 4.0: .change(fn) fue eliminado como método abreviado.
   // Reemplazado por .on('change', fn)
   inputfindID.on('change', (e)=>{
       e.preventDefault()
       let id = inputfindID.val()
       if(id.length != 0 && id > 0){
            buscarPokemon(id)
       }else{
            alert('Ingrese un ID Correcto')
       }
   })

   buscar.on('change', (e)=>{
        e.preventDefault()
        let id = inputfindID.val()
        if(id.length != 0 && id > 0){
            buscarPokemon(id)
        }else{
            alert('Ingrese un ID Correcto')
        }
    })

    const buscarPokemon = (id) => {
        
        $.ajax({
            // Parametro de la coulta o URL de la API
            url  :`https://pokeapi.co/api/v2/pokemon/${id}`,
            // Tipo de conusulta como vamos a ir a buscar información es GET
            type : 'GET',
            // Que tipo de data es la que vas a consultar
            dataType:'json',

            // SE CREAN TRES METODOS O FUNCIONES COMO :
            /*
                success
                error
                complete
            */ 
            // success se va a ejecutar cuando la consulta es correcta
            // la respuesta viene intrinsica en el argumento de la funcion
            success:function(response){
                console.log('Salida de response--->',response)
                const data = response

                const infoPoke = {
                    imagen : data.sprites.other.dream_world['front_default'],
                    especie : data.species['name'],
                    dataMoves : data.moves
                }
                // Creamos la desetructuracion para acceder de forma mas rapida
                
                const { imagen, especie, dataMoves } = infoPoke  
                
                //Ejecutamos la funcion pintarPoke
                pintarPoke( imagen, especie ) 
                
                const lista = $('ul > li#dataInfo')

                // .slice(0, 10) limita la lista a los primeros 10 movimientos
                // sin esto se muestran todos (pueden ser más de 50)
                dataMoves.slice(0, 10).forEach( mov =>{
                    lista.append(`<span class="tag">${mov.move.name}</span>`)
                })

            },

            error:function(xhr,status){
                alert('Hay problemas con la API')
            },

            complete:function(xhr,status){
                //alert('Se realizo la consulta')
            }



        })
    }

    const pintarPoke = ( imagen, especie )=>{
        contentInfoPoke.html(`<div class="card">
        <img src="${imagen}" class="card-img-top" alt="${especie}" style="height:200px; object-fit:contain; background:#f8f9fa; padding:10px;">
        <div class="card-body">
          <h5 class="card-title">${especie}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <ul class="list-group list-group-flush">
                <li class="list-group-item active">Movimientos</li>
                <li class="list-group-item" id="dataInfo"></li>
          </ul>
        </div>
      </div>`)
    }



})