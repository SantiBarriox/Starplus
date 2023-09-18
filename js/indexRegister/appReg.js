// 'use strict'

// import { obtenerContactosDeLS } from "../utilsReg.js";

// const seccionDestinatario = document.getElementById('select-contactos');


// const contactos = obtenerContactosDeLS();
// const seccionContactos = document.getElementById('seccion-contactos');
// const alerta = document.getElementById('alertaResultado')


// export const crearTarjetaDeContactos = (contacto) => {
// const seccionContactos = document.getElementById('seccion-contactos');
    
// //creamos la tarjeta
// const tarjetaDeContactos = document.createElement('div');
// tarjetaDeContactos.classList = 'col mb-5 w-25 card text-center mx-2';

// const tarjetaImagen = document.createElement('img');
// tarjetaImagen.classList = 'card-img-top';
// tarjetaImagen.src = contacto.imagen;
// tarjetaImagen.alt = contacto.nombre;
// tarjetaDeContactos.appendChild(tarjetaImagen);

// const tarjetaNombre = document.createElement('h4');
// tarjetaNombre.classList = 'mt-2';
// tarjetaNombre.innerText = contacto.nombre;
// tarjetaDeContactos.appendChild(tarjetaNombre);

// const tarjetaEmail = document.createElement('p');
// tarjetaEmail.classList = 'fw-bolder';
// tarjetaEmail.innerText = contacto.email;
// tarjetaDeContactos.appendChild(tarjetaEmail);

// const tarjetaCelular = document.createElement('p');
// tarjetaCelular.classList = 'fw-bolder';
// tarjetaCelular.innerText = contacto.celular;
// tarjetaDeContactos.appendChild(tarjetaCelular);

// seccionContactos.appendChild(tarjetaDeContactos);
// }

// contactos.forEach(elemento => {
// crearTarjetaDeContactos(elemento);
// });

// const buscarContactos = document.getElementById('input-busqueda-contactos')

// buscarContactos.addEventListener('input',()=>{
// const nombreValor = buscarContactos.value.toLowerCase();
// const nombresEncontrados = contactos.filter((item) => {
//         return item.nombre.toLowerCase().includes(nombreValor);
//     });

// seccionContactos.innerHTML = ""

// nombresEncontrados.forEach(contactoEncontrado => {
// crearTarjetaDeContactos(contactoEncontrado);
//  });
// })