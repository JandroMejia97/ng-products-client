import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette as MatThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode as MatProgressSpinnerMode } from '@angular/material/progress-spinner';

import { ThemePalette } from '@utils/enums/theme-palette.enum';
import { ProgressSpinnerMode } from '@utils/enums/progress-spinner-mode.enum';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() diameter = 25;
  @Input() value?: number;
  @Input() strokeWidth?: number;
  @Input() message = 'Por favor espere...';
  @Input() color: MatThemePalette = ThemePalette.PRIMARY;
  @Input() mode: MatProgressSpinnerMode = ProgressSpinnerMode.INDETERMINATE;

  constructor() { }

  ngOnInit(): void {
  }

}
