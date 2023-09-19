'use strict'

import { Contacto } from "./ContactoReg.js";
import { agregarContactoALS } from "./registerUtils.js";


export const añadirContacto = (nombre,contrasenia,email) => {
const nuevoContacto = new Contacto(nombre,contrasenia,email);
agregarContactoALS(nuevoContacto);

swal.fire({
    title: 'Éxito',
    text: 'Contacto, agregado exitosamente',
    icon: 'success',

});
}
