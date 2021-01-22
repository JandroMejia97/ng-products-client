import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: () => `Este campo es requerido.`,
  minlength: ({ requiredLength, actualLength}: any) => `
    Se esperaban al menos ${requiredLength} caracteres,
     pero solo hay ${actualLength}.
  `,
  maxlength: ({ requiredLength, actualLength}: any) => `
    Se esperaban a lo sumo ${requiredLength} caracteres,
     pero hay ${actualLength}.
  `,
  min: ({min, actual}: any) => `
    Se esperaba un valor mayor o igual a ${min}, pero se
     ingresó ${actual}.
  `,
  max: ({max, actual}: any) => `
    Se esperaba un valor menor o igual a ${max}, pero se
     ingresó ${actual}.
  `,
  requiredtrue: () => `
    Es necesario que marque esta casilla.
  `,
  pattern: ({requiredPattern, actualValue}: any) => `
    El valor '${actualValue}' no coincide con el patrón ${requiredPattern}.
  `
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});
