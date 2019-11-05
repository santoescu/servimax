import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,interval, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserMaster} from '../app.service';
import { DataService } from './../dataservice/data.service';
import { TiempoLaborado } from '../dataservice/tiempo-laborado';
import { Trabajador } from '../dataservice/trabajador';





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
  nombre: string;

  dia: number;
  mes: number;
  anio: number;

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

     var aux: Trabajador = JSON.parse(this.trabajadorJSON);

     this.nombre = aux.Nombres + " " + aux.Primer_Apellido;
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

    var horaI = localStorage.getItem('hora');
    var minutosI = localStorage.getItem('minuto');
    var segundosI = localStorage.getItem('segundo')

    var fechaF  = new Date()

    var horaF = fechaF.getHours();
    var minutosF = fechaF.getMinutes();
    var segundosF = fechaF.getSeconds();

    var hora1 = (horaI +":" + minutosI +":" + segundosI).split(":"),
        hora2 = (horaF +":" + minutosF +":" + segundosF).split(":"),
        t1 = new Date(),
        t2 = new Date();
 
    t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
    t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
    
    //Aquí hago la resta
    t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());

    console.log(    document.body.innerHTML = "La diferencia es de: " + (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas" : " hora") : "") + (t1.getMinutes() ? ", " + t1.getMinutes() + (t1.getMinutes() > 1 ? " minutos" : " minuto") : "") + (t1.getSeconds() ? (t1.getHours() || t1.getMinutes() ? " y " : "") + t1.getSeconds() + (t1.getSeconds() > 1 ? " segundos" : " segundo") : ""));
   
    

    

    //this.enviarDatos();
    
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

  enviarDatos(): void{

    

    var salida = this.dia + "/" + this.mes + "/" + this.anio;

    var tiempoLaborado = new TiempoLaborado();

    tiempoLaborado.setFecha(salida);
    tiempoLaborado.setHoras(this.horas.toString());
    tiempoLaborado.setIdTrabajador("1053825754");
    tiempoLaborado.setMinutos(this.minutos.toString());
    tiempoLaborado.setSegundos(this.segundos.toString());  

    



    

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
