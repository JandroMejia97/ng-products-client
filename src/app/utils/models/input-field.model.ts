import { MatFormFieldAppearance } from '@angular/material/form-field';

import { FormFieldAppearance } from '@utils/enums/form-field-appearance.enum';

export class InputField {
  type = 'text';
  readonly label?: string;
  required = false;
  placeholder = '';
  errorMessages?: any = {};
  readonly formControlName: string | number | null = null;
  value?: string | number | undefined | null = '';
}
