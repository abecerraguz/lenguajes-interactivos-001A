window.addEventListener('DOMContentLoaded',function(){

  // Seleccionamos button que ejecuta Modal
  let iniciarModalComentario = document.querySelector('#buttonModalComentarios'),
  
  // Seleccionamos modal de los comentarios
  modalComentarios = new bootstrap.Modal(document.getElementById('modalComentarios')),
  // alerta del form
  alerta = document.querySelector('#alerta'),
  // id del formulario
  formulario = document.querySelector('#formulario'),
  // Id del chat
  chat = document.querySelector('#chat'),
  // la clase numero de cometarios
  numComentario = document.querySelector('.chat__comentarios')

  // Array de los comentarios
  const arrComentarios = []

  // hacemos click en el button Hacer comentario
  iniciarModalComentario.addEventListener('click', function(e){
    e.preventDefault();
    modalComentarios.show();
  })

  // Hacemos click en el submit del formulario
  formulario.addEventListener('submit', function(e){

    e.preventDefault();
    
    let infoTextArea = document.querySelector('#infoTextArea'),
    infoUser = document.querySelector('#user');


    if(infoTextArea.value.length == 0){
      alerta.style.color = "red";
      alerta.style.display= "block";
      alerta.innerHTML = '* Debe ingresar un comentario';
    }else{
      alerta.style.display= "none";
      modalComentarios.hide();
  
      let objUser = {
        usuario : infoUser.value,
        comentario : infoTextArea.value 
      }

      arrComentarios.push( objUser );
      this.reset();
      mostrarPrimerCometario( arrComentarios )
      mostrarOcultarButton();
      arrComentarios.length > 0 ? numComentario.innerHTML = `${arrComentarios.length} Comentarios` : numComentario.innerHTML = `0 Comentarios`;
      console.log(arrComentarios)

    }


    function mostrarPrimerCometario( arr ){
        console.log('Salida de arr-->', arr[0])
        chat.innerHTML = `<div class="chat__body-contenedorPadre">
    
        <!-- Inicio Avatar Padre -->
        <div class="chat__body-avatarPadre">
          <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Autor">
        </div>
        <!-- Cierre Avatar Padre -->
    
        <!-- Inicio cometario Padre -->
        <div class="chat__body-contentCometarioPadre">
          <p class="chat__body-contentCometarioPadre-text">
            <span class="chat__body-contentCometarioPadre-text-name">${arr[0].usuario}</span>
            ${arr[0].comentario}
            </p>
          <div class="chat__body-contentCometarioPadre-like">
            <small>
              <img src="./assets/img/like.svg" alt="like"><span class="textNum">(10)</span>
            </small>
            <small>
              <img src="./assets/img/no-like.svg" alt="not-like"><span class="textNum">(2)</span>
            </small>
            <small class="textTime">Hace 4 horas</small>
          </div>
        </div>
        <!-- Cierre cometario Padre -->
      </div>`
    }

    function mostrarOcultarButton(){

      if(arrComentarios.length > 1 ){

          let button = document.createElement('button');
          button.classList.add('buttonMostrarMas');
          button.setAttribute('id', 'showComment');
          button.innerHTML = 'Mostrar todos los comentarios';
          chat.after(button);

          button.addEventListener('click', function(e){
              e.preventDefault();
              let arrSinElPrimerComentario = arrComentarios.slice(1);



              arrSinElPrimerComentario.forEach(function( element ){
                  console.log(element)
                  chat.innerHTML += `<div class="chat__body-contenedorPadre">
    
                  <!-- Inicio Avatar Padre -->
                  <div class="chat__body-avatarPadre">
                    <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Autor">
                  </div>
                  <!-- Cierre Avatar Padre -->
              
                  <!-- Inicio cometario Padre -->
                  <div class="chat__body-contentCometarioPadre">
                    <p class="chat__body-contentCometarioPadre-text">
                      <span class="chat__body-contentCometarioPadre-text-name">${element.usuario}</span>
                      ${element.comentario}
                      </p>
                    <div class="chat__body-contentCometarioPadre-like">
                      <small>
                        <img src="./src/public/like.svg" alt="like"><span class="textNum">(10)</span>
                      </small>
                      <small>
                        <img src="./src/public/no-like.svg" alt="not-like"><span class="textNum">(2)</span>
                      </small>
                      <small class="textTime">Hace 4 horas</small>
                    </div>
                  </div>
                  <!-- Cierre cometario Padre -->
                </div>`
                button.remove();
              })
          })

      }
    }
 

  })

})
