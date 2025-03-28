function mostrarVentanas() {

    const ventanas = document.querySelectorAll('.ventana');

    ventanas.forEach( ventana => {
       
        const ventanaPos = ventana.getBoundingClientRect().top;
        console.log('Salida de ventanaPos-->', ventanaPos )
        const alturaPantalla = window.innerHeight * 0.8; 
        console.log('Salida de alturaPantalla -->', alturaPantalla )
        if (ventanaPos < alturaPantalla) {
            ventana.classList.add('visible');
        } else {
            ventana.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', mostrarVentanas);
mostrarVentanas(); // Para que se activen si están en pantalla al cargar


