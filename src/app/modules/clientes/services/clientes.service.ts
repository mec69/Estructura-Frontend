import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IClientes } from '../interface/clientes.interface';
import { Envsystem } from '../../../core/model/env.model';
/**
 * Servicio para gestionar las operaciones relacionadas con los clientes.
 * Proporciona métodos para obtener, crear, actualizar y eliminar clientes
 * mediante una API RESTful.
 */

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private env = new Envsystem();
  private file!: string;

  constructor(private http: HttpClient) {
    this.file = 'cliente/'
  }

  obtenerClientes(): Observable<IClientes[]> {
    return this.http.get<IClientes[]>(this.file);
  }


  obtenerClientePorId(id: number): Observable<IClientes> {
    const url = `${this.file}/${id}`;
    return this.http.get<IClientes>(url);
  }


  crearCliente(cliente: IClientes): Observable<IClientes> {
    return this.http.post<IClientes>(this.file, cliente);
  }


  actualizarCliente(cliente: IClientes): Observable<IClientes> {
    const url = `${this.file}/${cliente.id}`;
    return this.http.put<IClientes>(url, cliente);
  }

  eliminarCliente(id: number): Observable<void> {
    const url = `${this.file}/${id}`;
    return this.http.delete<void>(url);
  }
}