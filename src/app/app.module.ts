import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MomentModule } from 'angular2-moment';

import { MarcadoresModule } from './marcadores/marcadores.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarcadoresService } from './marcadores/marcadores.service';
import { ListadoMarcadoresComponent } from './marcadores/listado-marcadores/listado-marcadores.component';
import { AltaMarcadorComponent } from './marcadores/alta-marcador/alta-marcador.component';
import { EditarMarcadorComponent } from './marcadores/editar-marcador/editar-marcador.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { SeguridadModule } from './seguridad/seguridad.module';
import { SeguridadService } from './seguridad/seguridad.service';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { HttpToolsService } from './http-tools.service';
import { AuthGuard } from './seguridad/auth-guard.service';

const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'ayuda/:seccion', component: AyudaComponent },
  { path: 'listado', component: ListadoMarcadoresComponent },
  { path: 'alta', canActivate: [AuthGuard], component: AltaMarcadorComponent },
  { path: 'editar/:id', component: EditarMarcadorComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    MarcadoresModule,
    RouterModule.forRoot(rutas),
    MomentModule,
    HttpClientModule,
    SeguridadModule
  ],
  providers: [
    MarcadoresService,
    SeguridadService,
    HttpToolsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
