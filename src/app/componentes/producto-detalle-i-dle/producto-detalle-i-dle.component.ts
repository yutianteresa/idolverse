import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-detalle-i-dle',
  imports: [NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './producto-detalle-i-dle.component.html',
  styleUrl: './producto-detalle-i-dle.component.css'
})
export class ProductoDetalleIDleComponent {
  producto: any;
  quantity = 1;

  products = [
    {
      id: 1, 
      name: 'Lightstick de (G)I-DLE Oficial version 1', 
      price: 35.99, image: 'https://ae01.alicdn.com/kf/S66863cc78ec04f61a6cf9fa63f298e90M.jpg',
      description: 'La barra de luz oficial de (G)I-DLE de versión 1 es un accesorio imprescindible para los verdaderos fans. Con un diseño elegante y moderno, este lightstick cuenta con una luz brillante y colorida que ilumina el ambiente en cada concierto. Además, su tamaño compacto lo hace fácil de llevar a cualquier lugar. ¡No te pierdas la oportunidad de tenerlo en tu colección! Solo para nevies (Neverland)!'
    },
    {
      id: 2,
      name: 'Lightstick de (G)I-DLE Oficial version 2',
      price: 39.99, image: 'https://kstoryespana.es/cdn/shop/files/1000002469_detail_030.jpg?v=1704572398',
      description: 'La barra de luz oficial de (G)I-DLE de versión 2 es un accesorio imprescindible para los verdaderos fans. Con un diseño elegante y moderno, este lightstick cuenta con una luz brillante y colorida que ilumina el ambiente en cada concierto. Además, su tamaño compacto lo hace fácil de llevar a cualquier lugar. ¡No te pierdas la oportunidad de tenerlo en tu colección! Solo para nevies (Neverland)!'
    },
    {
      id: 3,
      name: '2 (G)I-DLE 2ND FULL ALBUM Black ver.', 
      price: 29.99, image: 'https://nolae.es/cdn/shop/files/gi-dle-2-2nd-full-album-nolae-806138.jpg?v=1704927790&width=1000',
      description: 'El segundo álbum completo de (G)I-DLE, titulado "2", es una obra maestra musical que muestra la evolución y madurez del grupo. "Wife", "Super Lady" y "Fate son las canciones más clásicas."'
    },
    {
      id: 4,
      name: 'I SWAY (G)I-DLE 7TH MINI ALBUM Random ver.',
      price: 29.99,
      image: 'https://nolae.es/cdn/shop/files/sway__95462.webp?v=1718087632&width=1200',
      description:
      'El séptimo mini álbum de (G)I-DLE, titulado "I SWAY", es una colección de canciones que reflejan la versatilidad y el talento del grupo. Las canciones más clásicas son "Klaxon", "Last Forever", "Bloom"y "Neverland" (como el nombre de fan).'
    },
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.producto = this.products.find(p => p.id === id);
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
