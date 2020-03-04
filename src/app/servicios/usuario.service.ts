import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Usuario} from '../modelos/usuario';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: Usuario = new Usuario();
  private autenticacion: string = '';
  private httpOpciones: any;
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'access-token': this.autenticacion });

  constructor(private http: HttpClient) {  }

  // Http Headers con token
// {
//   headers: this.headers
// }

  cargarUsuario(idU: number) {
    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.autenticacion
      })
    };
    this.http.post(environment.apiUrl + '/usuario/porId', {
      id: idU
    }, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          console.log(data.mensaje);
        } else {
          this.usuario.id = data.uexiste.Id;
          this.usuario.nombre = data.uexiste.Nombres;
          this.usuario.apellido = data.uexiste.Apellidos;
          console.log('usuario cargado');
          /*
          Id: us.id_usuario,
                        Nombres: us.nombre,
                        Apellidos: us.apellido
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

  getAutenticacion(): string {
    return this.autenticacion;
  }

  setAutenticacion(value: string) {
    this.autenticacion = value;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  limpiarServicio() {
    this.usuario = new Usuario();
    this.autenticacion = '';
  }
}
