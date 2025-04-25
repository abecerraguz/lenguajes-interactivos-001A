$(document).ready(function () {
    
    console.log('El DOM se Cargo')
    
    let buscarForm  = $('#enviar')
    let numeroHeroe = $('#numeroHeroe')
    let showHeroe   = $('#showHeroe')
  

  
    buscarForm.click(function (e) { 

        e.preventDefault();
        let idSuperHeroe = numeroHeroe.val()
        if(idSuperHeroe.length != 0){
            findHeroe(idSuperHeroe)
            
        }else{
            alert('Ingrese un ID de un SuperHeroe')
        }
        
    });

    const findHeroe = (id) =>{
        //console.log('Salida del id',id)
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10224391957240785/${id}`,
            dataType: "json",
            success: function (response) {
                // viewHeroe.attr('src', response.image['url']);
                console.log('Salida de response--->', response)
                let nombre = response.biography['full-name']
                let conexiones = response.connections['group-affiliation']
                let publisher = response.biography.publisher
                let firstAppearance = response.biography['first-appearance']
                let ocupacion = response.work.occupation
                let altura = response.appearance.height.join(" - ")
                let peso = response.appearance.weight.join(" - ")
                let id = response.id
                let poderes = response.powerstats

                showHeroe.html(`
                <h5>SuperHeroe encontrado</h5>
                <hr>
                <div class="card">
                <img src="${response.image['url']}" class="card-img-top Superhero" alt="Superhero">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Conexiones: ${conexiones}</li>
                    <li class="list-group-item">Publicado por: ${publisher}</li>
                    <li class="list-group-item">Ocupación: ${ocupacion}</li>
                    <li class="list-group-item">Primera Aparición: ${firstAppearance}</li>
                    <li class="list-group-item">Altura: ${altura}</li>
                    <li class="list-group-item">Peso: ${peso}</li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-${id}">
                        Ver poderes
                    </button>
                </div>
                </div>
                `)
                chartHeroe(nombre,id,poderes)
            }
        });

        return id
    }

    const chartHeroe = (nombre,id,poderes) => {
           
            const contenedorPokemon = $('#posts');

                let datos = [];
                for (const key in poderes) {
                    datos.push(
                        {
                            y: parseInt( poderes[key] == 'null' ? 0 : poderes[key] ), 
                            indexLabel: key
                        });
                };

            contenedorPokemon.append(`<div class="modal fade" id="exampleModal-${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${nombre}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <div id="chartContainer" style="height: 300px; max-width: 920px; margin: 0px auto;"></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>`);	
      
            let chart = new CanvasJS.Chart("chartContainer",
            {
                backgroundColor: "transparent",
                // theme:'light1',
                width:750,
                height:400,
                animationEnabled: true,
                animationDuration: 5000,
                title:{
                    text: `${nombre}`
                },
                legend: {
                    maxWidth: 350,
                    itemWidth: 120
                },
                data: [
                {
                    type: "pie",
                    showInLegend: true,
                    legendText: "{indexLabel}",
                    dataPoints: datos
                    
                }
                ]
            });
            chart.render();
        
    }


});