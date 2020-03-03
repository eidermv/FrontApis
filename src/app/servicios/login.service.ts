import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from '../modelos/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login): string {
    /*this.httpClient.post('https://reqres.in/api/login', {
      usuario: login.usuario,
      contrasenia: login.contrasenia,
    });*/
    return " ";
  }
}
