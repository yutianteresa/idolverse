import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, NavBarComponent, FooterComponent, FormsModule],
  standalone: true,
  templateUrl: './cuenta-login.component.html',
  styleUrl: './cuenta-login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  registerUsername = '';
  registerPassword = '';
  registerEmail = '';
  registerTelefono = '';
  registerDireccion = {
    calleNombre: '',
    numeroCasa: '',
    municipio: '',
    provincia: '',
    pais: ''
  };
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.username.trim()) {
      this.auth.login(this.username);
      this.router.navigate(['./idolverse/src/app/componentes/perfil/perfil.component.html']);
    } else {
      alert('Por favor, introduce usuario y contraseña.');
    }
  }
  signIn() {
    if (this.registerUsername.trim() && this.registerPassword.trim()) {
      localStorage.setItem('user', JSON.stringify(this.registerUsername));
      localStorage.setItem('email', JSON.stringify(this.registerEmail));
      localStorage.setItem('telefono', JSON.stringify(this.registerTelefono));
      localStorage.setItem('direccion', JSON.stringify(this.registerDireccion));
      alert('Usuario registrado con éxito. Ahora puedes iniciar sesión.');
    } else {
      alert('Por favor, introduce un nombre de usuario y una contraseña.');
    }
  }
}
