import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-perfil',
  imports: [CommonModule, NavBarComponent, FooterComponent],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  constructor(private auth : AuthService) { } // Constructor vacío
  isLoggedIn: boolean = false; // Estado de inicio de sesión por defecto
  
  username = ''; // Nombre de usuario por defecto
  userEmail = ''; // Correo electrónico por defecto
  address = ''; // Dirección por defecto
  ngOnInit() {
    this.auth.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status; // Actualiza el estado de inicio de sesión
    
      if (status) {
        this.username = localStorage.getItem('user') || ''; // Obtiene el nombre de usuario del almacenamiento local
        this.address = localStorage.getItem('address') || '';
        this.userEmail = localStorage.getItem('email') || ''; // Obtiene el correo electrónico del almacenamiento local
        this.
      }
    });
    this.auth.checkLoginStatus();
    }
    logout() {
      this.auth.logout(); // Llama al método de cierre de sesión del servicio de autenticación
    }
    history
}
