'use strict'

// import { obtenerContactosDeLS, ordenarLista } from "../utils.js";
// import { eliminarContacto } from "./abm.js";

export const agregarContactoALS = (nuevoContacto) => {
const contactos = ordenarLista(obtenerContactosDeLS());
contactos.push(nuevoContacto);
localStorage.setItem('contactos',JSON.stringify(contactos));
}

export const crearFilaTabla = (contacto, indice) => {
const tbody = document.getElementById('tbody-contactos');
const tr = document.createElement('tr');

// Índice
const tdIndice = document.createElement('td');
tdIndice.innerText = indice + 1;
tr.appendChild(tdIndice);

// Imagen
const tdImagen = document.createElement('td');
const img = document.createElement('img');
img.src = contacto.imagen;
img.alt = contacto.nombre;
img.classList.add('imagen-tabla');
tdImagen.appendChild(img);
tr.appendChild(tdImagen);

// Nombre
const tdNombre = document.createElement('td');
tdNombre.innerText = contacto.nombre;
tr.appendChild(tdNombre);

// Celular
const tdCelular = document.createElement('td');
tdCelular.innerText = contacto.celular;
tr.appendChild(tdCelular);

// Correo electrónico
const tdEmail = document.createElement('td');
tdEmail.innerText = contacto.email;
tr.appendChild(tdEmail);

// Notas
const tdNotas = document.createElement('td');
tdNotas.innerText = contacto.notas;
tr.appendChild(tdNotas);

// Botones
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

// Añadir todo al tbody
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
const campoCelular = document.getElementById('input-celular');
const campoEmail = document.getElementById('input-email');
const campoImagen = document.getElementById('input-imagen');
const campoNotas = document.getElementById('input-notas');

campoNombre.value = contactoSeleccionado.nombre;
campoCelular.value = contactoSeleccionado.celular;
campoEmail.value = contactoSeleccionado.email;
campoImagen.value = contactoSeleccionado.imagen;
campoNotas.value = contactoSeleccionado.notas;

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