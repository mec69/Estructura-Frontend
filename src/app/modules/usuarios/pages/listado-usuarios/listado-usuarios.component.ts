import { Component, signal } from '@angular/core';
import { UserService } from '../../service/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {

  usuarios: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.cargarUsuarios(); // ✅ Cargar usuarios automáticamente al iniciar
  }

  cargarUsuarios() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.usuarios = data ?? []; // ✅ Evita que `usuarios` sea `undefined`
        console.log('Usuarios cargados:', this.usuarios);
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
      }
    });
  }

}
