import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SetHeadersInterceptor } from './interceptors/set-headers.interceptor';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: SetHeadersInterceptor, multi: true }],
    [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
  ]
})
export class CoreModule { }
