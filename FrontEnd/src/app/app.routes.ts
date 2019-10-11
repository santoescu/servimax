import { Routes, RouterModule } from "@angular/router";

import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MenuComponent} from './menu/menu.component';
import {CalculadoraComponent} from './calculadora/calculadora.component';
import {InventarioComponent} from './inventario/inventario.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import {ListaComponent} from './usuarios/lista/lista.component';
import {RegistrarComponent} from './usuarios/registrar/registrar.component';

const ROUTES: Routes = [

    { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard]},
    { path: 'home', component: NavigationComponent},
    { path: 'transacciones', component: MenuComponent, canActivate: [LoginGuard]},
    { path: 'herramientas', component: CalculadoraComponent, canActivate: [LoginGuard]},
    { path: 'inventario', component: InventarioComponent, canActivate: [LoginGuard]},
    { path: 'usuarios', component: ListaComponent},
	{ path: 'registar', component: RegistrarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'login'},

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);