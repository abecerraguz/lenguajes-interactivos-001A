
import * as DOM from './utilities/DOM.js';
import {
    cambiarColor,
    cambiarFont,
    addList
} from './utilities/funciones.js'

window.addEventListener('DOMContentLoaded', (e) => {

    console.log('Salida del DOM')
 
    DOM.changeColor.addEventListener('click', cambiarColor )
    DOM.changeFont.addEventListener('click', cambiarFont )
    DOM.agregarAlaLista.addEventListener('click', addList )

})