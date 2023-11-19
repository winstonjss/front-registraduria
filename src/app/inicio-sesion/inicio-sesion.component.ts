import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from '../services/user-role.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent {
  nombreUsuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private userRolService: UserRoleService,
    private authService: AuthenticationService
  ) {}

  Login() {
    nombreUsuario: this.nombreUsuario;
    password: this.password;

    if (!this.nombreUsuario || !this.password) {
      // Validación básica: asegurarse de que se ingresen ambos campos
      alert('Por favor, ingrese un nombre de usuario y una contraseña.');
      return;
    }

    // Llamar al servicio de autenticación para realizar el inicio de sesión
    this.authService.login(this.nombreUsuario, this.password);
  }
}
