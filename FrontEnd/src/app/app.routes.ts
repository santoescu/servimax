import { Routes, RouterModule } from "@angular/router";

import {MenuComponent} from './menu/menu.component';
import {CalculadoraComponent} from './calculadora/calculadora.component';
import {InventarioComponent} from './inventario/inventario.component';

const ROUTES: Routes = [

    { path: 'transacciones', component: MenuComponent},
    { path: 'herramientas', component: CalculadoraComponent},
    { path: 'inventario', component: InventarioComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'transacciones'}

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);