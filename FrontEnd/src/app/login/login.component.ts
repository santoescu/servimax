import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './../dataservice/data.service';
import { Trabajador } from './../dataservice/trabajador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  trabajadores : Trabajador[];

  getTrabajadores():void{
    this.dataService.getTrabajadores().then(trabajadores => this.trabajadores = trabajadores);
  }

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    console.log(form.value);

    trabajadores : this.getTrabajadores();

    var centinela : false;


      for (let i = 0; i < this.trabajadores.length; i++) {
        console.log("asdfas: " + this.trabajadores[i].Clave);
        if(form.value.email === this.trabajadores[i].Mail && form.value.password === this.trabajadores[i].Clave ){
          localStorage.setItem('email', form.value.email);
          this.router.navigate(['/transacciones']);
          centinela : true;
        }
      }

      if (centinela === false) {
        console.log("inválido");
      }
  }
}
