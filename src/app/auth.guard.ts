import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean> {
    return this.authService.isUserLogged().toPromise()
      .then((isUserLogged: boolean | undefined) => {
        if (isUserLogged === true) {
          console.log(this.authService.isUserLogged);
          return true; // El usuario ha iniciado sesión, permitir la activación de la ruta.
        } else {
          console.log(this.authService.isUserLogged);
          this.router.navigate(['inicio-sesion']); // Redirigir al usuario a la página de inicio de sesión.
          return false; // No permitir la activación de la ruta.
        }
      })
      .catch(() => {
        console.log(this.authService.isUserLogged);
        this.router.navigate(['inicio-sesion']); // En caso de error, redirigir al usuario a la página de inicio de sesión.
        return false; // No permitir la activación de la ruta.
      });
  }

}
