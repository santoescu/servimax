import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Router } from '@angular/router';
import { TiempoLaborado } from '../dataservice/tiempo-laborado';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {


  trabajadores: TiempoLaborado[] = [];

  trabajador = new TiempoLaborado();

  getTrabajadores(): void {
    this.dataService.getTiempos().then(trabajadores => this.trabajadores = trabajadores);
  }

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getTrabajadores();
  }


}





