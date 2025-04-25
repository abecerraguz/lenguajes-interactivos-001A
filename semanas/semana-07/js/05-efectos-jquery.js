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


animarcaja.click(function(){
   cajaAnimar.animate({
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