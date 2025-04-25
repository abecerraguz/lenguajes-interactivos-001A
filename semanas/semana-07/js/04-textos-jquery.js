// Detecta que el DOM este cargado
$(function(){

/* 
   ===========TEXTOS JQUERY====================================
   Queremos tomar los datos de los href de los enlaces y luego meterlos dentro del enlace
   como textos.
*/

/*

 Podemos seleccionar todos los enlaces
 y recorrerlos con un each() esta tiene una función de callback.

*/

cargarEnlaces()

$('#addEnlace').on('click',function(){
   if( $('#nombreEnlace').val().length > 1  ){
      let dato = $('#nombreEnlace').val()
      console.log('Salida de dato',dato)

      /*
         innerHTML / JavaScript
         html /jq
         append 
         prepend
         before
         after
      */

      $('#menu').append(`<li><a href="${dato}">${dato}</a></li>`)
      $('#nombreEnlace').val('')
   }else{
      alert('No cumple')
   }
})


function cargarEnlaces(){

   $('#nombreEnlace').attr({
      placeholder:'Ingrese una URLLLLL'
   })

   $('a').each(function( index, element ){
      const textoLink = $(element).attr('href')
      let that = $(this)
      that.text(textoLink)
      that.attr('taget', '_blank')
   })

}
   
});