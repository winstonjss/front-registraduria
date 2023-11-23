import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from '../services/user-role.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private userRole = new BehaviorSubject<string | null>(null);

  constructor(
    private router: Router,
    private http: HttpClient,
    private userRolService: UserRoleService,
  ) {}

  login(nombreUsuario: string, password: string) {
    // Hacer la solicitud de inicio de sesión al servidor
    let bodyData = {
      nombreUsuario: nombreUsuario,
      password: password,
    };

    this.http.post('http://localhost:8080/iniciar-sesion', bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);

        if (resultData.sesionIniciada == false) {
          alert('Credenciales incorrectas');
        } else if (resultData.sesionIniciada == true) {
          // Autenticación exitosa
          this.isAuthenticated.next(true);
          this.userRole.next(resultData.rol);
          this.router.navigateByUrl('home');
          localStorage.setItem("session", "true");
          localStorage.setItem("rol", resultData.rol)
        } else {
          alert('Credenciales incorrectas');
        }
      },
      (error) => {
        // Manejar errores de la solicitud, por ejemplo, mostrar un mensaje de error
        console.error('Error al iniciar sesión:', error);
        alert(
          'Ocurrió un error al iniciar sesión. Por favor, inténtalo nuevamente.'
        );
      }
    );
  }

  logout() {
   // Cambiar el estado de autenticación a false
   this.isAuthenticated.next(false);

   // Borrar la información del usuario del localStorage
   localStorage.removeItem('session');
   localStorage.removeItem('rol');
   this.router.navigateByUrl('inicio-sesion');
  }

  isUserLogged() {
    return this.isAuthenticated.asObservable();
  }
  getUserRole() {
    return this.userRole.asObservable();
  }
  obtenerSession(): boolean {
    const sessionData = localStorage.getItem('session');
    return sessionData ? JSON.parse(sessionData) : false;
  }
  obtenerRol(): string | null {
    return localStorage.getItem('rol');
  }

}
