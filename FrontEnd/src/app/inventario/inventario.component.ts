import { Component, OnInit } from '@angular/core';
import {InventarioService, Producto} from '../app.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  productos: Producto[]=[];

  constructor(private _inventarioService: InventarioService) { 
    this.productos = this._inventarioService.getProductos();
  }


}
