import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.group('SetHeaders');
    request = this.setHeaders(request);
    console.groupEnd();
    return next.handle(request);
  }

  private setHeaders(request: HttpRequest<any>): HttpRequest<any> {
    console.log('SetHeaders -> setHeaders');
    request = request.clone({
      setHeaders: {
      'Content-type': 'application/json'
    }});
    console.log('\'Content-type\' header was added.');
    return request;
  }
}
