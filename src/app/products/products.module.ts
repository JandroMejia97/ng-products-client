import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
