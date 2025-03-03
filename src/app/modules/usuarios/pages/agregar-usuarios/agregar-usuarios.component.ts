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
  username: string = '';

  @Output() usuarioAgregado = new EventEmitter<any>();

  // agregarUsuario() {
  //   if (this.nombre.trim() && this.email.trim() && this.username.trim()) {
  //     const nuevoUsuario = {
  //       name: this.nombre,
  //       email: this.email,
  //       username: this.username
  //     };
      
  //     this.usuarioAgregado.emit(nuevoUsuario);
  //     // Limpiar campos después de agregar
  //     this.nombre = '';
  //     this.email = '';
  //     this.username = '';
  //   } else {
  //     alert('Todos los campos son obligatorios');
  //   }
  // }

  agregarUsuario() {
    if (this.nombre.trim() && this.email.trim() && this.username.trim()) {
      const nuevoUsuario = {
        name: this.nombre,
        email: this.email,
        username: this.username
      };
  
      // 📌 Recuperar usuarios del localStorage (si existen)
      const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
  
      // 📌 Agregar el nuevo usuario a la lista
      usuariosGuardados.push(nuevoUsuario);
  
      // 📌 Guardar la lista actualizada en el localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
  
      // 📌 Emitir el evento si se necesita actualizar la vista
      this.usuarioAgregado.emit(nuevoUsuario);
  
      // 📌 Limpiar los campos después de agregar el usuario
      this.nombre = '';
      this.email = '';
      this.username = '';
  
      console.log('Usuario agregado y guardado en localStorage:', nuevoUsuario);
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
  


}
