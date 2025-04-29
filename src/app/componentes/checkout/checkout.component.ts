import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [NavBarComponent, FooterComponent, CommonModule],
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService) { }
  cart: any[] = [];
  ngOnInit(): void {
    this.cart = this.cartService.getCart();  // obtener el carrito de compras
  }
  checkout() {
    if (this.cart.length > 0) {
      // obtener el historial de compras existente
      const existingHistory = JSON.parse(localStorage.getItem('purchaseHistory') || '[]');
  
      // generar nuevas entradas de historial
      const newHistory = this.cart.map(item => ({
        name: item.name,
        price: item.price,
        date: new Date().toLocaleString(),  // 当前时间
      }));
  
      // unir el historial existente con el nuevo
      const updatedHistory = [...existingHistory, ...newHistory];
  
      // guardar en localStorage
      localStorage.setItem('purchaseHistory', JSON.stringify(updatedHistory));
  
      // clear el carrito de compras
      this.cartService.clearCart();
  
      alert('🛒 ¡Gracias por tu compra!');
      this.router.navigate(['/perfil']);
    } else {
      alert('🛒 Tu carrito está vacío.');
    }
  }

}
