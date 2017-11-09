import { SeguridadService } from './seguridad/seguridad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit() {
    this.seguridadService.verificarTokenValido();
  }

  onLogout() {
    this.seguridadService.cerrarSesion();
  }
}
