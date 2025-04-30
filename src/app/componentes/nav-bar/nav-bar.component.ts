import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent { 
  cartItemCount = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cartItemCount = cart.length;
    });
  }

  goToCart() {
    this.router.navigate(['/carrito']);
  }
  
  goToProfile() {
    this.router.navigate(['/perfil']);  // Asegúrate de tener esta ruta
  }
}
