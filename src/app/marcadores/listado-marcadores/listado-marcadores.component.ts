import { Component, OnInit } from '@angular/core';

import { MarcadoresService } from './../marcadores.service';
import { Marcador } from './../marcador.model';

@Component({
  selector: 'app-listado-marcadores',
  templateUrl: './listado-marcadores.component.html',
  styleUrls: ['./listado-marcadores.component.css']
})
export class ListadoMarcadoresComponent implements OnInit {

  error: string;
  mensaje: string;

  constructor(private marcadoresService: MarcadoresService) { }

  marcadores: Marcador[];

  ngOnInit() {
    this.obtenerMarcadores();
  }

  onBorrarMarcador(marcador: Marcador) {
    this.marcadoresService.borrarMarcador(marcador).subscribe(
      (marcadores) => {
        this.mensaje = 'Borrado con éxito';
        this.obtenerMarcadores();
      },
      (err) => {
        this.error = 'Error al borrar el marcador';
      }
    );
  }

  obtenerMarcadores() {
    this.marcadoresService.getMarcadores().subscribe(
      (marcadores) => this.marcadores = marcadores,
      (error) => {
        console.log(error);
        this.error = 'Error al recibir los marcadores';
      }
    );
  }

}
