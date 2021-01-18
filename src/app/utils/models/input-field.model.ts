import { MatFormFieldAppearance } from '@angular/material/form-field';

import { FormFieldAppearance } from '@utils/enums/form-field-appearance.enum';

export class InputField {
  type = 'text';
  label?: string;
  required = false;
  placeholder = '';
  errorMessages?: any[] = [];
  formControlName: string | number | null = null;
  value?: string | number | undefined | null = '';
}
