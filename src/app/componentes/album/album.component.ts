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
  ]
  
}
