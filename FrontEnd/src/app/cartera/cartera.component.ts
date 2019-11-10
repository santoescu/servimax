import { Component, OnInit } from '@angular/core';
import { Cartera } from './../dataservice/cartera';
import { DataService } from './../dataservice/data.service';

export interface Transaction {
  nombre: string;
  fecha: string;
  compra: number;
  venta: number;
  ganancia:number;
}



@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.css']
})
export class CarteraComponent implements OnInit {
	carteras: Cartera[]=[];
	transactions: Transaction[] = [];

	displayedColumns = ['nombre', 'fecha','compra','venta','ganancia'];
  

  async getCarteras(){
		await this.dataService.getCarteras().then(cartera => this.carteras = cartera);
	}

  constructor(private dataService: DataService) { 

  }

  
  async ngOnInit() {
     await this.getCarteras();
     this.llenarDatos();
 }

   getTotalCompra() {
    return this.transactions.map(t => t.compra).reduce((acc, value) => acc + value, 0);
  }
  getTotalGanancia() {
    return this.transactions.map(t => t.ganancia).reduce((acc, value) => acc + value, 0);
  }
  getTotalVenta() {
    return this.transactions.map(t => t.venta).reduce((acc, value) => acc + value, 0);
  }

  llenarDatos(){ 
   
    this.transactions=[];
   for (let i = 0; i < this.carteras.length; i++) {
        this.transactions.push({nombre: this.carteras[i].Nombre, fecha: this.carteras[i].Fecha, compra: this.carteras[i].Precio_De_Compra, venta: this.carteras[i].Precio_De_Venta,ganancia: this.carteras[i].Ganacia});
    }
  }

}
