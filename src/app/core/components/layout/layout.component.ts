import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public openedSideBar = false;

  openedChange($event: boolean): void {
    this.openedSideBar = $event;
  }

}
