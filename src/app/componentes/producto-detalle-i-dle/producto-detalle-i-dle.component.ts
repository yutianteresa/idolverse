import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-producto-detalle-i-dle',
  imports: [NavBarComponent, FooterComponent, CommonModule],
  standalone: true,
  templateUrl: './producto-detalle-i-dle.component.html',
  styleUrl: './producto-detalle-i-dle.component.css'
})
export class ProductoDetalleIDleComponent {
  producto: any;
  quantity = 1;

  constructor(private route: ActivatedRoute, private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.http
      .get<any[]>('/data/producto_i-dle.json')
      .pipe(map(products => products.find(p => p.id === id)))
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
