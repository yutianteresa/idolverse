import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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



  constructor(private route: ActivatedRoute, private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.http
      .get<any[]>('/data/producto_merch.json')
      .pipe(map(merch => merch.find(m => m.id === id)))
      .subscribe(producto => {
        this.producto = producto;
      });
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