import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SeguridadService } from './../seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroComponent implements OnInit {

  mensaje = '';
  registro = {
    email: 'a@a.com',
    password: 'qwe'
  };

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit() {
  }

  onRegistro() {
    this.seguridadService.registrarUsuario(this.registro).subscribe(
      (res) => {
        console.log(res);
        this.mensaje = res;
      },
      (error) => {
        console.log(error);
        this.mensaje = error.error;
      }
    );
  }

}
