// selecciono el boton

const botonSalir = document.getElementById("boton-salir")

// motrar u ocultar el boton

const estaLogueado = JSON.parse(sessionStorage.getItem("estaLogueado"));
if(estaLogueado){
    botonSalir.classList.remove("d-none")
}

// agregar accion al boton

botonSalir.addEventListener("click",()=>{
    swal.fire({
        title:"¿Estás seguro?",
        text: "Cerrarás tu sesión",
        confirmButtonText:"Si, salir",
        cancelButtonText:"Cacelar",
        showCancelButton: true,
    }).then((resultado)=>{
        if(resultado.isConfirmed){
            // limpiar el SESSIONSTORAGE
            sessionStorage.removeItem("estaLogueado")
            sessionStorage.removeItem("usuario")
            // redireccionar home
            window.location.href = "/"
        } 
    })
})