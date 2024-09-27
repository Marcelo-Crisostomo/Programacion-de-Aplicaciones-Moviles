import { Component } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  logueado: boolean = false; // Variable para manejar el estado de login

  constructor(private authService: AutenticacionService, private router: Router) {}

  // Método para iniciar sesión
  iniciarSesion() {
    this.authService.iniciarSesion(); // Simula el inicio de sesión
    this.logueado = true; // Cambia el estado a "logueado"
    this.router.navigate(['/protegida']); // Redirige a la página protegida
  }
}

