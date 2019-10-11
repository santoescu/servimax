import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  nombre='Gizzlow';

constructor(private router: Router){

}

  getNombre(){
    return this.nombre;
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }
}
