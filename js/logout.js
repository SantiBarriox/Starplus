'use strict'

const botonSalir = document.getElementById("boton-salir")


const estaLogueado = JSON.parse(sessionStorage.getItem("estaLogueado"));
if(estaLogueado){
    botonSalir.classList.remove("d-none")
}


botonSalir.addEventListener("click",()=>{
    swal.fire({
        title:"¿Estás seguro?",
        text: "Cerrarás tu sesión",
        confirmButtonText:"Sí, salir",
        cancelButtonText:"Cancelar",
        showCancelButton: true,
    }).then((resultado)=>{ 
        if(resultado.isConfirmed){

            sessionStorage.removeItem("estaLogueado")
            sessionStorage.removeItem("usuario")

            window.location.href = "../index.html"
        } 
    })
})