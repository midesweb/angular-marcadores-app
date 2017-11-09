import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editar-marcador',
  templateUrl: './editar-marcador.component.html',
  styleUrls: ['./editar-marcador.component.css']
})
export class EditarMarcadorComponent implements OnInit {

  id: string;

  constructor(private rutaActiva: ActivatedRoute) { }  

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id;
  }

}
