import { ComponentType } from '@angular/cdk/portal';
import { EmbeddedViewRef, Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

import { matSnackbarConfig } from '@utils/consts/mat-snackbar-config.const';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  openSnackBar(message: string, action: string = 'OK', config: MatSnackBarConfig = {}): MatSnackBarRef<TextOnlySnackBar> {
    Object.assign(config, matSnackbarConfig);
    return this.snackBar.open(message, action, config);
  }

  openSnackBarFromComponent<T>(component: ComponentType<T>, config: MatSnackBarConfig = {}): MatSnackBarRef<T> {
    Object.assign(config, matSnackbarConfig);
    return this.snackBar.openFromComponent<T>(component, config);
  }

  openSnackBarFromTemplate<T>(template: TemplateRef<T>, config: MatSnackBarConfig = {}): MatSnackBarRef<EmbeddedViewRef<T>> {
    Object.assign(config, matSnackbarConfig);
    return this.snackBar.openFromTemplate(template, config);
  }

  dismissSnackbar(): void {
    this.snackBar.dismiss();
  }
}
