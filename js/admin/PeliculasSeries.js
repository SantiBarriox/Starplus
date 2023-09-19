"use strict"

export class PeliculaSeries {
    constructor(nombre, tipo, duracion, caratula, descripcion, publicada){
    this.nombre = nombre;
    this.tipo = tipo;
    this.duracion = duracion;
    this.caratula = caratula;
    this.descripcion = descripcion;
    this. publicada =  publicada;
    this.codigo = self.crypto.randomUUID();
}
}