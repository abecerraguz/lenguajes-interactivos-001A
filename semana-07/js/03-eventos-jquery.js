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

// ACTUALIZACIÓN jQuery 4.0: .hover(fn1, fn2) fue eliminado.
// Reemplazado por .on('mouseenter', fn1).on('mouseleave', fn2)
caja.on('mouseenter', eventOrange).on('mouseleave', eventPurple)


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


// ACTUALIZACIÓN jQuery 4.0: $(document).mousemove(fn) fue eliminado.
// Los métodos abreviados de eventos (.mousemove, .click, .change, etc.) se eliminaron.
// Usar siempre .on('evento', fn) en su lugar.
$(document).on('mousemove', function(event){
   
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