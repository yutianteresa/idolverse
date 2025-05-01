import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle-merch',
  imports: [NavBarComponent, FooterComponent, CommonModule],
  standalone: true,
  templateUrl: './producto-detalle-merch.component.html',
  styleUrls: ['./producto-detalle-merch.component.css']
})
export class ProductoDetalleMerchComponent implements OnInit {
  producto: any;
  quantity = 1;

  productos = [
    {
      id: 1,
      name: 'Lightstick de BLACKPINK Oficial', 
      price: 22.99, 
      image: 'https://img2.miravia.es/g/fb/kf/E99b488465a4249e6a5971770b0526b5ep.jpg_720x720q75.jpg_.webp',
      description: 'La barra de luz oficial de BLACKPINK para BLINKs.'
    },
    {
      id: 2,
      name: 'Lightstick de BTS Oficial',
      price: 19.99,
      image: 'https://m.media-amazon.com/images/I/416v48LVeOL._AC_SX679_.jpg',
      description: 'La barra de luz oficial de BTS para Aramys.'
    },
    {
      id: 3, 
      name: 'Lightstick de BIGBANG Oficial VIP', 
      price: 29.99, 
      image: 'https://cokodive.com/cdn/shop/files/BIGBANG_LIGHT_STICK_5c9b4916-3975-46e2-9bca-d36ba8edd8e6_5000x.png?v=1742542837',
      description: 'La barra de luz oficial de BIGBANG para VIPs.'
    }
  ]

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.producto = this.productos.find(p => p.id === id);
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(producto: any) {
    this.cartService.addToCart(producto);
    alert('🛒 ¡Producto añadido al carrito!');
  }
}