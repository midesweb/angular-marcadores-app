import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AltaMarcadorComponent } from './alta-marcador/alta-marcador.component';
import { ListadoMarcadoresComponent } from './listado-marcadores/listado-marcadores.component';
import { ItemMarcadorComponent } from './item-marcador/item-marcador.component';
import { EditarMarcadorComponent } from './editar-marcador/editar-marcador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AltaMarcadorComponent,
    ListadoMarcadoresComponent,
    ItemMarcadorComponent,
    EditarMarcadorComponent,
  ],
  exports: [
    AltaMarcadorComponent,
    ListadoMarcadoresComponent,
    EditarMarcadorComponent
  ]
})
export class MarcadoresModule { }
