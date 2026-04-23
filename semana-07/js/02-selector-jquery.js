// Detecta que el DOM este cargado
$(function(){
	
    $('#rojo').css({
        background:'red',
        color:'white',
        padding:'10px',
        fontSize:'30px'
    })

    $('#amarillo').css({
        background:'yellow',
        color:'white',
        padding:'10px' 
    })


    $('#verde').css({
        background:'green',
        color:'white',
        padding:'10px' 
    })

    let mi_clase = $('.zebra')
    let parrafo = $('p')

    // Un poco de eventos
    parrafo.on('click', function () {
        console.log('info del this',$(this))
        console.log('CLICK EN PARRAFO')

        let than = $(this);

        if(!than.hasClass('grande')){
            than.addClass('grande')
        }else{
            than.removeClass('grande')
        }
    });


    //Podemos seleccionar por atributo
    $('[title="Google"]').css({
        background:'#ccc',
        color: '#000',
        decoration: 'none',
        display:'block',
        padding: '10px'
    })

    $('[title="Facebook"]').css({
        background:'coral',
        color: '#000',
        decoration: 'none',
        display:'block',
        padding: '10px'
    })


    let busqueda = $('#caja').find('.resaltado').parent().parent().find('[title = "Google"]')
    console.log('busqueda-->', busqueda)

    busqueda.css({
        background:'purple'
    })

 












});