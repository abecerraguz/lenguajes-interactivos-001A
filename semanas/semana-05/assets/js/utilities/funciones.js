import * as DOM from './DOM.js';

function cambiarColor(e){
    e.preventDefault();
    DOM.encabezados.forEach(function(element){
        if( DOM.estado.valorBoolean ){
            element.style.color = 'red'
        }else{
            element.style.color = ''
        }
    })
    DOM.estado.valorBoolean = !DOM.estado.valorBoolean
}

function cambiarFont(e){
    e.preventDefault();
        DOM.encabezados.forEach(function(element){
            if(DOM.estado.valorBoolean){
                element.style.fontFamily = 'Roboto, sans-serif';
            }else{
                element.style.fontFamily = '';
            }
            
        })
        DOM.estado.valorBoolean = !DOM.estado.valorBoolean;
}

function addList(e){
    e.preventDefault();
    if(DOM.inputAgregar.value.length === 0){
        alert('Debes agregar un lenguaje de programación')
    }

    // Verificar si el elemnto ya existe
    const items = DOM.lista.querySelectorAll('li');
    for (let item of items){
        console.log('Salida de item-->', item )
        if( item.innerText.toLowerCase() ===  DOM.inputAgregar.value.toLowerCase()){
            alert('la palabra ya fue agregada a la lista')
            DOM.inputAgregar.value = ''
            return;
        }
    }
    
    // Agregagr desde el imput a un elemento creado
    const elementList = document.createElement('li')
    elementList.classList.add('list-group-item')
    elementList.innerText = DOM.inputAgregar.value
    DOM.lista.appendChild(elementList);

    DOM.inputAgregar.value = ''
}


export {
    cambiarColor,
    cambiarFont,
    addList
}