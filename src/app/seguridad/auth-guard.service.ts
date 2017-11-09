import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { SeguridadService } from './seguridad.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private seguridadService: SeguridadService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const autenticado = this.seguridadService.estaAutenticado();
    if (autenticado) {
      return autenticado;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
