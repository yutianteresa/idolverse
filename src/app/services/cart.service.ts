import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  standalone: true
})
export class CartService {
  private cart: any[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(item: any) {
    this.cart.push(item);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }
}