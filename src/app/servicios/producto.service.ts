import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UsuarioService} from './usuario.service';
import {Producto} from '../modelos/producto';
import {CategoriaService} from './categoria.service';
import {ListarComponent} from '../componentes/producto/listar/listar.component';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private httpOpciones: any;
  private producto: Producto = new Producto();
  private productos: Producto[] = [];
  private listar: ListarComponent;

  resultado: boolean;

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private categoriaService: CategoriaService
  ) {
    this.resultado = false;
  }


  /*
  https://localhost:3000/producto/productos
https://localhost:3000/producto/porId
https://localhost:3000/producto/agregar
https://localhost:3000/producto/actualizar
https://localhost:3000/producto/eliminar
   */

  getProductos() {
    this.productos = [];
    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.usuarioService.getAutenticacion()
      })
    };
    this.http.post(environment.apiUrl + '/producto/productos', {}, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          console.log(data.mensaje);
        } else {
          data.datos.forEach(prod => {
            if (this.categoriaService.getCategoria(prod.Categoria) !== ' ') {
              this.producto = new Producto();
              this.producto.id = Number(prod.Id);
              this.producto.nombre = prod.Nombre;
              this.producto.porcentaje = Number(prod.Porcentaje);
              this.producto.precio = Number(prod.Precio);
              this.producto.cantidad = Number(prod.Cantidad);
              this.producto.id_categoria = Number(prod.Categoria);
              this.producto.categoria = this.categoriaService.getCategoria(prod.Categoria);
              this.productos.push(this.producto);
            }

          });
          // console.log('cantidad de productos ---- ' + this.productos.length);
          // for (const p of data.datos) {
          //   if (this.categoriaService.getCategoria(p.Categoria) !== ' ') {
          //     this.producto = new Producto();
          //     this.producto.id = Number(p.Id);
          //     this.producto.nombre = p.Nombre;
          //     this.producto.porcentaje = Number(p.Porcentaje);
          //     this.producto.precio = Number(p.Precio);
          //     this.producto.cantidad = Number(p.Cantidad);
          //     this.producto.id_categoria = Number(p.Categoria);
          //     this.producto.categoria = this.categoriaService.getCategoria(p.Categoria);
          //     this.productos.push(this.producto);
          //   }
          // }
          // console.log('productos cargado ----' + data);
          return this.productos;
          /*
          Id: prod.id_producto,
          Nombre: prod.nombre,
          Porcentaje: prod.porcentaje_ganancia,
          Precio: prod.precio,
          Cantidad: prod.cantidad,
          Categoria: prod.id_categoria
           */
        }
        // for (const d of (data as any)) {
        // console.log(this.smartphone);
        // }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client error', err);
        } else {
          console.log('Server error', err);
        }
      }
    );
  }

  getProducto(idP: number) {
    this.producto = new Producto();
    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.usuarioService.getAutenticacion()
      })
    };
    this.http.post(environment.apiUrl + '/producto/porId', {
      id: idP
    }, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          console.log(data.mensaje);
        } else {
          this.producto.id = Number(data.datos.Id);
          this.producto.nombre = data.datos.Nombre;
          this.producto.porcentaje = Number(data.datos.Porcentaje);
          this.producto.precio = Number(data.datos.Precio);
          this.producto.cantidad = Number(data.datos.Cantidad);
          this.producto.id_categoria = Number(data.datos.Categoria);
          this.producto.categoria = this.categoriaService.getCategoria(data.datos.Categoria);
          // console.log('usuario cargado');
          /*
          Id: prod.id_producto,
          Nombre: prod.nombre,
          Porcentaje: prod.porcentaje_ganancia,
          Precio: prod.precio,
          Cantidad: prod.cantidad,
          Categoria: prod.id_categoria
           */
        }
        // for (const d of (data as any)) {
        // console.log(this.smartphone);
        // }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client error', err);
        } else {
          console.log('Server error', err);
        }
      }
    );
  }

  mostrarProductos(): Producto[] {
    return this.productos;
  }

  mostrarProducto(): Producto {
    return this.producto;
  }

  agregar(product: Producto): boolean {
    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.usuarioService.getAutenticacion()
      })
    };
    // [producto.nombre, Number(producto.porcentaje),  Number(producto.precio), Number(producto.cantidad), Number(producto.categoria)]
    this.http.post(environment.apiUrl + '/producto/agregar', {
      nombre: product.nombre,
      porcentaje: product.porcentaje,
      precio: product.precio,
      cantidad: product.cantidad,
      categoria: product.id_categoria
    }, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          // console.log(data.mensaje);
          this.resultado = false;
        } else {
          // console.log('producto agregado');
          this.resultado = true;
          return true;
          /*
          Id: prod.id_producto,
          Nombre: prod.nombre,
          Porcentaje: prod.porcentaje_ganancia,
          Precio: prod.precio,
          Cantidad: prod.cantidad,
          Categoria: prod.id_categoria
           */
        }
        // for (const d of (data as any)) {
        // console.log(this.smartphone);
        // }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client error', err);
        } else {
          console.log('Server error', err);
        }
      }
    );
    return false;
  }

  actualizar(product: Producto): boolean {
    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.usuarioService.getAutenticacion()
      })
    };
    // [producto.nombre, Number(producto.porcentaje),  Number(producto.precio), Number(producto.cantidad), Number(producto.categoria)]
    this.http.post(environment.apiUrl + '/producto/actualizar', {
      id: product.id,
      nombre: product.nombre,
      porcentaje: product.porcentaje,
      precio: product.precio,
      cantidad: product.cantidad,
      categoria: product.id_categoria
    }, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          // console.log(data.mensaje);
          this.resultado = false;
        } else {
          // console.log('producto actualizado');
          this.resultado = true;
          return true;
          /*
          Id: prod.id_producto,
          Nombre: prod.nombre,
          Porcentaje: prod.porcentaje_ganancia,
          Precio: prod.precio,
          Cantidad: prod.cantidad,
          Categoria: prod.id_categoria
           */
        }
        // for (const d of (data as any)) {
        // console.log(this.smartphone);
        // }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client error', err);
        } else {
          console.log('Server error', err);
        }
      }
    );
    return false;
  }

  eliminar(idP: number): boolean {
    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.usuarioService.getAutenticacion()
      })
    };
    // [producto.nombre, Number(producto.porcentaje),  Number(producto.precio), Number(producto.cantidad), Number(producto.categoria)]
    this.http.post(environment.apiUrl + '/producto/eliminar', {
      id: idP
    }, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          // console.log(data.mensaje);
          this.resultado = false;
        } else {
          // console.log('producto eliminado');
          this.resultado = true;
          return true;
          /*
          Id: prod.id_producto,
          Nombre: prod.nombre,
          Porcentaje: prod.porcentaje_ganancia,
          Precio: prod.precio,
          Cantidad: prod.cantidad,
          Categoria: prod.id_categoria
           */
        }
        // for (const d of (data as any)) {
        // console.log(this.smartphone);
        // }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client error', err);
        } else {
          console.log('Server error', err);
        }
      }
    );
    return false;
  }

}
