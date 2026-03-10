addEventListener('DOMContentLoaded', (e)=>{

    console.log('Se cargo el DOM')

    let encabezados = document.querySelectorAll('.header');
    let changeColor = document.getElementById('changeColor');
    let changeFont  = document.getElementById('changeFont');
    let changeText  = document.getElementById('changeText');

    let valorBoolean = true;

    console.log(changeColor)

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

    changeColor.addEventListener('click', cambiarColor );
    changeFont.addEventListener('click', cambiarFont );
    changeText.addEventListener('click', cambiarTexto )


})


