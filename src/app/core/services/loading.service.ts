import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { matDialogConfig } from '@utils/consts/mat-dialog-config.const';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  dialogRef?: MatDialogRef<any | LoadingSpinnerComponent>;

  constructor(
    private dialog: MatDialog,
  ) { }

  openLoading<T>(
    componentType: ComponentType<T | LoadingSpinnerComponent> =  LoadingSpinnerComponent,
    config: MatDialogConfig = {}
  ): MatDialogRef<T | LoadingSpinnerComponent> {
    Object.assign(config, matDialogConfig);
    this.dialogRef = this.dialog.open(componentType, config);
    return this.dialogRef;
  }

  closeAllLoading(): void {
    this.dialog.closeAll();
  }
}
