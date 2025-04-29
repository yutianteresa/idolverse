import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-neveland-zone',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './neveland-zone.component.html',
  styleUrl: './neveland-zone.component.css'
})
export class NevelandZoneComponent {
  constructor(private cartService: CartService) {}
  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    alert('🛒 ¡Producto añadido al carrito!');
  }
  // Lista de productos
  productos = [
    {id: 1, name: 'Lightstick de (G)I-DLE Oficial version 1', price: 35.99, image: 'https://ae01.alicdn.com/kf/S66863cc78ec04f61a6cf9fa63f298e90M.jpg'},
    {id: 2, name: 'Lightstick de (G)I-DLE Oficial version 2', price: 39.99, image: 'https://kstoryespana.es/cdn/shop/files/1000002469_detail_030.jpg?v=1704572398'},
    {id: 3, name: '2 (G)I-DLE 2ND FULL ALBUM Black ver.', price: 29.99, image: 'https://nolae.es/cdn/shop/files/gi-dle-2-2nd-full-album-nolae-806138.jpg?v=1704927790&width=1000'},
    {id: 4, name: 'I SWAY (G)I-DLE 7TH MINI ALBUM Random ver.', price: 29.99, image: 'https://nolae.es/cdn/shop/files/sway__95462.webp?v=1718087632&width=1200'},
  ];


}
