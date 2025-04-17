import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  getCart() {
    return this.cart.getValue();
  }

  addToCart(item: any) {
    const currentCart = this.getCart();
    this.cart.next([...currentCart, item]);
  }

  removeFromCart(index: number) {
    const currentCart = this.getCart();
    currentCart.splice(index, 1);
    this.cart.next([...currentCart]);
  }

  clearCart() {
    this.cart.next([]);
  }
}