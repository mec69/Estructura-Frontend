import { Routes } from '@angular/router';
import { ListadoUsuarioComponent } from './modules/usuarios/pages/listado-usuario/listado-usuario.component';
import { ListadoClientesComponent } from './modules/clientes/pages/listado-clientes/listado-clientes.component';

/**
 * Configuración de rutas principales de la aplicación.
 * Define las rutas disponibles y los componentes asociados a cada una.
 * Ruta para la página de listado de usuarios.
 * Ruta para la página de creación de cuentas de clientes.
 */
export const routes: Routes = [

    { path: 'usuarios', component: ListadoUsuarioComponent },
    { path: 'creatucuenta', component: ListadoClientesComponent },

    //Descripción: Redirige cualquier ruta no definida a la página de listado de usuarios.
    { path: '**', redirectTo: 'usuarios', pathMatch: 'full' },
];