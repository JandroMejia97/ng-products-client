import { InjectionToken } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

export const matDialogConfig: MatDialogConfig = {
  id: 'loading',
  hasBackdrop: true,
  disableClose: true,
  role: 'alertdialog',
};


export const MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken('MAT_DIALOG_DEFAULT_OPTIONS', {
  providedIn: 'root',
  factory: () => matDialogConfig
});
