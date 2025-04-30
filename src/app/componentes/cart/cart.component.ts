import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent, CheckoutComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CarritoComponent {
  cart: any[] = [];

  constructor(private cartService: CartService, private router: Router) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(){
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }
 total = this.cart.reduce((acc, item) => acc + item.price, 0);

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.cart = this.cartService.getCart(); // Actualizar vista
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }

  checkout() {
    if (this.cart.length > 0) {
      this.router.navigate(['/checkout']); // Asegúrate de tener esta ruta
      alert('🛒 ¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.');
    } else {
      alert('🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra.');
    }
  }
  goToHome() {
    this.router.navigate(['/home']); // Asegúrate de tener esta ruta
  }
}

