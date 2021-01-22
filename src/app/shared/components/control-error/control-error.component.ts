import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'error-message',
  template: `
    <div class="ng-trigger ng-trigger-transitionMessages" style="opacity: 1; transform: translateY(0%);">
      <mat-error *ngIf="!hide">
        {{ errorMessage }}
      </mat-error>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlErrorComponent {
  errorMessage?: string;
  hide = true;
  @Input() type!: string;
  @Input() set message(value: string) {
    if (value !== this.errorMessage) {
      this.errorMessage =  value;
      this.hide = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }

}
