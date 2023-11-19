import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isAuthenticated: boolean = false; // Inicializa como falso

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar si el usuario está autenticado
    this.isAuthenticated = this.authService.obtenerSession() || false;
    console.log(this.authService.obtenerSession());

    if (!this.isAuthenticated) {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      this.router.navigate(['inicio-sesion']);
    }
  }
}
