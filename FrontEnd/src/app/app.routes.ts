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
import { MailComponent } from "./mail/mail.component";
import {AddClienteComponent} from "./clientes/add-cliente/add-cliente.component";
import {TrabajadoresComponent} from './trabajadores/trabajadores.component';
import {AddTrabajadorComponent} from './trabajadores/add-trabajador/add-trabajador.component';
import { HistorialComponent } from "./historial/historial.component";
import { CarteraComponent } from "./cartera/cartera.component";



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
        { path: 'mail', component: MailComponent, canActivate: [LoginGuard]},

        { path: 'historial', component: HistorialComponent, canActivate: [LoginGuard]},
        { path: 'cartera', component: CarteraComponent, canActivate: [LoginGuard]},
        

        { 
            path: 'trabajadores',
            children: [
                {
                    path: '',
                    component: TrabajadoresComponent, canActivate: [LoginGuard],
                },{
                    path: 'addTrabajadores',
                    component: AddTrabajadorComponent, canActivate: [LoginGuard]
                }
            ]
        },


    ]},
    { path: '**', pathMatch: 'full', redirectTo: 'login'},

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);