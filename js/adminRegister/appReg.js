'use strict'

// import { validarContrasenia } from "./validatorsReg";

// import { añadirContacto, editarContacto } from './abm.js';
// import { cargarTabla, estaEditando } from './adminUtils.js';
// import {
//     validarNombre,
//     validarCelular,
//     validarEmail,
//     validarImagen,
// } from './validators.js';


const estaLogueado = JSON.parse(sessionStorage.getItem('estaLogueado'));
if (!estaLogueado){
    window.location.href = '../pages/login.html';
}

cargarTabla();

const form = document.getElementById('form-contacto');
const campoNombre = document.getElementById('input-nombre');
const campoContrasenia = document.getElementById('input-contrasenia');
const campoEmail = document.getElementById('input-email');


campoNombre.addEventListener("blur",(e)=>{
const valueInput = e.target.value;

validarNombre(valueInput,campoNombre);

});

campoContrasenia.addEventListener("blur",(e)=>{
const valueInput = e.target.value;

validarContrasenia(valueInput,campoContrasenia);

});

campoEmail.addEventListener("blur",(e)=>{
const valueInput = e.target.value;

validarEmail(valueInput,campoEmail);

});


form.addEventListener("submit",(e)=>{
e.preventDefault();

const nombre = campoNombre.value;
const contrasenia = campoContrasenia.value;
const email = campoEmail.value;


if (validarNombre(nombre,campoNombre) && validarCelular(contrasenia,campoContrasenia) && validarEmail(email,campoEmail)){

    if (estaEditando()){
        editarContacto(nombre,contrasenia,email);
    } else {
        añadirContacto(nombre,contrasenia,email);
    }

    cargarTabla();
    
    form.reset();

    campoNombre.classList.remove('is-valid','is-invalid');
    campoContrasenia.classList.remove('is-valid','is-invalid');
    campoEmail.classList.remove('is-valid','is-invalid');
}
});