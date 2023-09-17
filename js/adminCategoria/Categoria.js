export class Categorias {
  constructor(nombre) {
    this.nombre = nombre;
    this.codigo = self.crypto.randomUUID();
  }
}
