import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './agregar-usuarios.component.html',
  styleUrl: './agregar-usuarios.component.css'
})
export class AgregarUsuariosComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';

  @Output() usuarioAgregado = new EventEmitter<any>();

  agregarUsuario() {
    if (this.nombre.trim() && this.email.trim() && this.telefono.trim()) {
      const nuevoUsuario = {
        name: this.nombre,
        email: this.email,
        phone: this.telefono
      };

      this.usuarioAgregado.emit(nuevoUsuario);

      // Limpiar campos después de agregar
      this.nombre = '';
      this.email = '';
      this.telefono = '';
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
}
