"use strict";

import { User, UserSinContraseña } from "./User.js";
import { validarContraseña, validarUsuario } from "./validators.js";


  const estaLogueado = JSON.parse(sessionStorage.getItem("estaLogueado"))
  if(estaLogueado){

      window.location.href = "./pages/home.html"
  }


  const usuarioAdmin = new User("admin", "admin", "admin@gmail");


  const formLogin = document.getElementById("form-login");
  const campoUsuario = document.getElementById("input-usuario");
  const campoContraseña = document.getElementById("input-contraseña");
  const alertCredenciales = document.getElementById("alert-login");



  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = campoUsuario.value;
    const contraseña = campoContraseña.value;
    if (
      validarUsuario(usuario, campoUsuario) &&
      validarContraseña(contraseña, campoContraseña)
    ) {
      campoUsuario.classList.remove("is-invalid");
      campoContraseña.classList.remove("is-invalid");

      if (
        usuario === usuarioAdmin.usuario &&
        contraseña === usuarioAdmin.contraseña
      ) {
        alertCredenciales.classList.add("d-none");

          const usuarioLogueado = new UserSinContraseña(usuario,"admin@gmail.com")
        sessionStorage.setItem("estaLogueado", true);
        sessionStorage.setItem("usuario",JSON.stringify(usuarioLogueado))  
          swal.fire({
              title:"Bienvenido",
              timer:1500,
              timerProgressBar:true,
              showConfirmButton:false,
          }).then(()=>{
              window.location.href = "./home.html"
          })

      } else {
        alertCredenciales.classList.remove("d-none");
      }
    }
  });