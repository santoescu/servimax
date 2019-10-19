import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,interval, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserMaster} from '../app.service';
import { DataService } from './../dataservice/data.service';
import { TiempoLaborado } from '../dataservice/tiempo-laborado';





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

  dia: number;
  mes: number;
  anio: number;

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

    this.enviarDatos();
    
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


    console.log("llama enviar datos");

    

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
