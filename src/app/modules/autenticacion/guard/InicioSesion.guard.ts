import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IniciarsSesionService } from '../service/iniciasesion.service';


/**
 * Guard para proteger rutas y verificar si el usuario ha iniciado sesión.
 * Si el usuario no ha iniciado sesión, se redirige a la página de inicio de sesión.
 *    * Método que implementa la lógica del guard.
     * Verifica si el usuario ha iniciado sesión antes de permitir el acceso a una ruta.
 */

@Injectable({
    providedIn: 'root', // El guard está disponible en toda la aplicación
})
export class IniciarSesionGuard implements CanActivate {


    constructor(private authService: IniciarsSesionService, private router: Router) { }


    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.estaAutenticado()) {
            return true;
        } else {
            // Redirige al usuario a la página de inicio de sesión
            this.router.navigate(['/iniciar-sesion'], {
                queryParams: { returnUrl: state.url }, // Guarda la URL actual para redirigir después del login
            });
            return false; // Deniega el acceso a la ruta
        }
    }
}