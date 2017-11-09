import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import * as moment from 'moment';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit, OnDestroy {

  seccion: string;
  subscripcion: Subscription;
  date = new Date(2017, 11, 1, 0, 0, 0, 0);
  momentNativo: string;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    // this.seccion = this.rutaActiva.snapshot.params.seccion;
    this.subscripcion = this.rutaActiva.params.subscribe(
      (params: Params) => {
        console.log('recibiendo parámetro', params);
        this.seccion = params.seccion;
      }
    );

    // moment
    const now = moment();
    now.add(7, 'days');
    this.momentNativo = now.format('DD/MM/YYYY'); // add this 3 of 4
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

}
