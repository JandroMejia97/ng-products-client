import { HttpErrorResponse } from '@angular/common/http';

export interface BasicForm {
  validForm(): boolean;
  submitForm(): void;
  successResponse<T>(response: T): void;
  errorResponse(errorResponse: HttpErrorResponse): void;
}
