import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-neveland-zone',
  imports: [NavBarComponent, FooterComponent, CommonModule, RouterLink],
  standalone: true,
  templateUrl: './neveland-zone.component.html',
  styleUrl: './neveland-zone.component.css'
})
export class NevelandZoneComponent {
  constructor(private cartService: CartService) {}
  addToCart(producto : any) {
    this.cartService.addToCart(producto);
    alert('🛒 ¡Producto añadido al carrito!');
  }

  // Lista de productos
  products = [
    {id: 1, name: 'Lightstick de (G)I-DLE Oficial version 1', price: 35.99, image: 'https://ae01.alicdn.com/kf/S66863cc78ec04f61a6cf9fa63f298e90M.jpg'},
    {id: 2, name: 'Lightstick de (G)I-DLE Oficial version 2', price: 39.99, image: 'https://kstoryespana.es/cdn/shop/files/1000002469_detail_030.jpg?v=1704572398'},
    {id: 3, name: '2 (G)I-DLE 2ND FULL ALBUM Black ver.', price: 29.99, image: 'https://nolae.es/cdn/shop/files/gi-dle-2-2nd-full-album-nolae-806138.jpg?v=1704927790&width=1000'},
    {id: 4, name: 'I SWAY (G)I-DLE 7TH MINI ALBUM Random ver.', price: 29.99, image: 'https://nolae.es/cdn/shop/files/sway__95462.webp?v=1718087632&width=1200'},
  ];

  imagenesAnuncios = [
    { src: 'assets/img/i_sway.jpg', alt: 'I SWAY' },
    { src: 'assets/img/glow_up.jpg', alt: 'GLOW UP' },
    { src: 'assets/img/radio_dum_dum.jpg', alt: 'Radio (Dum-Dum)' },
    { src: 'assets/img/her.jpg', alt: 'HER' },
    { src: 'assets/img/yuq1.jpg', alt: 'YUQ1' }
  ];

  currentPage = 1;
  itemsPerPage = 4; // Number of items to display per page

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
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
  get pagedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }
}
