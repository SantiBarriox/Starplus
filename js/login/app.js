"use strict";

import { User, UserSinContraseña } from "./User.js";
import { validarContraseña, validarUsuario } from "./validators.js";

// Proteger ruta 
const estaLogueado = JSON.parse(sessionStorage.getItem("estaLogueado"))
if(estaLogueado){

    window.location.href = "./admin.html"
}


//  creo usuario por defeto

const usuarioAdmin = new User("admin", "admin", "admin@gmail");

// seleccionar elementos

const formLogin = document.getElementById("form-login");
const campoUsuario = document.getElementById("input-usuario");
const campoContraseña = document.getElementById("input-contraseña");
const alertCredenciales = document.getElementById("alert-login");

// manejar el submit

formLogin.addEventListener("submit", (e) => {
  // prevengo comportamiento por defecto
  e.preventDefault();
  // leer valores de los campos
  const usuario = campoUsuario.value;
  const contraseña = campoContraseña.value;
  // validar
  if (
    validarUsuario(usuario, campoUsuario) &&
    validarContraseña(contraseña, campoContraseña)
  ) {
    // ocultar la alerta y resetear las clases
    campoUsuario.classList.remove("is-invalid");
    campoContraseña.classList.remove("is-invalid");

    // validamos credenciales
    if (
      usuario === usuarioAdmin.usuario &&
      contraseña === usuarioAdmin.contraseña
    ) {
      // solo aca el login esta ok
      // ocultar alert
      alertCredenciales.classList.add("d-none");

      // crear usuario sin contraseña pguardar
        const usuarioLogueado = new UserSinContraseña(usuario,"admin@gmail.com")
      // guarar estado
      sessionStorage.setItem("estaLogueado", true);
      sessionStorage.setItem("usuario",JSON.stringify(usuarioLogueado))  
      // mensaje de logueo
        swal.fire({
            title:"Bienvenido",
            timer:1500,
            timerProgressBar:true,
            showConfirmButton:false,
        }).then(()=>{
            // redireccion a admin
            window.location.href = "./admin.html"
        })

    } else {
      // credenciales no validas
      alertCredenciales.classList.remove("d-none");
    }
  }
});