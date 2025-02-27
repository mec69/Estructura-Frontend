import { Component } from '@angular/core';
import { Usuario } from '../../interface/inicioSesion.interface';
import { IniciarsSesionService } from '../../service/iniciasesion.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {

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
