import { Directive, Host, Input, OnInit, Optional, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[matInput]'
})
export class ControlErrorDirective implements OnInit {
  @Input() customErrors!: any;

  constructor(
    @Optional() @Host() private vcr: ViewContainerRef,
  ) { }

  ngOnInit(): void { }

}
