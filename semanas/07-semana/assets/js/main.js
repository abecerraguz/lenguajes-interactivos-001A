

addEventListener('DOMContentLoaded', (e)=>{

    console.log('Se cargo el DOM')

    let encabezados = document.querySelectorAll('.header');
    let changeColor = document.getElementById('changeColor');
    let changeFont  = document.getElementById('changeFont');
    let changeText  = document.getElementById('changeText');
    let changeImage = document.getElementById('changeURL');
    let changeDetacarEncabezadoPares = document.getElementById('changeDetacarEncabezadoPares');
    let changeDestacarEncabezadoImpares = document.getElementById('changeDestacarEncabezadoImpares');
    let changeAgrandarEncabezado = document.getElementById('changeAgrandarEncabezados');
    let agregarAlaLista = document.getElementById('agregarAlaLista');
    let num = 32;

    let valorBoolean = true;

 
    function cambiarColor( e ) {
        e.preventDefault();
            encabezados.forEach(function(element){
                if(valorBoolean){
                    element.style.color='red';
                }else{
                    element.style.color='';
                }
            })
            valorBoolean = !valorBoolean;
    }

    function cambiarFont(e){
        e.preventDefault();
            encabezados.forEach(function(element){
                if(valorBoolean){
                    element.style.fontFamily = 'Roboto, sans-serif';
                }else{
                    element.style.fontFamily = '';
                }
                
            })
            valorBoolean = !valorBoolean;
    }

    function cambiarTexto(e){
        e.preventDefault();
        let hDos = document.getElementById('new'); 
        if (hDos) {
            if (valorBoolean) {
                hDos.textContent = 'Texto modificado con JavaScript';
            } else {
                hDos.textContent = 'Lorem ipsum dolor sit.';
            }
            valorBoolean = !valorBoolean;
        }
    }

    function cambiarImagen(e){
        e.preventDefault();
        let imagen = document.getElementById('image1')
        console.log('salida de imagen-->', imagen )
        if(imagen){
            if(valorBoolean){
                imagen.src = "https://picsum.photos/200/200"
            }else{
                imagen.src = "https://placehold.jp/200x200.png";                
            }
            valorBoolean = !valorBoolean;
        }else{
            console.log("No se encontró la imagen con ese ID")
        }
    }
   
    function cambiarEncabezadosPares(e){
         e.preventDefault();
        //  console.log('Salida de encabezados', encabezados)
        encabezados.forEach(function(element, index){
            if(valorBoolean){
                let num = index+1
                if(num%2 == 0 )
                    element.style.color='orange'
            }else{
                element.style.color = ''
            }
            valorBoolean = !valorBoolean;
        })
    }

        function cambiarEncabezadosImpar(e){
         e.preventDefault();
        //  console.log('Salida de encabezados', encabezados)
        encabezados.forEach(function(element, index){
            if(valorBoolean){
                let num = index+1
                if(num%2 != 0 )
                    element.style.color='orange'
            }else{
                element.style.color = ''
            }
            valorBoolean = !valorBoolean;
        })
    }

    function agrandarEncabezados(e){
       
        num+=1
        console.log('Salida de num-->', num)
        encabezados.forEach(function(element){
            element.style.fontSize = `${num}px`
        })
    }

    function agregarLista(e){
       e.preventDefault();
       let inputText = document.querySelector('#inputAgregar')
       let lista = document.querySelector('#ol-list')
       let elementList = document.createElement('li')
       console.log('salida del value de el input--->',inputText.value)
       if(inputText.value.length != 0){
          elementList.classList.add('list-group-item') 
          elementList.innerText =  inputText.value;
          lista.appendChild(elementList)    
       }else{
        alert('Debes ingresar una palabra')
       }
    }

    changeColor.addEventListener('click', cambiarColor );
    changeFont.addEventListener('click', cambiarFont );
    changeText.addEventListener('click', cambiarTexto );
    changeImage.addEventListener('click', cambiarImagen )
    changeDetacarEncabezadoPares.addEventListener('click', cambiarEncabezadosPares)
    changeDestacarEncabezadoImpares.addEventListener('click', cambiarEncabezadosImpar)
    changeAgrandarEncabezado.addEventListener('click',  agrandarEncabezados );
    agregarAlaLista.addEventListener('click',  agregarLista );
})


