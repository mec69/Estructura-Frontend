import { environment } from "../../../environments/environment.prod";


/**
 * Servicio `ApiService`
 * 
 * Este servicio utiliza la clase `Envsystem` para obtener la URL principal
 * y realizar solicitudes HTTP a un backend o API.
 * 
 * ### Ejemplo de Uso
 * ```typescript
 * const apiService = new ApiService();
 * apiService.getData(); // Realiza una solicitud HTTP a la URL principal.
 * ```
 */

export class Envsystem {
    mainUrl: string;

    constructor() {
        this.mainUrl = environment.mainUrl;
    }
}