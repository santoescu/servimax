import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	routes: Object[] = [
	{
		title: 'Transacciones',
		route: '/menu',
		icon: 'account_balance',
	},
	{
		title: 'Herramientas',
		route: '/herramientas',
		icon: 'build',
	},
	{
		title: 'Inventario',
		route: '/inventario',
		icon: 'assignment',
	},
	{
		title: 'Clientes',
		route: '/clientes',
		icon: 'group',
	},
	{
		title: 'Cerrar sesion',
		route: '/login',
		icon: 'cancel',
	},
	]

 

  ngOnInit() {}
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {

  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
}

}

