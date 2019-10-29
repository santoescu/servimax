import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Cliente } from './../dataservice/cliente';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  cedula: string;
  nombre: string;
  primer: string;
  segundo: string;
  correo: string;
  celular: string;
}

var ELEMENT_DATA: PeriodicElement[] = [];



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientes : Cliente[]=[];
  
  cliente = new Cliente();
  displayedColumns: string[] = ['Identificacion', 'Nombres', 'Primer', 'Segundo','Correo','Celular','actions'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


	 async getClientes(){
		await this.dataService.getClientes().then(clientes => this.clientes = clientes);
	}

  delete(cli:string):void{

    this.dataService.deleteClientes(cli).then(
        () => this.redirect());
    //this.clientes = this.clientes.filter(a => a !== cli);
  }

  enviar(cli): void {
		this.dataService.enviarMail(cli)
			.then(
				() => this.redirect(),
				() => console.log("Error"),
			)

	}
  constructor(private dataService: DataService,private router: Router) { 
    
   
   
}
  redirect() {
		this.router.navigate(['./menu/clientes/add']);
	}

  async ngOnInit() {
     await this.getClientes();
     this.llenarDatos();
     this.dataSource=new MatTableDataSource(ELEMENT_DATA);
     console.log(this.clientes.length+"jaja");

}

  llenarDatos(){ 
    
    ELEMENT_DATA=[];
   for (let i = 0; i < this.clientes.length; i++) {
        ELEMENT_DATA.push({cedula: this.clientes[i].Id_Cliente, nombre: this.clientes[i].Nombres, primer: this.clientes[i].Primer_Apellido, segundo: this.clientes[i].Segundo_Apellido,correo: this.clientes[i].Mail,celular: this.clientes[i].Celular});
    }
  }
   
}