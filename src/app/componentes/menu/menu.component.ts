import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../servicios/usuario.service';
import {Router} from '@angular/router';
import {LoginService} from '../../servicios/login.service';
import {SesionService} from '../../servicios/sesion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private loginService: LoginService,
    private sesionService: SesionService
  ) { }

  ngOnInit() {
  }

  cerrarS() {
    this.loginService.cerrarSesion();
    this.router.navigateByUrl('/login');
    this.usuarioService.limpiarServicio();
  }

  usuario() {
    return this.usuarioService.getUsuario();
  }

  getLogeado() {
    return this.sesionService.estaLogeado();
  }

}
