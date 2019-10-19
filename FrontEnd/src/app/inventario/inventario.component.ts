import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Producto } from './../dataservice/producto';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  id: string;
  id_transaccion: number;
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

  clientes: Producto[] = [];

  cliente = new Producto();

  displayedColumns: string[] = ['Código', 'Transacción', 'Nombre', 'Precio', 'Tipo'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  async getClientes() {
    await this.dataService.getProductos().then(clientes => this.clientes = clientes);
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
    console.log(this.clientes.length);
    ELEMENT_DATA = [];
    for (let i = 0; i < this.clientes.length; i++) {
      console.log(this.clientes.length);
      ELEMENT_DATA.push({ id: this.clientes[i].Id_Producto, id_transaccion: this.clientes[i].ID_Transaccion, nombre: this.clientes[i].Nombre, precioC: this.clientes[i].Precio_De_Compra, tipo: this.clientes[i].Tipo });
    }
  }



}





