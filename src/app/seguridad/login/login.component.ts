import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SeguridadService } from './../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  usuario = {
    email: 'user@example.com',
    password: '1234'
  };
  mensaje = '';

  constructor(
    private seguridadService: SeguridadService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.seguridadService.loguearUsuario(this.usuario).subscribe(
      (token) => {
        console.log(token);
        this.seguridadService.almacenarToken(token);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.mensaje = error.error;
      }
    );
  }

}
