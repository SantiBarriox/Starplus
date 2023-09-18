'use strict'

export const validarNombre = (value,campo) => {
    if (value.trim().length < 3){
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
        return false;
    } if (value.trim().length >= 100){
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
        return false;
    }
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
        return true;
    }

    export const validarContrasenia = (value,campo) => {
    if (value.trim().length < 3){
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
        return false;
    }
    
    if (isNaN(Number(value))){
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
        return false;
    }
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
        return true;
    }
    
    export const validarEmail = (value,campo) => {
    if (value.trim().length < 4){
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
        return false;
    }
    if (value.trim().length > 100){
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
        return false;
    }
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (!regex.test(value)){
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
        return false;
    }
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
        return true;
    } 
    