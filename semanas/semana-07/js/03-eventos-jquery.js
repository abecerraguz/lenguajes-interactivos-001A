// Detecta que el DOM este cargado
$(function(){
/* 
   ===========EVENTOS JQUERY====================================

*/
// selecciona la caja
let caja = $('#caja')
// Selecciona el input
let nombre = $('#nombre')
// Selecciona el mensaje
let mensaje= $('.alert-secondary')

function eventOrange(){
   $(this).css({
      background:'orange'
   })
}

function eventPurple(){
   $(this).css({
      background:'purple'
   })
}

caja.hover(eventOrange,eventPurple)


caja.on('click',function(){
   $(this).css({
      background:'pink',
      color:'black',
      border:'5px solid red'
   })
})

nombre.on('focus', function(){
   $(this).css({
      border:'1px solid red',
      'box-shadow':'none'
   })
   mensaje.hide('slow')
   console.log('EN FOCO')
})

nombre.on('blur', function(){
   $(this).css({
      border:'1px solid green'
   })
   console.log('Fuera del foco')
   mensaje.show('fast')
})

mensaje.on('mouseup', function(){
   $(this).css({
      background:'pink',
      color:'black'
   })
})


$(document).mousemove(function(event){
   
   console.log(`EN X : ${event.clientX}`)
   console.log(`EN Y : ${event.clientY}`)

   $('body').css({
      cursor:'none'
   })

   $('.circle').css({
      left:event.clientX,
      top:event.clientY
   })

})







});