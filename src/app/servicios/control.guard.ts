import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SesionService} from './sesion.service';

@Injectable({
  providedIn: 'root'
})
/*
TODO: Clase encargada de verificar el acceso logeado a ciertas paginas
*/
export class ControlGuard implements CanActivate {
  constructor(private sesionService: SesionService, private router: Router) {
  }
  canActivate() {
    if (!this.sesionService.estaLogeado()) {
      console.log('No estás logueado');
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

}
