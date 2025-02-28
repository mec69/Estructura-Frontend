import { Component, Input } from '@angular/core';
import { IClientes } from '../../interface/clientes.interface';
import { ClientesService } from '../../services/clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Componente para mostrar y gestionar la lista de clientes.
 * Este componente obtiene los datos de los clientes a través del servicio `ClientesService`
 * y los muestra en una tabla en la plantilla HTML.
 */

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientesService], // Proporciona el servicio
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {

  @Input() name: string = 'Mundo';

  getGreeting(): string {
    return `Hola, ${this.name}!`;
  }

  
  clientes: IClientes[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  /**
   * Obtiene la lista de clientes y la asigna a la propiedad `clientes`.
   */
  obtenerClientes(): void {
    this.clientesService.obtenerClientes().subscribe((data) => {
      this.clientes = data;
    });
  }

}
