export class Producto {
  // id_producto, nombre, porcentaje_ganancia, precio, cantidad, id_categoria
  id: number;
  nombre: string;
  porcentaje: number;
  precio: number;
  cantidad: number;
  // tslint:disable-next-line:variable-name
  id_categoria: number;
  categoria: string;


  constructor() {
    this.id = 0;
    this.nombre = '';
    this.porcentaje = 0;
    this.precio = 0;
    this.cantidad = 0;
    this.id_categoria = 0;
    this.categoria = '';
  }
}
