import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

import { InputField } from '@utils/models/input-field.model';
import { JwtAuthService } from '@core/services/jwt-auth.service';
import { SnackbarService } from '@core/services/snackbar.service';
import { BaseAuthForm } from '@utils/classes/base-auth-form.class';
import { LoginObject } from '@utils/models/auth/login-object.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends BaseAuthForm implements OnInit {
  emailInputField: InputField = {
    value: '',
    type: 'email',
    required: true,
    label: 'Correo electrónico',
    formControlName: 'email',
    placeholder: 'Ingrese un correo',
    errorMessages: {}
  };
  constructor(
    protected router: Router,
    protected formBuilder: FormBuilder,
    protected authService: JwtAuthService,
    protected messageService: SnackbarService
  ) {
    super(router, formBuilder, authService, messageService);
  }

  submitForm(): void {
    if (this.validForm()) {
      console.group('SigninComponent');
      this.authService.signin(this.form.value as LoginObject).subscribe(
        (response: any) => this.successResponse<any>(response),
        (error: HttpErrorResponse) => this.errorResponse(error)
      );
    }
  }

  errorResponse(errorResponse: HttpErrorResponse): void {
    console.log('LoginComponent -> errorResponse');
    const { error } = errorResponse;
    for (const key in error) {
      if (error.hasOwnProperty(key)) {
        const inputs: InputField[] = [this.usernameInputField, this.emailInputField, this.passwordInputField];
        const input: InputField | undefined = inputs.find((ele: InputField) => ele.formControlName === key);
        if (input) {
          input.errorMessages[`${key}ServerError`] = () => error[key][0];
          const tag: any = {};
          tag[`${key}ServerError`] = true;
          this.form.get(key)?.setErrors(tag);
        }
      }
    }
    this.form.updateValueAndValidity();
    console.groupEnd();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      username: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?!^\d+$)^.+$/)
      ]]
    });
  }

}
