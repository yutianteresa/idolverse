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
    { id: 3, name: 'LOVE YOURSELF: TEAR', artist: 'BTS', price: 19.99, image: 'https://i.scdn.co/image/ab67616d0000b273c4f2e5a1f8b6e7a2c9d4f3a0' },
    { id: 4, name: 'THE ALBUM', artist: 'BLACKPINK', price: 24.99, image: 'https://i.scdn.co/image/ab67616d0000b2734aeaaeeb0755f1d8a8b51738' },
    { id: 5, name: 'Armageddon', artist: 'aespa', price: 22.99, image: 'https://i.scdn.co/image/ab67616d0000b273c4f2e5a1f8b6e7a2c9d4f3a0' },
    { id: 6, name: 'rosie', artist: 'ROSÉ', price: 19.99, image: 'https://www.rosesarerosie.com/sites/g/files/g2000019111/files/2024-11/CD2_RETAIL.jpg://i.scdn.co/image/ab67616d0000b2734aeaaeeb0755f1d8a8b51738' },
    { id: 7, name: '合 (HOP)', artist: 'Stray Kids', price: 24.99, image: 'https://ipurple.eu/16429-home_default/-pre-order-stray-kids-skzhop-hiptape-hop-standard-skzhop-ver-.jpg://i.scdn.co/image/ab67616d0000b2734aeaaeeb0755f1d8a8b51738' }
  ]
}
