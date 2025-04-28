import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [NavBarComponent, FooterComponent, CommonModule],
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService) { }
  

}
