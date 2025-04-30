import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AlbumComponent } from './componentes/album/album.component';
import { CarritoComponent } from './componentes/cart/cart.component';
import { CartService } from './services/cart.service';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { NevelandZoneComponent } from './componentes/neveland-zone/neveland-zone.component';
import { MerchOficialComponent } from './componentes/merch-oficial/merch-oficial.component';
import { CheckoutComponent } from './componentes/checkout/checkout.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { LoginComponent } from './componentes/cuenta-login/cuenta-login.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'albumes', component: AlbumComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: 'neverland', component: NevelandZoneComponent},
    {path: 'merchandising', component: MerchOficialComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'cart-service', component: CartService},
    {path: 'nav-bar', component: NavBarComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'login', component: LoginComponent}
];
