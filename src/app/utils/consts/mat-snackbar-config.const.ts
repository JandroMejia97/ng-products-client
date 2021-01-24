import { InjectionToken } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@utils/enums/mat-snackbar-horizontal-position.enum';
import { MatSnackBarVerticalPosition } from '@utils/enums/mat-snackbar-vertical-position.enum';

export const matSnackbarConfig: MatSnackBarConfig = {
  duration: 5000,
  verticalPosition: MatSnackBarVerticalPosition.BOTTOM,
  horizontalPosition: MatSnackBarHorizontalPosition.CENTER,
};

export const MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken('MAT_SNACK_BAR_DEFAULT_OPTIONS', {
  providedIn: 'root',
  factory: () => matSnackbarConfig
});

