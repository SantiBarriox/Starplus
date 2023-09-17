'use strict'

export class Usuario {
    constructor(usuario,contrasenia,email){
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.email = email;
    }
}

export class UsuarioSinContra {
    constructor(usuario,email){
        this.usuario = usuario;
        this.email = email;
    }
}