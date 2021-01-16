import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { Link } from '@core/models/link.model';
import { SidenavMode } from '@core/enums/sidenav-mode.enum';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {
  private isLargeScreen!: boolean;
  public mode: SidenavMode = SidenavMode.SIDE;
  public fixedTopGap = 64;
  public links: Link[] = [
    {
      icon: 'article',
      name: 'Productos',
      route: '/products',
    },
    {
      icon: 'inventory_2',
      name: 'Marcas',
      route: '/brands',
    },
    {
      icon: 'category',
      name: 'Categorías',
      route: '/categories',
    }
  ];
  @Input() public openedSideBar = false;
  @Output()
  private toggleEmitter = new EventEmitter<boolean>();
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
        this.breakpointObserver.observe('(min-width: 768px)').subscribe(result => {
          this.isLargeScreen = result?.matches;
          this.sideNav.disableClose = !this.isLargeScreen;
          this.mode = this.isLargeScreen ? SidenavMode.SIDE : SidenavMode.OVER;
          this.isLargeScreen ? this.sideNav.open() : this.sideNav.close();
       });
      }
    );
    this.breakpointObserver.observe('(min-width: 600px)').subscribe(result => {
      this.fixedTopGap = result?.matches ? 64 : 56;

   });
  }

  openedChange($event: boolean): void {
    if (!this.isLargeScreen) {
      this.openedSideBar = $event;
      this.toggleEmitter.emit($event);
    }
  }

  get isOverMode(): boolean {
    return this.mode === SidenavMode.OVER;
  }

}
