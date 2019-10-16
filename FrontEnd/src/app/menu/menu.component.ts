import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators'
import { DataService } from './../dataservice/data.service';
import { Cliente } from './../dataservice/cliente';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


	clientes : Cliente[]=[];

	getClientes():void{
		this.dataService.getClientes().then(clientes => this.clientes = clientes);
	}

  constructor(private dataService: DataService) { 
  this.getClientes(); 
  this.llenarOptions();
  console.log(this.clientes.length+" hola");
}

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  cedulas:number[];
  filteredOptions: Observable<string[]>;

ngOnInit() {
	this.getClientes();
	this.llenarOptions();
	console.log(this.clientes);
  	this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  llenarOptions(){
  	for (let i = 0; i < this.clientes.length; i++) {
        this.options.push(this.clientes[i].Nombres+" "+this.clientes[i].Primer_Apellido+" "+this.clientes[i].Segundo_Apellido);
       this.cedulas.push(this.clientes[i].id);
       }


     

  }






}
