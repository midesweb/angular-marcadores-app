import { HttpToolsService } from './../http-tools.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SeguridadService {

  registroUrl = 'http://localhost:3000/sign-in';
  loginUrl = 'http://localhost:3000/login';

  constructor(
    private httpClient: HttpClient,
    private httpToolService: HttpToolsService
  ) { }

  registrarUsuario(usuario) {
    return this.httpClient.post<string>(this.registroUrl, usuario);
  }

  loguearUsuario(usuario) {
    return this.httpClient.post<string>(this.loginUrl, usuario);
  }

  almacenarToken(token) {
    window.localStorage.setItem('token', token);
  }

  recuperarToken() {
    return window.localStorage.getItem('token');
  }

cerrarSesion() {
  window.localStorage.removeItem('token');
}

  verificarTokenValido() {
    const token = this.recuperarToken();
    const options = {
      headers: this.httpToolService.crearCabeceras()
    };
    this.httpClient.get('http://localhost:3000/verify', options).subscribe(
      (response) => console.log('estoy logueado'),
      (error) => this.cerrarSesion()
    );
  }

  estaAutenticado() {
    if(window.localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }

}
