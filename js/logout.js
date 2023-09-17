'use strict'

const botonSalir = document.getElementById('boton-salir');
const estaLogueado = JSON.parse(sessionStorage.getItem('estaLogueado'));
if (estaLogueado) {
    botonSalir.classList.remove('d-none');
}

botonSalir.addEventListener('click', (e) => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Cerrarás tu sesión!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar',
      })
      .then((resultado) => {
        if (resultado.isConfirmed){
            sessionStorage.removeItem('estaLogueado');
            sessionStorage.removeItem('usuario');

            window.location.href = '../pages/login.html';

}
})
})