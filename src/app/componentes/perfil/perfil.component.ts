import { Component } from '@angular/core';
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
export class PerfilComponent {
  constructor(private auth : AuthService) { } // Constructor vacío
  isLoggedIn: boolean = false; // Estado de inicio de sesión por defecto
  
  username = ''; // Nombre de usuario por defecto
  ngOnInit() {
    this.auth.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status; // Actualiza el estado de inicio de sesión
    
      if (status) {
        this.username = localStorage.getItem('user') || ''; // Obtiene el nombre de usuario del almacenamiento local
      }
    });
      this.auth.checkLoginStatus();
    }


    //userName: string = ''; // Nombre de usuario por defecto
    //userEmail: string = ''; // Correo electrónico por defecto
    //userTelefono: string = ''; // Teléfono por defecto
    //userDireccion: [calleNombre: string, numeroCasa: string, municipio: string, provincia: string, pais: string] = ['', '', '', '', '', ]; // Dirección por defecto
}
