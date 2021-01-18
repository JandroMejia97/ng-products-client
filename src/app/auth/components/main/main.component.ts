import { Component } from '@angular/core';
import { Link } from '@utils/models/link.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  links: Link[] = [
    {
      name: 'Inicio de sesión',
      route: 'login'
    },
    {
      name: 'Registrarse',
      route: 'signin'
    }
  ];

  constructor() { }

}
