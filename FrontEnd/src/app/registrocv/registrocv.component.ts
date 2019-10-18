import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Cliente} from './../dataservice/cliente';
import { Transaccion} from './../dataservice/transaccion';

@Component({
  selector: 'app-registrocv',
  templateUrl: './registrocv.component.html',
  styleUrls: ['./registrocv.component.css']
})
export class RegistrocvComponent implements OnInit {

  clientes : Cliente[];

  transaccion : Transaccion[];

	getClientes():void{
		this.dataService.getClientes().then(clientes => this.clientes = clientes);
  }
  
  getTransacciones():void{
    this.dataService.getTransacciones().then(transaccion => this.transaccion = transaccion);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getClientes();
    this.getTransacciones();

  }
}
