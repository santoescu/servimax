import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Producto } from './../dataservice/producto';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  id: string;
  id_transaccion: string;
  nombre: string;
  precioC: number;
  tipo: string;
}

var ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  prdouctos: Producto[] = [];

  producto= new Producto();

  displayedColumns: string[] = ['Código', 'Transacción', 'Nombre', 'Precio', 'Tipo'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  async getClientes() {
    await this.dataService.getProductos().then(productos => this.prdouctos = productos);
  }

  delete(cli): void {
    // this.dataService.deleteClientes(cli.id);
    // this.clientes = this.clientes.filter(a => a !== cli);
  }


  constructor(private dataService: DataService, private router: Router) {



  }
  redirect() {
    this.router.navigate(['./menu/clientes']);
  }

  async ngOnInit() {
    await this.getClientes();
    this.llenarDatos();
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  }

  llenarDatos() {
    console.log(this.prdouctos.length);
    ELEMENT_DATA = [];
    for (let i = 0; i < this.prdouctos.length; i++) {
      console.log(this.prdouctos.length);
      ELEMENT_DATA.push({ id: this.prdouctos[i].Id_Producto, id_transaccion: this.prdouctos[i].ID_Transaccion, nombre: this.prdouctos[i].Nombre, precioC: this.prdouctos[i].Precio_De_Compra, tipo: this.prdouctos[i].Tipo });
    }
  }

}