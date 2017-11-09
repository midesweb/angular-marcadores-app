import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarcadoresService } from './../marcadores/marcadores.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  marcadoresPublicos: number;
  publicos$: Observable<number>;
  publicosSubscription: Subscription;

  constructor(private marcadoresService: MarcadoresService) { }

  ngOnInit() {
    this.publicos$ = this.marcadoresService.getMarcadoresPublicos$();
    this.publicosSubscription = this.publicos$.subscribe(
      response => {
        this.marcadoresPublicos = response;
        console.log('recibido nuevo valor');
      }
    );
    this.marcadoresService.getMarcadoresPublicos();
  }

  ngOnDestroy() {
    this.publicosSubscription.unsubscribe();
  }
}
