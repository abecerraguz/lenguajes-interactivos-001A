
import * as DOM from './utilities/DOM.js';
import {
    cambiarColor,
    cambiarFont,
    addList,
    toggleClassIconUniversal,
    toggleClassTheme,
    initializeFontSizeControl,
    increaseBtn,
    decreaseBtn,
    leerContenido

} from './utilities/funciones.js'

window.addEventListener('DOMContentLoaded', (e) => {

    console.log('Salida del DOM')
    window.speechSynthesis.cancel();
    const fontSizes = initializeFontSizeControl();
    DOM.changeColor.addEventListener('click', cambiarColor )
    DOM.changeFont.addEventListener('click', cambiarFont )
    DOM.agregarAlaLista.addEventListener('click', addList )
    DOM.iconUniversal.addEventListener('click', toggleClassIconUniversal)
    DOM.iconThemeToggle.addEventListener('click', toggleClassTheme )
    DOM.buttonIncreaseText.addEventListener('click',() => increaseBtn(fontSizes) )
    DOM.buttonDecreaseText.addEventListener('click', () => decreaseBtn(fontSizes) )
    DOM.listenButton.addEventListener('click', leerContenido);

})