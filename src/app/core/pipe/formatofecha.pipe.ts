import { Pipe, PipeTransform } from '@angular/core';

/**
     * Transforma una cadena de hora en formato HH:MM:SS a un formato más legible.
     * Si no hay valor, retorna una cadena vacía
     * @param value - La cadena de hora en formato HH:MM:SS.
     * @returns La hora formateada en formato HH:MM AM/PM.
     */

@Pipe({
    name: 'formatoHora',
})
export class FormatoHoraPipe implements PipeTransform {

    transform(value: string): string {
        if (!value) return '';

        // Divide la cadena en horas, minutos y segundos
        const [horas, minutos] = value.split(':');

        // Convierte las horas a número
        let horasNum = parseInt(horas, 10);

        // Determina si es AM o PM
        const periodo = horasNum >= 12 ? 'PM' : 'AM';

        // Convierte a formato 12 horas
        if (horasNum > 12) {
            horasNum -= 12;
        }

        // Retorna la hora formateada
        return `${horasNum}:${minutos} ${periodo}`;
    }
}