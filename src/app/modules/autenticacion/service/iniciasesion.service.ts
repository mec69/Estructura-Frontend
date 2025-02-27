import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/inicioSesion.interface';
import { Envsystem } from '../../../core/model/env.model';

/**
 * Servicio para gestionar la autenticación del usuario.
 *  Simula el estado de autenticac
 *  Verifica si el usuario ha iniciado sesión.
 *  Simula el inicio de sesión del usuario.
 */
@Injectable({
    providedIn: 'root',
})
export class IniciarsSesionService {
    private env = new Envsystem();
    private file!: string;

    constructor(private http: HttpClient) {
        this.file = 'cliente/'
    }

    iniciarSesion(usuario: Usuario): Observable<any> {
        return this.http.post(`${this.file}/login`, usuario);
    }

    cerrarSesion(): Observable<any> {
        return this.http.post(`${this.file}/logout`, {});
    }
}