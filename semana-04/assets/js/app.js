window.addEventListener('DOMContentLoaded', function(){
    // Recien comiezo a trabajar con el DOM
    const domH1 = document.querySelector('div#app h1')
    const domDiv = document.getElementById('app');
    const allParrfos = document.querySelectorAll('p')
    const infoSection = document.getElementById('info')

    const button = document.createElement('button')
    button.innerText = "Click"
    button.setAttribute('type', 'button')
    button.classList.add('btn', 'btn-primary')
    button.setAttribute('id', 'buttonClick')
    infoSection.append(button)
    console.log("Salida de button-->", button)

    const buttonClick = document.getElementById('buttonClick')

    function cambiarColorParrafos(e){
        e.preventDefault();
        allParrfos.forEach( element => {
            element.style.color = 'red'
        })
    }

    buttonClick.addEventListener('click', cambiarColorParrafos )

  

    console.log('Salida de allParrfos --->', allParrfos )

    domDiv.style.background = 'black';
    domDiv.style.padding = '1rem';
    domH1.style.color = 'red';
    domH1.innerText = 'Hola mundo desde Javascript'
    allParrfos[1].style.color = 'green';

    infoSection.classList.add('container', 'mt-5');
    domDiv.classList.add('container', 'my-5', 'rounded-3');


})