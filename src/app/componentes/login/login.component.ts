import { Component, OnInit } from '@angular/core';
import {Login} from '../../modelos/login';
import {LoginService} from '../../servicios/login.service';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: Login;
  private esInvalidoForm: boolean = false;

  loginForm = this.fb.group({
    usuario: ['', Validators.required],
    contrasenia: ['', Validators.required]
  });
  // user = new FormControl('', [Validators.required]);
  optiones: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.optiones = fb.group({
      hideRequired: true,
      floatLabel: 'auto'
    });
    this.login = new Login();
  }

  esValidoUser() {
    return this.usuario.invalid && (this.usuario.dirty || this.usuario.touched);
  }

  esValidoPass() {
    return this.pass.invalid && (this.pass.dirty || this.pass.touched);
  }

  iniciar() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value.usuario);
      this.login.usuario = this.loginForm.value.usuario;
      this.login.contrasenia = this.loginForm.value.contrasenia;
      if (this.loginService.login(this.login)) {
        this.esInvalidoForm = false;
      } else {
        this.onResetForm();
        this.esInvalidoForm = true;
      }
    } else {
      this.esInvalidoForm = true;
    }

  }


  ngOnInit() {
  }

  onResetForm() {
    this.loginForm.reset();
  }

  get usuario() { return this.loginForm.get('usuario'); }
  get pass() { return this.loginForm.get('contrasenia'); }
}
