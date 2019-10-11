import { Routes, RouterModule } from "@angular/router";

import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MenuComponent} from './menu/menu.component';
import {CalculadoraComponent} from './calculadora/calculadora.component';
import {InventarioComponent} from './inventario/inventario.component';
import {RegistrarComponent} from './registrar/registrar.component';

const ROUTES: Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'home', component: NavigationComponent},
    { path: 'transacciones', component: MenuComponent},
    { path: 'herramientas', component: CalculadoraComponent},
    { path: 'inventario', component: InventarioComponent},
    {path: 'registrar',component: RegistrarComponent}
 //  { path: '**', pathMatch: 'full', redirectTo: 'login'}

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);