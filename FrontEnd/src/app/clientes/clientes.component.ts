import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


	clientes : Object[] = [
	{
		id : '1',
		descripcion : 'cliente 1'
	},
	{
		id : '2',
		descripcion : 'cliente 2'
	},

	{
		id : '3',
		descripcion : 'cliente 3'
	},


	]

  constructor() { }

  ngOnInit() {
  }

}
