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