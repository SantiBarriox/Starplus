"use strict";


export const validarUsuario = (value, campo) => {
  if (value.trim().length < 4) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  if (value.trim().length > 20) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

export const validarContraseña = (value, campo) => {
  if (value.trim().length < 4) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  if (value.trim().length > 20) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};