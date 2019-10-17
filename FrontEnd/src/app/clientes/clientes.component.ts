import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Cliente } from './../dataservice/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	clientes : Cliente[];

	getClientes():void{
		this.dataService.getClientes().then(clientes => this.clientes = clientes);
	}

  delete(cli):void{
    this.dataService.deleteClientes(cli.id);
    this.clientes = this.clientes.filter(a => a !== cli);
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
  	this.getClientes();
  	console.log(this.clientes);
  }

}
