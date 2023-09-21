'use strict'

export const validarNombre = (value,campoNombre) => {
    if (value.trim().length < 3){
    campoNombre.classList.add('is-invalid');
    campoNombre.classList.remove('is-valid');
        return false;
    } if (value.trim().length >= 100){
    campoNombre.classList.add('is-invalid');
    campoNombre.classList.remove('is-valid');
        return false;
    }
    campoNombre.classList.remove('is-invalid');
    campoNombre.classList.add('is-valid');
        return true;
    }

    export const validarContrasenia = (value,campoContrasenia) => {
    if (value.trim().length < 3){
    campoContrasenia.classList.add('is-invalid');
    campoContrasenia.classList.remove('is-valid');
        return false;
    }
    
    if (isNaN(Number(value))){
    campoContrasenia.classList.add('is-invalid');
    campoContrasenia.classList.remove('is-valid');
        return false;
    }
    campoContrasenia.classList.remove('is-invalid');
    campoContrasenia.classList.add('is-valid');
        return true;
    }
    
    export const validarEmail = (value,campoEmail) => {
    if (value.trim().length < 4){
    campoEmail.classList.add('is-invalid');
    campoEmail.classList.remove('is-valid');
        return false;
    }
    if (value.trim().length > 100){
    campoEmail.classList.add('is-invalid');
    campoEmail.classList.remove('is-valid');
        return false;
    }
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (!regex.test(value)){
    campoEmail.classList.add('is-invalid');
    campoEmail.classList.remove('is-valid');
        return false;
    }
    campoEmail.classList.remove('is-invalid');
    campoEmail.classList.add('is-valid');
        return true;
    } 