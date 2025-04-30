import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-merch-oficial',
  imports: [NavBarComponent, FooterComponent, CommonModule],
  standalone: true,
  templateUrl: './merch-oficial.component.html',
  styleUrls: ['./merch-oficial.component.css']
})
export class MerchOficialComponent {
  productos = [
    {id: 1, name: 'Lightstick de BLACKPINK Oficial', price: 22.99, image: 'https://img2.miravia.es/g/fb/kf/E99b488465a4249e6a5971770b0526b5ep.jpg_720x720q75.jpg_.webp'},
    {id: 2, name: 'Lightstick de BTS Oficial', price: 19.99, image: 'https://m.media-amazon.com/images/I/416v48LVeOL._AC_SX679_.jpg'},
    {id: 3, name: 'Lightstick de BIGBANG Oficial VIP', price: 29.99, image: 'https://cokodive.com/cdn/shop/files/BIGBANG_LIGHT_STICK_5c9b4916-3975-46e2-9bca-d36ba8edd8e6_5000x.png?v=1742542837' }
  ]
  constructor(private cartService: CartService) {}
  addToCart(merch : any) {
    this.cartService.addToCart(merch);
    alert('🛒 ¡Producto añadido al carrito!');
  }
  currentPage = 1;
  itemsPerPage = 4; // Number of items to display per page

  get paginatedMerch() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.productos.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.productos.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  get pagedMerch() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.productos.slice(start, start + this.itemsPerPage);
  }
}
