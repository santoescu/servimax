import { Routes, RouterModule } from "@angular/router";

import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MenuComponent} from './menu/menu.component';
import {CalculadoraComponent} from './calculadora/calculadora.component';
import {InventarioComponent} from './inventario/inventario.component';
import {LoginGuard} from './login.guard';
import {NoLoginGuard} from './no-login.guard';
import {ListaComponent} from './usuarios/lista/lista.component';
import {RegistrarComponent} from './usuarios/registrar/registrar.component';
import {ClientesComponent} from './clientes/clientes.component';
import {RegistrocvComponent} from './registrocv/registrocv.component';
import { MailComponent } from "./mail/mail.component";
import {AddClienteComponent} from "./clientes/add-cliente/add-cliente.component";


const ROUTES: Routes = [

    { path: '', component: LoginComponent, canActivate: [NoLoginGuard]},
    { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard]},
    { path: 'menu', component: NavigationComponent, canActivate: [LoginGuard], children:[
        { path: 'transacciones', component: MenuComponent, canActivate: [LoginGuard]},
        { path: 'herramientas', component: CalculadoraComponent, canActivate: [LoginGuard]},
        { path: 'inventario', component: InventarioComponent, canActivate: [LoginGuard]},
        { path: 'usuarios', component: ListaComponent, canActivate: [LoginGuard]},
        { path: 'registrar', component: RegistrarComponent, canActivate: [LoginGuard]},
        { 
            path: 'clientes',
            children: [
                {
                    path: '',
                    component: ClientesComponent, canActivate: [LoginGuard],

                },{
                    path: 'add',
                    component: AddClienteComponent, canActivate: [LoginGuard],

                }
            ]
            
        
        },
        { path: 'registro', component: RegistrocvComponent, canActivate: [LoginGuard]},
        { path: 'mail', component: MailComponent, canActivate: [LoginGuard]},

    ]},
    { path: '**', pathMatch: 'full', redirectTo: 'login'},

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);