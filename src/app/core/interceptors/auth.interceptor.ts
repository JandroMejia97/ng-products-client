import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtTokenService } from '@core/services/jwt-token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.group('AuthIncerpetor');
    if (!request?.body?.hasOwnProperty('refresh')) {
      request = this.addAuthHeader(request);
    }
    console.groupEnd();
    return next.handle(request);
  }

  private addAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
    console.log('AuthIncerpetor -> addAuthHeader');
    const tokenService = this.injector.get(JwtTokenService);
    const token = tokenService.tokenValue;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer  ${token.access}`,
        }
      });
      console.log('\'Authorization\' header was added.');
    }
    return request;
  }
}
