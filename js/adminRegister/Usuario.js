'use strict'

export class Usuario{
    constructor(nombre,contrasenia,email){
        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.email = email;
        this.codigo = self.crypto.randomUUID();
    }
}