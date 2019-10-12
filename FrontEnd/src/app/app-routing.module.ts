import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component'
import { MenuComponent } from './menu/menu.component'

import { CalculadoraComponent } from './calculadora/calculadora.component'

import { InventarioComponent } from './inventario/inventario.component'
import { ClientesComponent } from './clientes/clientes.component'
import { LoginComponent } from './login/login.component'



const routes: Routes = [
	{
		path: '',
		component: NavigationComponent,
		children: [
		{
			component: MenuComponent,
			path:'menu',
		},
		{
			component: CalculadoraComponent,
			path: 'herramientas',
		},
		{
			component: InventarioComponent,
			path: 'inventario',
		},
		{
			component: ClientesComponent,
			path: 'clientes',
		},
		{
			component: LoginComponent,
			path: 'login',
		},

		]

	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutedComponents: any[] = [
	NavigationComponent,
];
