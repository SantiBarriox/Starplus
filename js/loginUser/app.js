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
                title: 'BIENVENIDO A STAR+',
                text: 'Disfruta de nuestra programación',
                imageUrl: '../assets/star+Fondo.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'star+ image',
                timer: 1800,
                timerProgressBar: true,
                showConfirmButton: false,
                background: '#f9f9f9',
                backdrop: `
                  url("../assets/mario.gif")
                  no-repeat
                `
            }) 
            .then (() => {
                window.location.href = './admin.html'
            })
        } else {
            alertaCredenciales.classList.remove('d-none');
        }
    }
})