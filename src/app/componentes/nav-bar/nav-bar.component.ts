import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarritoComponent } from '../cart/cart.component';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterOutlet, CarritoComponent, CheckoutComponent],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent { 
  // Aquí puedes agregar propiedades y métodos que necesites para la lógica de tu componente
  // Por ejemplo, puedes tener un array de productos o una función para manejar el carrito de compras
  cart: any[] = [];

  constructor() {}

  addToCart(item: any) {
    this.cart.push(item);
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }

  checkout() {
    if (this.cart.length > 0) {
      alert('🛒 ¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.');
    } else {
      alert('🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra.');
    }
  }
  
}
