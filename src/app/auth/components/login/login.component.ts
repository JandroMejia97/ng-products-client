import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

import { User } from '@utils/models/user.model';
import { JwtAuthService } from '@core/services/jwt-auth.service';
import { LoginObject } from '@utils/models/auth/login-object.model';
import { SnackbarService } from '@core/services/snackbar.service';
import { BaseAuthForm } from '@utils/classes/base-auth-form.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseAuthForm implements OnInit {

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
      console.group('LoginComponent');
      this.authService.login(this.form.value as LoginObject).subscribe(
        (response: User) => this.successResponse<User>(response),
        (error: HttpErrorResponse) => this.errorResponse(error)
      );
    }
  }

  errorResponse(errorResponse: HttpErrorResponse): void {
    console.log('LoginComponent -> errorResponse');
    const { detail } = errorResponse.error;
    this.messageService.openSnackBar(detail, 'OK', {
      panelClass: 'red-snackbar'
    });
    console.groupEnd();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
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
