import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envsystem } from '../model/env.model';
import { IClientes } from '../../modules/clientes/interfaces/clientes.interface';


/**
 * Servicio para gestionar las operaciones relacionadas con los clientes.
 * Proporciona métodos para obtener, crear, actualizar y eliminar clientes
 * mediante una API RESTful.
 */

@Injectable({
    providedIn: 'root'
})
export class funcionesServices {

    private env = new Envsystem();
    private file!: string;

    constructor(private http: HttpClient) {
        this.file = 'cliente/'
    }

    obtenerClientes(): Observable<IClientes[]> {
        return this.http.get<IClientes[]>(this.file);
    }

}