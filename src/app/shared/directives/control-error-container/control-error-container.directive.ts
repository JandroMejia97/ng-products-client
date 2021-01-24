import {
  Host,
  Input,
  Inject,
  OnDestroy,
  Directive,
  ViewChild,
  ComponentRef,
  AfterViewInit,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

import { FORM_ERRORS } from '@utils/consts/default-errors.const';
import { ControlErrorComponent } from '@shared/components/control-error/control-error.component';
import { ControlErrorDirective } from '../control-error/control-error.directive';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[controlErrorContainer]'
})
export class ControlErrorContainerDirective implements AfterViewInit, OnDestroy {
  @Input() customErrors!: any;
  componentRef?: ComponentRef<ControlErrorComponent>;
  private subscription?: Subscription = new Subscription();
  @ViewChild(ControlErrorDirective) controlError?: ControlErrorDirective;

  get control(): NgControl {
    return this.matFormField._control.ngControl as NgControl;
  }

  constructor(
    private vcr: ViewContainerRef,
    @Inject(FORM_ERRORS) private errors: any,
    @Host() private matFormField: MatFormField,
    private resolver: ComponentFactoryResolver,
  ) {}

  ngAfterViewInit(): void {
    if (!this.customErrors) {
      this.customErrors = this.controlError ? this.controlError.customErrors : {};
    }
    this.subscription?.add(
      this.control.valueChanges?.subscribe(() => {
        this.obtainErrors();
      })
    );
    this.subscription?.add(
      this.control.statusChanges?.subscribe(() => {
        this.obtainErrors();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private obtainErrors(): void {
    const controlErrors = this.control?.errors;
    if (controlErrors) {
      const firstKey = Object.keys(controlErrors)[0];
      const getError = this.customErrors[firstKey] || this.errors[firstKey];
      const message = getError(controlErrors[firstKey]);
      this.setError(message);
    } else if (this.componentRef) {
      this.setError('');
    }
  }

  private setError(message: string = ''): void {
    if (!this.componentRef) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.componentRef = this.vcr.createComponent(factory);
      this.insertComponent(this.componentRef);
    }
    this.componentRef.instance.message = message;
  }

  private insertComponent(componentRef: ComponentRef<ControlErrorComponent>): void {
    const errorComponentElement = componentRef.location.nativeElement;
    const sibling: HTMLElement = errorComponentElement.previousSibling;
    const wrapper: HTMLDivElement = sibling.firstChild as HTMLDivElement;
    const subscriptWrapper: HTMLDivElement = wrapper.lastElementChild as HTMLDivElement;
    subscriptWrapper.insertBefore(errorComponentElement, subscriptWrapper.lastElementChild?.previousSibling as Node);
  }

}
