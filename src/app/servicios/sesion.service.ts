import { Injectable } from '@angular/core';
import {Usuario} from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private logeado: boolean;
  private usuario: Usuario;

  constructor() {
    this.logeado = false;
  }

  seLogeo() {
    this.logeado = true;
  }

  cerroSesion() {
    this.logeado = false;
  }

  estaLogeado() {
    return this.logeado;
  }
}
