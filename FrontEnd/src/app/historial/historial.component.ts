import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';

import { Router } from '@angular/router';
import { Transaccion } from '../dataservice/transaccion';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  clientes: Transaccion[] = [];

  compras: Transaccion[] = [];
  ventas: Transaccion[] = [];
  empenios: Transaccion[] = []

  getClientes(): void {
    this.dataService.getTransacciones().then(clientes => this.clientes = clientes);
  }

  getCompras():void{

    this.getClientes();
    
  }

  
  constructor(private dataService: DataService,
    private router: Router) {
      this.getCompras();
     }

  redirect() {
    this.router.navigate(['./menu/clientes'])
  }



  ngOnInit() {
    this.getCompras();
    

  }

}