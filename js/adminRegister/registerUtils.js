'use strict'

import { obtenerContactosDeLS, ordenarLista } from "../utilsReg.js";



export const agregarContactoALS = (nuevoContacto) => {
const contactos = ordenarLista(obtenerContactosDeLS());
contactos.push(nuevoContacto);
localStorage.setItem('contactos',JSON.stringify(contactos));
}


export const crearNuevoRegistro = (nuevoContacto) => {
const tdBoton = document.createElement('td');
const btnGuardarReg = document.createElement('boton');

btnGuardarReg.type = 'button';

btnGuardarReg.classList.add('btn', 'btn-sm')

btnGuardarReg.innerText = 'Guardar';

}
