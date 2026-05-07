let changeColor = document.getElementById('changeColor'),
changeFont = document.getElementById('changeFont'),
changeText = document.getElementById('changeText'),
changeURL = document.getElementById('changeURL'),
encabezados = document.querySelectorAll('.header'),
inputAgregar = document.getElementById('inputAgregar'),
agregarAlaLista = document.getElementById('agregarAlaLista'),
lista = document.getElementById('ol-list'),

iconUniversal = document.querySelector('#iconUniversal'),
contentAccesoUniversal = document.querySelector('.accesoUniversal'),
iconThemeToggle = document.querySelector('#themeToggle'),
buttonIncreaseText = document.querySelector('#increaseText'),
buttonDecreaseText = document.querySelector('#decreaseText'),
listenButton = document.querySelector('#listenButton'),
listenIcon = document.querySelector('#iconAudio')


export const estado = {
    valorBoolean : true
}

export {
    changeColor,
    changeFont,
    changeText,
    changeURL,
    encabezados,
    agregarAlaLista,
    inputAgregar,
    lista,
    iconUniversal,
    contentAccesoUniversal,
    iconThemeToggle,
    buttonIncreaseText,
    buttonDecreaseText,
    listenButton,
    listenIcon
}