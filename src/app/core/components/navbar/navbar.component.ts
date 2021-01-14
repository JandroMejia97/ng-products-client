import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output()
  private toggleEmitter = new EventEmitter<boolean>();
  @Input()
  public openedSideBar = false;

  constructor() { }

  openedChange($event: boolean): void {
    this.toggleEmitter.emit($event);
  }

}
