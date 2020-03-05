import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UsuarioService} from './usuario.service';
import {environment} from '../../environments/environment';
import {Categoria} from '../modelos/categoria';
import {Producto} from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private httpOpciones: any;
  private categoria: Categoria = new Categoria();
  private categorias: Categoria[] = [];

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  getCategorias(): Categoria[] {
    this.categorias = [];
    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.usuarioService.getAutenticacion()
      })
    };
    this.http.post(environment.apiUrl + '/categoria/categorias', {}, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          console.log(data.mensaje);
        } else {
          data.datos.forEach(c => {
            this.categoria = new Categoria();
            this.categoria.id = Number(c.Id);
            this.categoria.nombre = c.Nombre;
            this.categorias.push(this.categoria);

          });
          // for (const c of data.datos) {
          //   this.categoria = new Categoria();
          //   this.categoria.id = Number(c.Id);
          //   this.categoria.nombre = c.Nombre;
          //   this.categorias.push(this.categoria);
          // }

          console.log('categorias cargado');
          /*
          Id: prod.id_categoria,
          Nombre: prod.nombre,
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
    return this.categorias;
  }

getCategoriaU(idU: number) {
    console.log('categria usuario ---' + idU);
    this.categorias = [];
    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.usuarioService.getAutenticacion()
      })
    };
    this.http.post(environment.apiUrl + '/categoria/porUs', {
      id: idU
    }, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          console.log(data.mensaje);
        } else {
          data.datos.forEach(c => {
            this.categoria = new Categoria();
            this.categoria.id = Number(c.Id);
            this.categoria.nombre = c.Nombre;

            this.categorias.push(this.categoria);

          });
          console.log('nombre categoria ---- ' + this.categorias.length);
          return this.categorias;
          // for (const c of data.datos) {
          //   this.categoria = new Categoria();
          //   this.categoria.id = Number(c.Id);
          //   this.categoria.nombre = c.Nombre;
          //   this.categorias.push(this.categoria);
          // }
          // console.log('categorias por usuario cargado ---------- ' + data);
          /*
          Id: prod.id_producto,
          Nombre: prod.nombre
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
    return this.categorias;
  }

  getCategoria(idC: number): string {
    for (const cat of this.categorias) {
      if (cat.id === idC) {
        return cat.nombre;
      }
    }
    return ' ';
  }

  getListaC(): Categoria[] {
    return this.categorias;
  }
}
