'use strict'

export const validarNombre = (valor,campoNombre) => {
    if(valor.trim().length <= 2 || valor.trim().length >= 100) {
        campoNombre.classList.add("is-invalid");
        campoNombre.classList.remove("is-valid");
        return false;
    }
    campoNombre.classList.remove("is-invalid");
    campoNombre.classList.add("is-valid");
    return true;
};

export const validartipo = (valor,campoTipo) =>{
    if(valor.trim().length <= 2 || valor.trim().length >= 100) {
        campoTipo.classList.remove("is-valid");
    campoTipo.classList.add("is-invalid");
        return false;
    }
    campoTipo.classList.remove("is-invalid")
    campoTipo.classList.add("is-valid")
    return true;
}
export const validarDuracion = (valor,campoDuracion) =>{
    if(valor.trim().length <= 2 || valor.trim().length >= 100) {
        campoDuracion.classList.remove("is-valid");
    campoDuracion.classList.add("is-invalid");
        return false;
    }
    campoDuracion.classList.remove("is-invalid")
    campoDuracion.classList.add("is-valid")
    return true;
}


export const validarCaratula = (valor,campoCaratula) =>{
    if(valor.trim().length <= 4 || valor.trim().length >= 500) {
        campoCaratula.classList.remove("is-valid");
    campoCaratula.classList.add("is-invalid");
        return false;
}
const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

if (!regex.test(valor)){
    campoCaratula.classList.remove("is-valid");
    campoCaratula.classList.add("is-invalid");

    return false;
}
campoCaratula.classList.remove("is-invalid")
campoCaratula.classList.add("is-valid")
return true;
}


export const validarPublicada = (valor, campoPublicada) =>{
    if(valor.trim().length !== 2) {
        campoPublicada.classList.remove("is-valid");
        campoPublicada.classList.add("is-invalid");
        return false;
    }

    campoPublicada.classList.remove("is-invalid")
campoPublicada.classList.add("is-valid")
    return true;
}


export const validarDescripcion = (valor,campoDescripcion) => {
    if(valor.trim().length <= 2 || valor.trim().length >= 100) {
        campoDescripcion.classList.remove("is-valid");
        campoDescripcion.classList.add("is-invalid");
        return false;
    }
    campoDescripcion.classList.remove("is-invalid")
    campoDescripcion.classList.add("is-valid")
    return true;
};
