import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./componentes/nav-bar/nav-bar.component";
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from "./componentes/home/home.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'idolverse';
}
