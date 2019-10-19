import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Cliente } from './../dataservice/cliente';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
    Id_Cliente : string;
    Primer_Apellido : string;
    Segundo_Apellido : string;
    Nombres : string;
    Id_Admin : number;
    Celular : string;
    Mail : string;
    Sexos : string;
    Sexo : string;
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

   delete(cli){
    
  this.dataService.deleteClientes(cli.cedula);
    
     this.clientes = this.clientes.filter(a => a !== cli);
     this.redirect();
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
		this.router.navigate(['./menu/clientes']);
	}

  async ngOnInit() {
     await this.getClientes();
     this.llenarDatos();
     this.dataSource=new MatTableDataSource(ELEMENT_DATA);

}

  llenarDatos(){ 
    
    ELEMENT_DATA=[];
   for (let i = 0; i < this.clientes.length; i++) {
        ELEMENT_DATA.push({Id_Cliente: this.clientes[i].Id_Cliente, Nombres: this.clientes[i].Nombres, Primer_Apellido: this.clientes[i].Primer_Apellido, Segundo_Apellido: this.clientes[i].Segundo_Apellido,Mail: this.clientes[i].Mail,celular: this.clientes[i].Celular});
    }
  }
   
}