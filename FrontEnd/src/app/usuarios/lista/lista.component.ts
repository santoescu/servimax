import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
	lista : Object[] = [
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
