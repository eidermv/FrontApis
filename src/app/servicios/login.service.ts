import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Login} from '../modelos/login';
import {environment} from '../../environments/environment';
import {SesionService} from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private sesionService: SesionService
    ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(login: Login): string {
    this.http.post(environment.apiUrl + '/login/iniciarS', {
      usuario: login.usuario,
      contrasenia: login.contrasenia,
    }, this.httpOptions).subscribe(data => {
        for (const d of (data as any)) {
          // console.log(this.smartphone);
          if (d.estado === 'Fallo') {
            this.sesionService.cerroSesion();
            console.log(d.mensaje);
          } else {
            this.sesionService.seLogeo();
            console.log(d.id);
          }
        }
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client error');
        } else {
          console.log('Server error');
        }
      }
    );
    return " ";
  }
}
