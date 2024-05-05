import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutomovilComponent } from './automovil/automovil.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"autos", component:AutomovilComponent},
    {path: "contacto" , component: ContactoComponent},
    {path: 'buscador/:nombreA', component: SearchComponent},
    {path: "**", pathMatch:"full" ,redirectTo:"home"},
];
