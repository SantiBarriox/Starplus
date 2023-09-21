'use strict'

import { añadirContacto } from "./abmReg.js";
import { validarContrasenia, validarEmail, validarNombre } from "./validatorsReg.js";


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


if (validarNombre(nombre,campoNombre) && validarContrasenia(contrasenia,campoContrasenia) && validarEmail(email,campoEmail)){

    añadirContacto(nombre,contrasenia,email);

    campoNombre.classList.remove('is-valid','is-invalid');
    campoContrasenia.classList.remove('is-valid','is-invalid');
    campoEmail.classList.remove('is-valid','is-invalid');
}

form.reset();

});