import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,interval, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserMaster} from '../app.service';
import { DataService } from './../dataservice/data.service';
import { TiempoLaborado } from '../dataservice/tiempo-laborado';
import { Trabajador } from '../dataservice/trabajador';
import * as moment from 'moment';
import 'moment/locale/bo';




@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  tiempo = "";

  segundos = 0;

  minutos = 0;

  horas = 0;

  fecha = new Date();
  

  usuarioLog : string;
  message: string;
  editMessage: string;

  trabajadorJSON = localStorage.getItem('email');
  trabajador : Trabajador;
  nombre: string;

  dia: number;
  mes: number;
  anio: number;

  horaSalida: number;
  minutoSalida: number;


  prueba: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private usuarioM: UserMaster, private dataService: DataService) {
     this.usuarioLog = usuarioM.getUsuario();
     this.dia = this.fecha.getDate();
     this.mes = this.fecha.getMonth()+1;
     this.anio = this.fecha.getFullYear();

     this.trabajador = JSON.parse(this.trabajadorJSON);

     this.nombre = this.trabajador.Nombres + " " + this.trabajador.Primer_Apellido;
  }

  ngOnInit() {
    this.usuarioM.customMessage.subscribe(msg => this.message = msg);
    var contador = interval(1000); //Una vez cada un segundo es llamada



    contador.subscribe((n) => {
      

      if(this.segundos == 60){
        this.minutos = this.minutos + 1;
        this.segundos = 0;       

      }
      if(this.minutos == 60){
        this.horas = this.horas + 1;
        this.minutos = 0;
      }

      

      this.tiempo =`${this.horas}H: ${this.minutos}M: ${this.segundos}s`;
      this.segundos = this.segundos + 1;


    })
  }

  isMenuOpen=true;
  contentMargin = 240;

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
    
    var json = localStorage.getItem('x');
    var now = new Date(json);

    var end = moment(new Date())

    var duration = moment.duration(end.diff(now));
    var hours = duration.asHours();
    

    this.dia = this.fecha.getDate();
    this.mes = this.fecha.getMonth()+1;
    this.anio = this.fecha.getFullYear();

    var fechaTrabajo = this.dia +"/"+this.mes+"/"+this.anio;

  


    
    
    this.enviarDatos(fechaTrabajo, hours);
    
  }

  onToolbarMenuToggle(){
    console.log('On toolbar toggled',this.isMenuOpen);
    this.isMenuOpen=!this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.contentMargin = 5;
    } else {
      this.contentMargin = 240;
    }
  }

 

  enviarDatos(fecha:string, horas:number): void{


    

    var tiempoLaborado = new TiempoLaborado(fecha, this.trabajador.Id_Trabajador.toString(), horas);

    console.log("horas: " + tiempoLaborado.horas)

    



    

    this.dataService.crearRegistroTabla(tiempoLaborado)
			.then(
				() => this.redirect(),
				() => console.log("Error"),
			);
  }


  enviar(cli): void {
		this.dataService.enviarMail(cli)
			.then(
				() => this.redirect(),
				() => console.log("Error"),
			)

	}

  changeMessage() {
    this.usuarioM.changeMessage(this.editMessage);
  }

  redirect() {
		this.router.navigate(['./menu/clientes'])
  }
  

}
