import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { CartService } from "../../services/cart.service";
@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  constructor(private cartService: CartService) {}
  addAlbumToCart(album: any) {
  this.cartService.addToCart(album);
}
  products = [
    { id: 1, name: 'STRATEGY', artist: 'TWICE', price: 24.99, image: 'https://i.scdn.co/image/ab67616d0000b273acf8ff27be32aec99d6c99a0' },
    { id: 2, name: 'BORN PINK', artist: 'BLACKPINK', price: 29.99, image: 'https://i.scdn.co/image/ab67616d0000b2734aeaaeeb0755f1d8a8b51738' },
    { id: 3, name: 'LOVE YOURSELF: TEAR', artist: 'BTS', price: 19.99, image: 'https://m.media-amazon.com/images/I/41QNZfd7koL._UF894,1000_QL80_.jpg' },
    { id: 4, name: 'THE ALBUM', artist: 'BLACKPINK', price: 28.99, image: 'https://img.joomcdn.net/af62c7ecbf84e6d942ebd33cc309434ae29c1f5b_original.jpeg' },
    { id: 5, name: 'MAP OF THE SOUL: 7', artist: 'BTS', price: 34.99, image: 'https://nolae.es/cdn/shop/products/bts-map-of-the-soul-7-624284.jpg?v=1616539684&width=400' },
  ]
  currentPage = 1;
  itemsPerPage = 4; // Number of items to display per page

  get pagedAlbums() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }
  get paginatedAlbums() {
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
}
