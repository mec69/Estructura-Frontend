/**
 * Este componente gestiona el proceso de inicio de sesión de los usuarios.
 * Proporciona un formulario para que los usuarios ingresen su correo electrónico y contraseña,
 * y utiliza un servicio para autenticar las credenciales. Si el inicio de sesión es exitoso,
 * redirige al usuario al dashboard; de lo contrario, muestra un mensaje de error.
 */
import { Component } from '@angular/core';
import { Usuario } from '../../interface/inicioSesion.interface';
import { IniciarsSesionService } from '../../service/iniciasesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [],
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css'
})
export class IniciosesionComponent {
  usuario: Usuario = { email: '', password: '' };
  mensajeError: string = '';

  constructor(
    private authService: IniciarsSesionService,
     private router: Router) { }


  onSubmit(): void {
    this.authService.iniciarSesion(this.usuario).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso', response);
        this.router.navigate(['/dashboard']); // Redirige al dashboard después del login.
      },
      error: (error) => {
        console.error('Error en el inicio de sesión', error);
        this.mensajeError = 'Credenciales incorrectas. Inténtalo de nuevo.'; // Muestra un mensaje de error.
      },
    });
  }
}