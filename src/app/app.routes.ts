import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AlbumComponent } from './componentes/album/album.component';
import { PreVentasYexclusivosComponent } from './componentes/pre-ventas-y-exclusivos/pre-ventas-y-exclusivos.component';
import { NevelandZoneComponent } from './componentes/neveland-zone/neveland-zone.component';
import { MerchOficialComponent } from './componentes/merch-oficial/merch-oficial.component';
import { EnviosYSoporteComponent } from './componentes/envios-y-soporte/envios-y-soporte.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'albumes', component: AlbumComponent},
    {path: 'preventas y exclusivas', component: PreVentasYexclusivosComponent},
    {path: 'neverland', component: NevelandZoneComponent},
    {path: 'merchandising', component: MerchOficialComponent},
    {path: 'envios-y-soporte', component: EnviosYSoporteComponent}
];
