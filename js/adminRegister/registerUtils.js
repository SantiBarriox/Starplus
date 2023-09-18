'use strict'

import { obtenerContactosDeLS, ordenarLista } from "../utilsReg.js";
import { eliminarContacto } from "./abmReg.js";


export const agregarContactoALS = (nuevoContacto) => {
const contactos = ordenarLista(obtenerContactosDeLS());
contactos.push(nuevoContacto);
localStorage.setItem('contactos',JSON.stringify(contactos));
}

export const crearFilaTabla = (contacto, indice) => {
const tbody = document.getElementById('tbody-contactos');
const tr = document.createElement('tr');


const tdIndice = document.createElement('td');
tdIndice.innerText = indice + 1;
tr.appendChild(tdIndice);


const tdNombre = document.createElement('td');
tdNombre.innerText = contacto.nombre;
tr.appendChild(tdNombre);

const tdContrasenia = document.createElement('td');
tdContrasenia.innerText = contacto.contrasenia;
tr.appendChild(tdContrasenia);

const tdEmail = document.createElement('td');
tdEmail.innerText = contacto.email;
tr.appendChild(tdEmail);


const tdBotones = document.createElement('td');
const btnEditar = document.createElement('boton');
const btnEliminar = document.createElement('boton');

btnEditar.type = 'button';
btnEliminar.type = 'button';

btnEditar.classList.add('btn', 'btn-warning', 'btn-sm', 'me-3')
btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm')

btnEditar.innerText = 'Editar';
btnEliminar.innerText = 'Eliminar';


btnEditar.onclick = () => {
prepararEdicionContacto(contacto.codigo)
}
btnEliminar.onclick = () => {
    eliminarContacto(contacto.codigo);
}

tdBotones.appendChild(btnEditar);
tdBotones.appendChild(btnEliminar);

tr.appendChild(tdBotones);


tbody.appendChild(tr);
}

export const cargarTabla = () => {
const contactos = ordenarLista(obtenerContactosDeLS());
const tbody = document.getElementById('tbody-contactos');
tbody.innerHTML= '';

contactos.forEach((contacto, indice) => {
crearFilaTabla(contacto, indice);
})
}

const prepararEdicionContacto = (codigo) =>{
const contactos = obtenerContactosDeLS();
const contactoSeleccionado = contactos.find((item) => {
return item.codigo === codigo;
})

const campoNombre = document.getElementById('input-nombre');
const campoContrasenia = document.getElementById('input-contrasenia');
const campoEmail = document.getElementById('input-email');

campoNombre.value = contactoSeleccionado.nombre;
campoContrasenia.value = contactoSeleccionado.contrasenia;
campoEmail.value = contactoSeleccionado.email;

sessionStorage.setItem('codigoContacto',codigo);
}

export const estaEditando = () => {
const codigo = sessionStorage.getItem('codigoContacto');

if (codigo === null) { 
return false;
} else {
return true;
}
}