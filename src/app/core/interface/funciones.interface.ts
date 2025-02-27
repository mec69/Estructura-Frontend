/**

 * Esta interfaz define la estructura de un objeto de tipo `Usuario`, que representa
 * a un usuario en el sistema. Incluye propiedades básicas como `id`, `nombre`, `email`,
 * y `rol`.
 
 */
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: 'admin' | 'user';
}