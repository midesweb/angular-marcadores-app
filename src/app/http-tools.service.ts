import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpToolsService {

  constructor() { }

  crearCabeceras() {
    return new HttpHeaders().set('token', window.localStorage.getItem('token'));
  }
}
