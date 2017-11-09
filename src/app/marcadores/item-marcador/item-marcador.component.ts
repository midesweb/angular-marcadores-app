import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Marcador } from './../marcador.model';

@Component({
  selector: 'app-item-marcador',
  templateUrl: './item-marcador.component.html',
  styleUrls: ['./item-marcador.component.css']
})
export class ItemMarcadorComponent implements OnInit {

  @Input()
  marcador: Marcador;

  @Input()
  i: number;

  @Output()
  borrarItem = new EventEmitter<Marcador>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBorrar() {
    this.borrarItem.emit(this.marcador);
  }

  onEditar() {
    this.router.navigate(['/editar', this.i]);
  }
}
