import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { MaterialModule } from '@material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [MainComponent, LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
