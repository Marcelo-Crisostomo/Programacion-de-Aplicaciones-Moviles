import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AutenticacionService {
    //Variable que indica si el usuario está logueado o no
    private usuarioLogueado: boolean =false;

    constructor() {}

    //Método que retorna si el usuario está logueado

    estaLogueado(): boolean {
        return this.usuarioLogueado;
    }

      // Método para simular el inicio de sesión.
     iniciarSesion() {
     this.usuarioLogueado = true;
     }

     // Método para simular el cierre de sesión.
    cerrarSesion() {
        this.usuarioLogueado = false;
    }

}