import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { matSnackbarConfig } from '@utils/consts/mat-snackbar-config.const';
import { matFormFieldOptions } from '@utils/consts/mat-form-field-options.const';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldOptions
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: matSnackbarConfig
    }
  ]
})
export class MaterialModule { }
