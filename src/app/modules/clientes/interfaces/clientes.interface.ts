
/**
 * Interfaz que representa la estructura de un cliente.
 * Contiene información básica como identificación, nombre, apellido, correo electrónico,
 * teléfono y dirección.
 */
export interface IClientes {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    direccion: string;
}
