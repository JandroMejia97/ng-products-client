import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@material/material.module';

import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { PageViewerComponent } from './components/page-viewer/page-viewer.component';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { ControlErrorDirective } from './directives/control-error/control-error.directive';
import { ControlErrorContainerDirective } from './directives/control-error-container/control-error-container.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidenavComponent,
    PageBodyComponent,
    PageViewerComponent,
    ControlErrorComponent,
    ControlErrorDirective,
    ControlErrorContainerDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    LayoutComponent,
    PageBodyComponent,
    ControlErrorDirective,
    ControlErrorContainerDirective,
  ]
})
export class SharedModule { }
