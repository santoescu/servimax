import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './../dataservice/data.service';
import { Trabajador } from './../dataservice/trabajador';
import { UserMaster} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  trabajadores : Trabajador[];

  message: string;
  editMessage: string;

  getTrabajadores():void{
    this.dataService.getTrabajadores().then(trabajadores => this.trabajadores = trabajadores);
  }

  constructor(private router: Router, private dataService: DataService, private usuarioM: UserMaster) { }

  ngOnInit() {
    this.usuarioM.customMessage.subscribe(msg => this.message = msg);
  }

  login(form: NgForm) {

    trabajadores : this.getTrabajadores();

      for (let i = 0; i < this.trabajadores.length; i++) {
        if(form.value.email === this.trabajadores[i].Mail && form.value.password === this.trabajadores[i].Clave ){
          this.usuarioM.setUsuario(this.trabajadores[i].Nombres);
          localStorage.setItem('email', form.value.email);
          this.router.navigate(['/menu']);

          this.usuarioM.changeMessage(this.trabajadores[i].Nombres);
        }
      }
  }

}
