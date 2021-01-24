import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { InputField } from '@utils/models/input-field.model';
import { JwtAuthService } from '@core/services/jwt-auth.service';
import { SnackbarService } from '@core/services/snackbar.service';
import { BasicForm } from '@utils/interfaces/basic-form.interface';

export abstract class BaseAuthForm implements BasicForm {
  usernameInputField: InputField = {
    value: '',
    type: 'text',
    required: true,
    label: 'Nombre de usuario',
    formControlName: 'username',
    placeholder: 'Ingrese su nombre de usuario',
  };
  passwordInputField: InputField = {
    value: '',
    required: true,
    type: 'password',
    label: 'Contraseña',
    formControlName: 'password',
    placeholder: 'Ingrese su contraseña',
    errorMessages: {
      pattern: ({requiredPattern, actualValue}: any) => `
        La contraseña no debe ser completamente numérica.
      `
    }
  };
  hidePassword = true;
  public form!: FormGroup;

  constructor(
    protected router: Router,
    protected formBuilder: FormBuilder,
    protected authService: JwtAuthService,
    protected messageService: SnackbarService
  ) { }

  abstract submitForm(): void;

  abstract errorResponse(errorResponse: HttpErrorResponse): void;

  successResponse<T>(response: T): void {
    this.router.navigate(['']);
    console.groupEnd();
  }

  changeTypeOfThePasswordField(): void {
    this.hidePassword = !this.hidePassword;
  }

  validForm(): boolean {
    return this.form.valid;
  }


}
