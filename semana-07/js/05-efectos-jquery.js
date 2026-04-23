// Detecta que el DOM este cargado
$(function(){

/* 
   ===========EFECTOS JQUERY====================================
	Uso de show() hide() fadeIn() fadeOut() fadeTo()
*/

let mostrarOcultar = $('#mostrarOcultar')
let cajaCard = $('#cajaCard')
let cajaAnimar = $('#cajaAnimar') 
let animarcaja = $('#animarCaja')

// Ocultamos cajaCard al cargar la página para que el botón "Mostrar" tenga sentido desde el inicio
cajaCard.hide()
   
mostrarOcultar.on('click', function(){

   cajaCard.slideToggle();

   let that = $(this);
   if(that.hasClass('ocultar')){
      that.text('Ocultar')
      that.removeClass('ocultar')
   }else{
      that.text('Mostrar')
      that.addClass('ocultar')
   }
})


// ACTUALIZACIÓN jQuery 4.0: .click(fn) fue eliminado como método abreviado.
// Reemplazado por .on('click', fn)
animarcaja.on('click', function(){
   // stop(true, true): detiene todas las animaciones en cola antes de iniciar una nueva.
   // Primer true  → limpia la cola de animaciones pendientes (clearQueue)
   // Segundo true → salta al estado final de la animación actual (jumpToEnd)
   // Sin esto, cada click adicional se acumula en el event loop y la animación
   // se repite tantas veces como clicks se hayan hecho.
   cajaAnimar.stop(true, true).animate({
      marginLeft:'500px'
   }, 'slow',function(){
      console.log('Animacion completa 1')
   })
   .animate({
      marginTop:'100px'
   },'fast',function(){
      console.log('Animacion completa 2')
   })
   .animate({
      marginLeft:'0',
      marginTop:'100px'
   },'fast',function(){
      console.log('Animacion completa 3')
   })
   .animate({
      marginTop:'100px'
   },'fast',function(){
      console.log('Animacion completa 3')
   })
})

});