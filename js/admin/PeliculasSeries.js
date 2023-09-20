"use strict"

export class PeliculaSeries {
    constructor(nombre, tipo, duracion, caratula, descripcion, publicada,categoria){
    this.nombre = nombre;
    this.tipo = tipo;
    this.duracion = duracion;
    this.caratula = caratula;
    this.descripcion = descripcion;
    this. publicada =  publicada;
    this.categoria = categoria;
    this.codigo = self.crypto.randomUUID();
}
}