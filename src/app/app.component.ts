import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  isAuthenticated: boolean = false; // Inicializa como falso
  rol: string = '';
  title = 'gestion-registro-votos';

  constructor(public authService: AuthenticationService) {  }

  ngOnInit() {
    // Verifica el estado de autenticación al inicializar el componente
    this.isAuthenticated = this.authService.obtenerSession() || false;
    console.log(this.authService.obtenerSession())
    console.log(this.authService.obtenerRol())
  }
}
