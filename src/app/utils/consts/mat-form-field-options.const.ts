import { InjectionToken } from '@angular/core';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';

export const matFormFieldOptions: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

export const MAT_FORM_FIELD_OPTIONS = new InjectionToken('MAT_FORM_FIELD_OPTIONS', {
  providedIn: 'root',
  factory: () => matFormFieldOptions
});
