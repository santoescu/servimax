import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../dataservice/cliente';
import { DataService } from './../../dataservice/data.service';
import { Router } from '@angular/router';



@Component({
	selector: 'app-add-cliente',
	templateUrl: './add-cliente.component.html',
	styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
	cliente = new Cliente();


	constructor(private dataService: DataService,
		private router: Router) { }


	save(): void {
		this.dataService.createClientes(this.cliente)
			.then(
				() => this.redirect(),
				() => console.log("Error"),
			)

	}

	redirect() {
		this.router.navigate(['./menu/clientes'])
	}
	ngOnInit() {
	}

}






