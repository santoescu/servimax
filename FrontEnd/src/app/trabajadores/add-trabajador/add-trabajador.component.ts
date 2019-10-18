import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../dataservice/trabajador';
import { DataService } from '../../dataservice/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trabajador',
  templateUrl: './add-trabajador.component.html',
  styleUrls: ['./add-trabajador.component.css']
})
export class AddTrabajadorComponent implements OnInit {
  trabajador = new Trabajador()

  constructor(private dataService: DataService,
    private router: Router) { }
    

    save(): void {
      this.dataService.createTrabajadores(this.trabajador)
        .then(
          () => this.redirect(),
          () => console.log("Error"),
        )
  
    }
    redirect() {
      this.router.navigate(['./menu/trabajadores'])
    }

  ngOnInit() {
  }

}
