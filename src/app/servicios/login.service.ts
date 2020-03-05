import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Login} from '../modelos/login';
import {environment} from '../../environments/environment';
import {SesionService} from './sesion.service';
import {UsuarioService} from './usuario.service';
import {Router} from '@angular/router';
import {ListarComponent} from '../componentes/producto/listar/listar.component';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpOpciones: any;

  constructor(
    private http: HttpClient,
    private sesionService: SesionService,
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  login(login: Login) {

    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(environment.apiUrl + '/login/iniciarS', {
      usuario: login.usuario,
      contrasenia: login.contrasenia,
    }, this.httpOpciones).subscribe((data: any) => {
      // console.log(data.estado);
        if (data.estado === 'Fallo') {
          this.sesionService.cerroSesion();
          // console.log(data.mensaje);
        } else {
          this.sesionService.seLogeo();
          console.log('-- usuario esta logeado ? ' + this.sesionService.estaLogeado());
          this.usuarioService.setAutenticacion(data.token);
          // console.log('token ----'+this.usuarioService.getAutenticacion());
          this.usuarioService.cargarUsuario(data.id);

          // console.log(data.id);
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

  cerrarSesion() {

    this.httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.usuarioService.getAutenticacion()
      })
    };
// console.log('token1 ' + this.usuarioService.getUsuario().nombre);
    this.http.post(environment.apiUrl + '/login/cerrarS', {
      id: this.usuarioService.getUsuario().id,
    }, this.httpOpciones).subscribe((data: any) => {
        if (data.estado === 'Fallo') {
          console.log(data.mensaje);
        } else {
          this.sesionService.cerroSesion();
          console.log('se cerro sesion');
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
}
