"use strict"

export class User {
    constructor(usuario,contraseña,email){
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.email = email;
    }
}

export class UserSinContraseña {
    constructor(usuario,email){
        this.usuario = usuario;
        this.email = email;
    }
}