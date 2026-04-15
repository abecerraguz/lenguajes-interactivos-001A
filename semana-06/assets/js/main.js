window.addEventListener('DOMContentLoaded', function () {

  // ─── Selección de elementos del DOM ──────────────────────────────────
  const iniciarModalComentario = document.querySelector('#buttonModalComentarios');
  const modalComentarios       = new bootstrap.Modal(document.getElementById('modalComentarios'));
  const alerta                 = document.querySelector('#alerta');
  const formulario             = document.querySelector('#formulario');
  const chat                   = document.querySelector('#chat');
  const numComentario          = document.querySelector('.chat__comentarios');

  // ─── Datos ───────────────────────────────────────────────────────────
  // Array donde se guardan todos los comentarios
  const arrComentarios = [];

  // Pool de avatares para asignar uno distinto a cada usuario
  const avatares = [
    'https://randomuser.me/api/portraits/women/55.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/76.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
  ];

  // ─── Abrir modal ─────────────────────────────────────────────────────
  iniciarModalComentario.addEventListener('click', function (e) {
    e.preventDefault();
    modalComentarios.show();
  });

  // ─── Envío del formulario ────────────────────────────────────────────
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const infoTextArea = document.querySelector('#infoTextArea');
    const infoUser     = document.querySelector('#user');

    // Validación: el comentario no puede estar vacío
    if (infoTextArea.value.trim().length === 0) {
      alerta.style.color   = 'red';
      alerta.style.display = 'block';
      alerta.innerHTML     = '* Debe ingresar un comentario';
      return; // salimos sin continuar
    }

    // Ocultamos alerta y cerramos modal
    alerta.style.display = 'none';
    modalComentarios.hide();

    // Creamos el objeto comentario con todos sus datos
    const objUser = {
      usuario:    infoUser.value.trim() || 'Anónimo',
      comentario: infoTextArea.value.trim(),
      fecha:      new Date(),                                        // guardamos la fecha real
      avatar:     avatares[Math.floor(Math.random() * avatares.length)], // avatar al azar
      likes:      0,
      dislikes:   0,
    };

    // Agregamos al array y limpiamos el formulario
    arrComentarios.push(objUser);
    this.reset();

    // Actualizamos la interfaz
    actualizarContador();
    renderizarComentarios();
  });

  // ─── Función: actualiza el contador de comentarios ───────────────────
  function actualizarContador() {
    const total = arrComentarios.length;
    numComentario.innerHTML = total === 1 ? '1 Comentario' : `${total} Comentarios`;
  }

  // ─── Función: convierte una fecha en texto relativo ──────────────────
  function tiempoRelativo(fecha) {
    const diff = Math.floor((new Date() - fecha) / 1000); // diferencia en segundos
    if (diff < 60)    return 'Hace un momento';
    if (diff < 3600)  return `Hace ${Math.floor(diff / 60)} min`;
    if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} h`;
    return `Hace ${Math.floor(diff / 86400)} días`;
  }

  // ─── Función: genera el HTML de una tarjeta de comentario ────────────
  function crearTarjetaComentario(obj) {
    return `
      <div class="chat__body-contenedorPadre">

        <!-- Avatar del usuario -->
        <div class="chat__body-avatarPadre">
          <img src="${obj.avatar}" alt="${obj.usuario}">
        </div>

        <!-- Contenido del comentario -->
        <div class="chat__body-contentCometarioPadre">
          <p class="chat__body-contentCometarioPadre-text">
            <span class="chat__body-contentCometarioPadre-text-name">${obj.usuario}</span>
            ${obj.comentario}
          </p>
          <div class="chat__body-contentCometarioPadre-like">
            <small>
              <img src="./assets/img/like.svg" alt="like">
              <span class="textNum">(${obj.likes})</span>
            </small>
            <small>
              <img src="./assets/img/no-like.svg" alt="no-like">
              <span class="textNum">(${obj.dislikes})</span>
            </small>
            <small class="textTime">${tiempoRelativo(obj.fecha)}</small>
          </div>
        </div>

      </div>`;
  }

  // ─── Función: renderiza los comentarios en pantalla ──────────────────
  function renderizarComentarios() {
    // Eliminamos el botón "Mostrar más" si ya existía (evita duplicados)
    const btnExistente = document.querySelector('#showComment');
    if (btnExistente) btnExistente.remove();

    if (arrComentarios.length === 0) {
      chat.innerHTML = '';
      return;
    }

    // Mostramos siempre el primer comentario
    chat.innerHTML = crearTarjetaComentario(arrComentarios[0]);

    // Si hay más de uno, agregamos el botón "Mostrar todos"
    if (arrComentarios.length > 1) {
      const button = document.createElement('button');
      button.classList.add('buttonMostrarMas');
      button.setAttribute('id', 'showComment');
      button.innerHTML = `Mostrar todos los comentarios (${arrComentarios.length})`;
      chat.after(button);

      button.addEventListener('click', function (e) {
        e.preventDefault();
        // Usamos .map() para generar el HTML de TODOS los comentarios de una vez
        // y .join('') para unirlos en un solo string → una sola escritura al DOM
        chat.innerHTML = arrComentarios
          .map(function (comentario) {
            return crearTarjetaComentario(comentario);
          })
          .join('');
        button.remove();
      });
    }
  }

});
