import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'footer', component: HomeComponent},
    {path: ''}
];
