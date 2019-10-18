import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Trabajador } from '../dataservice/trabajador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  trabajadores : Trabajador[]=[];
  
  trabajador = new Trabajador();

  getTrabajadores():void{
		this.dataService.getTrabajadores().then(trabajadores => this.trabajadores = trabajadores);
	}

  delete(cli):void{
    this.dataService.deleteTrabajadores(cli.id);
    this.trabajadores = this.trabajadores.filter(a => a !== cli);
  }

  constructor(private dataService: DataService,
		private router: Router) { }

  ngOnInit() {
    this.getTrabajadores();
  }

}
