'use strict'

import { obtenerContactosDeLS } from "../utilsReg.js";
import { Contacto } from "./ContactoReg.js";
import { agregarContactoALS, cargarTabla } from "./registerUtils.js";


export const añadirContacto = (nombre,contrasenia,email) => {
const nuevoContacto = new Contacto(nombre,contrasenia,email);
agregarContactoALS(nuevoContacto);

swal.fire({
    title: 'Éxito',
    text: 'Contacto, agregado exitosamente',
    icon: 'success',

});
}

export const editarContacto = (nombre,contrasenia,email) => {
const codigo = sessionStorage.getItem('codigoContacto');
const contactos = obtenerContactosDeLS();

if (!codigo){
    swal.fire({
        title: 'Error',
        text: 'No se encontró el usuario',
        icon: 'error',
    });
    return;
}

const posicionContacto = contactos.findIndex((item) => item.codigo === codigo);

if (posicionContacto === -1){
    swal.fire({
        title: 'Error',
        text: 'No se encontró el usuario',
        icon: 'error',
    });
    return;
}

const contactoEditado = new Contacto (nombre,contrasenia,email);

contactos.splice(posicionContacto,1,contactoEditado);

localStorage.setItem('contactos',JSON.stringify(contactos));

swal.fire({
    title: 'Éxito',
    text: 'El contacto se ha modificado con éxito',
    icon: 'success',
});

sessionStorage.removeItem('codigoContacto');
}


export const eliminarContacto = (codigo) => {
    swal.fire({
        title: '¿Está seguro?',
        text: 'Esta opción no será reversible',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, eliminar',

    }) .then((accion) => {
        if (accion.isConfirmed){
        const contactos = obtenerContactosDeLS();
        const listaFiltrada = contactos.filter((item) => 
            item.codigo !== codigo
        );

        localStorage.setItem('contactos',JSON.stringify(listaFiltrada));
        swal.fire({
            title: 'Éxito',
            text: 'El contacto se ha eliminado con éxito',
            icon: 'success',
        });

        cargarTabla()
        }
    });
}