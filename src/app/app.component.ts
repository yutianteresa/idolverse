import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./componentes/nav-bar/nav-bar.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'idolverse';
}
