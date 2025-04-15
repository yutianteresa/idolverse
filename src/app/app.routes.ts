import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AlbumComponent } from './componentes/album/album.component';
import { CarritoComponent } from './componentes/cart/cart.component';
import { NevelandZoneComponent } from './componentes/neveland-zone/neveland-zone.component';
import { MerchOficialComponent } from './componentes/merch-oficial/merch-oficial.component';
import { EnviosYSoporteComponent } from './componentes/envios-y-soporte/envios-y-soporte.component';
import { CheckoutComponent } from './componentes/checkout/checkout.component';
import { CartService } from './services/cart.service';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'albumes', component: AlbumComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: 'neverland', component: NevelandZoneComponent},
    {path: 'merchandising', component: MerchOficialComponent},
    {path: 'envios-y-soporte', component: EnviosYSoporteComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'cart-service', component: CartService}
];
