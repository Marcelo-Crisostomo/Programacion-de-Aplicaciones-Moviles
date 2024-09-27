import { CanActivateFn, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
  
  constructor(private authService: AutenticacionService, private router: Router) {}
    // Método que decide si se puede acceder a una ruta.
    canActivate(): boolean {
      if (this.authService.estaLogueado()){
        return true;
      }else{
        this.router.navigate(['/inicio']);
        return false;
      }
    }

};
