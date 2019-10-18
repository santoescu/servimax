import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Cliente } from './../dataservice/cliente';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientes : Cliente[]=[];
  
  cliente = new Cliente();


	getClientes():void{
		this.dataService.getClientes().then(clientes => this.clientes = clientes);
	}

  delete(cli):void{
    this.dataService.deleteClientes(cli.id);
    this.clientes = this.clientes.filter(a => a !== cli);
  }

  enviar(cli): void {
		this.dataService.enviarMail(cli)
			.then(
				() => this.redirect(),
				() => console.log("Error"),
			)

	}
  constructor(private dataService: DataService,
		private router: Router) { }

  redirect() {
		this.router.navigate(['./menu/clientes'])
	}

  ngOnInit() {
  	this.getClientes();
  	
  }

}
