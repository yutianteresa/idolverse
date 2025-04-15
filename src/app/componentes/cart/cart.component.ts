import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito',
  imports: [NavBarComponent, FooterComponent, CartService],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CarritoComponent {
  cart: any[] = [];

  constructor(private cartService: CarritoComponent, private router: Router) {
    this.cart = this.cartService.getCart();
  }

  removeItem(index: number) {
    this.cartService.removeFromCarrit(index);
    this.cart = this.cartService.getCart(); // Actualizar vista
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }

  checkout() {
    if (this.cart.length > 0) {
      this.router.navigate(['/checkout']);
    } else {
      alert('🛒 Tu carrito está vacío.');
    }
  }
}

