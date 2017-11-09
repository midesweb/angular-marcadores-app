import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Marcador, TipoMarcador } from './../marcador.model';
import { MarcadoresService } from './../marcadores.service';

@Component({
  selector: 'app-alta-marcador',
  templateUrl: './alta-marcador.component.html',
  styleUrls: ['./alta-marcador.component.css']
})
export class AltaMarcadorComponent implements OnInit {

  marcador: Marcador;
  tipoMarcadorDefault = 0;
  tipos: TipoMarcador[];
  error: string;

  constructor(private marcadoresService: MarcadoresService) { }

  ngOnInit() {
    this.marcador = this.marcadoresService.newMarcador();
    this.marcadoresService.getTipos().subscribe(
      (tipos) => this.tipos = tipos
    );
  }

  onSubmit(f: NgForm) {
    console.log(f);
    this.marcadoresService.addMarcador(f.value).subscribe(
      (response) => console.log(response),
      (error) => this.error = 'No se ha podido introducir el recurso'
    );
    f.reset();
    f.controls.idTipo.setValue(0);
  }

}
