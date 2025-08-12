addEventListener('DOMContentLoaded', (e)=>{

    console.log('Se cargo el DOM')

    let encabezados = document.querySelectorAll('.header');
    let changeColor = document.getElementById('changeColor');
    let changeFont  = document.getElementById('changeFont');
    let changeText  = document.getElementById('changeText');
    let changeURL   = document.getElementById('changeURL');
    let changeDetacarEncabezadoPares = document.getElementById('changeDetacarEncabezadoPares');
    let changeDestacarEncabezadoImpares = document.getElementById('changeDestacarEncabezadoImpares');
    let changeAgrandarEncabezado = document.getElementById('changeAgrandarEncabezados');
    let agregarAlaLista = document.getElementById('agregarAlaLista');
    let num = 32;

    let valorBoolean = true;

    console.log(agregarAlaLista)


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

    function cambiarUrl(e){
        e.preventDefault();
        let imgDefault = document.getElementById('image1');
        if( imgDefault ){
            if(valorBoolean){
                imgDefault.src = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/01/coche-homer-simpson_1.jpg?tf=150x150'
            }else{
                imgDefault.src = 'https://placehold.jp/150x150.png';
            }
            valorBoolean = !valorBoolean;
        }
    }


    function cambiarEncabezadosPares(e){
        e.preventDefault();
        console.log( encabezados )
        encabezados.forEach(function( element, index ){
            if(valorBoolean){
                let num = index+1
                if(num%2 == 0)
                    element.style.color = 'red'

            }else{
                element.style.color = ''
            }
            valorBoolean = !valorBoolean;
        })
    }

    function cambiarEncabezadosImpares(e){
        e.preventDefault();
        console.log( encabezados )
        encabezados.forEach(function( element, index ){
            if(valorBoolean){
                let num = index+1
                if(num%2 != 0)
                    element.style.color = 'orange'

            }else{
                element.style.color = ''
            }
            valorBoolean = !valorBoolean;
        })
    }


    function agrandarEncabezados(e){
        e.preventDefault();
        num+=1
        console.log(num)
        encabezados.forEach(function(element){
            element.style.fontSize = `${num}px`;
        })

    }

    function agregarLista(e){
        e.preventDefault();

        let inputText = document.querySelector('#inputAgregar');
        let lista  = document.querySelector('#ol-list');
        let elementList = document.createElement('li');
        console.log(inputText.value)
        if(inputText.value.length != 0 ){
            elementList.classList.add('list-group-item');
            elementList.innerText = inputText.value;
            lista.appendChild(elementList)
        }else{
            alert('Debe ingresar una palabra')
        }
    }


    changeColor.addEventListener('click', cambiarColor );
    changeFont.addEventListener('click', cambiarFont );
    changeText.addEventListener('click', cambiarTexto );
    changeURL.addEventListener('click',  cambiarUrl );
    changeDetacarEncabezadoPares.addEventListener('click',  cambiarEncabezadosPares );
    changeDestacarEncabezadoImpares.addEventListener('click',  cambiarEncabezadosImpares );
    changeAgrandarEncabezado.addEventListener('click',  agrandarEncabezados );
    agregarAlaLista.addEventListener('click',  agregarLista );

})


