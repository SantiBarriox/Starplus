'use strict'

import { Usuario, UsuarioSinContra } from "./User.js"
import { validarContrasenia, validarUsuario, } from "./validators.js";


const usuarioAdmin = new Usuario('admin','admin','admin@gmail.com');
const formLogin = document.getElementById('form-login');
const campoUsuario = document.getElementById('input-usuario');
const campoContrasenia = document.getElementById('input-contrasenia');
const alertaCredenciales = document.getElementById('alert-login');

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = campoUsuario.value;
    const contrasenia = campoContrasenia.value;

    if (validarUsuario(usuario, campoUsuario) && validarContrasenia(contrasenia, campoContrasenia)){
        campoUsuario.classList.remove('is-valid');
        campoContrasenia.classList.remove('is-valid');
        
        if (usuario === usuarioAdmin.usuario && contrasenia === usuarioAdmin.contrasenia){
            alertaCredenciales.classList.add('d-none');

            const usuarioLogueado = new UsuarioSinContra(usuario,'admin@gmail.com');

            sessionStorage.setItem('estaLogueado',true);
            sessionStorage.setItem('usuario',JSON.stringify(usuarioLogueado));

            swal.fire({
                title: 'Bienvenido 🤗',
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
                icon: 'success',
            }) 
            .then (() => {
                window.location.href = './admin.html' //cambiar a pagina de admin
            })
        } else {
            alertaCredenciales.classList.remove('d-none');
        }
    }
})