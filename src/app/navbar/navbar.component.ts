import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../services/user-role.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true; // Variable para controlar el colapso del menú
  isAuthenticated = false; // Variable para controlar si el usuario está autenticado
  userRole: string | null = null;

  constructor(private userService: UserRoleService, private authService:AuthenticationService) {}

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed; // Cambia el estado de colapso
  }

  ngOnInit() {
    this.userRole = this.authService.obtenerRol();
  }
  logout() {
    // Llamar al método de cierre de sesión
    this.authService.logout();

    // También puedes redirigir al usuario a la página de inicio de sesión u otra página después del cierre de sesión si es necesario.
  }
}
