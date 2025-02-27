import { Component } from '@angular/core';
import { IClientes } from '../../interfaces/clientes.interface';
import { ClientesService } from '../../services/clientes.service';

/**
 * Componente para mostrar y gestionar la lista de clientes.
 * Este componente obtiene los datos de los clientes a través del servicio `ClientesService`
 * y los muestra en una tabla en la plantilla HTML.
 */

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {


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
