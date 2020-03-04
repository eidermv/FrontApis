import { Injectable } from '@angular/core';
import {Usuario} from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private logeado: boolean = false;

  constructor() { }

  seLogeo() {
    this.logeado = true;
  }

  cerroSesion() {
    this.logeado = false;
  }

  estaLogeado(): boolean {
    return this.logeado;
  }

}
