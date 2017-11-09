import { HttpToolsService } from './../http-tools.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

import { Marcador, TipoMarcador } from './marcador.model';

@Injectable()
export class MarcadoresService {

  private publicos$ = new Subject<number>();
  urlTipos = 'http://localhost:3000/tipos';
  urlMarcadores = 'http://localhost:3000/marcadores';
  marcadoresPublicos: number;

  constructor(
    private httpClient: HttpClient,
    private httpToolsService: HttpToolsService
  ) { }

  newMarcador(): Marcador {
    return {
      titulo: 'test...',
      url: 'http://www',
      idTipo: 0
    };
  }

  addMarcador(marcador: Marcador) {
    if (marcador.idTipo == 1) {
      this.marcadoresPublicos++;
      this.publicos$.next(this.marcadoresPublicos);
    }
    return this.httpClient.post<Marcador>(this.urlMarcadores, marcador, {
      headers: this.httpToolsService.crearCabeceras()
     });
  }

  getMarcadores() {
    return this.httpClient.get<Marcador[]>(this.urlMarcadores);
  }

  getTipos() {
    return this.httpClient.get<TipoMarcador[]>(this.urlTipos);
  }

  borrarMarcador(marcador) {
    if (marcador.idTipo == 1) {
      this.marcadoresPublicos--;
      this.publicos$.next(this.marcadoresPublicos);
    }
    return this.httpClient.delete(`${this.urlMarcadores}/${marcador.id}`, {
      headers: this.httpToolsService.crearCabeceras()
     });
  }

  getMarcadoresPublicos() {
    this.httpClient.get<Marcador[]>(`${this.urlMarcadores}?idTipo=1`).subscribe(
      (marcadores) => {
        this.publicos$.next(marcadores.length);
        this.marcadoresPublicos = marcadores.length;
      }
    );
  }

  getMarcadoresPublicos$() {
    return this.publicos$.asObservable();
  }
}
