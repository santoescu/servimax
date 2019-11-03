import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { DataService } from './../dataservice/data.service';
import { Cliente } from './../dataservice/cliente';
import { Trabajador } from './../dataservice/trabajador';
import { Transaccion } from './../dataservice/transaccion';
import { Router } from '@angular/router';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  transaccion = new Transaccion();


  trabajadores: Trabajador[] = [];
  clientes: Cliente[] = [];


  idTrabajador: number;
  myControl = new FormControl();
  options: string[] = [];
  idCliente: string[] = [];
  filteredOptions: Observable<string[]>;
  idclliente: string;
  fecha: Date;
  dia: string;
  mes: string;
  anio: string;
  fechaFin: string = "";
  tipo: string = "Producto";
  descripcion: string = "";
  kilate: string = "";
  gramos: string = "";
  nombreProducto: string = "";
  precioProducto: string = "";
  ID_Transaccion: string = "";


  constructor(private dataService: DataService, private _snackBar: MatSnackBar, private router: Router) {
    

  }


  save(): void {

    this.dataService.createTransacciones(this.transaccion)
      .then(
        () => this.redirect(),
        () => console.log("Error"),
      )

  }
  redirect() {
    this.router.navigate(['./menu/transacciones'])
  }




  async getClientes() {
   await this.dataService.getClientes().then(clientes => this.clientes = clientes);
  }
  async getTrabajadores() {
   await this.dataService.getTrabajadores().then(trabajadores => this.trabajadores = trabajadores);
  }


  async ngOnInit() {
   await this.getClientes();
   await this.getTrabajadores();
   this.llenarOptions();
    console.log(this.trabajadores.length + " hola");
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


  llenarOptions() {
    this.options = [];
    this.idCliente = [];

    for (let i = 0; i < this.clientes.length; i++) {
      this.options.push(this.clientes[i].Nombres + " " + this.clientes[i].Primer_Apellido + " " + this.clientes[i].Segundo_Apellido);
      this.idCliente.push(this.clientes[i].Id_Cliente);
    }

  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  trabajadorControl = new FormControl('', [Validators.required]);
  productoControl = new FormControl('', [Validators.required]);

  productoPrecioControl = new FormControl('', [Validators.required]);
  tipoProductoControl = new FormControl('', [Validators.required]);


  idCedula(valor: String) {

    for (let i = 0; i < this.options.length; i++) {

      if (this.options[i] === valor) {
        this.idclliente = this.idCliente[i];
        return valor;
      }
    }



  }
  obtenerFecha() {

    console.log("sdfafsasdf" + this.fecha.getHours)
    this.dia = this.fecha.getDate().toString();
    this.mes = (this.fecha.getMonth() + 1).toString();
    this.anio = this.fecha.getFullYear().toString();
    this.fechaFin = this.dia + "/" + this.mes + "/" + this.anio;
  }
  tipoProducto() {

    if (this.tipo === "Producto") {
      return false;

    } else {
      return true;
    }
    return false;
  }

  validacion() {
    if (this.idclliente == null) {
      this._snackBar.open("Selecciona un cliente", "", { duration: 5000 });
      this.step = 0;

    } else if (this.idTrabajador == null) {
      this._snackBar.open("Selecciona el empleado", "", { duration: 5000 });
      this.step = 1;

    } else if (this.fechaFin == null) {
      this._snackBar.open("Selecciona la fecha", "", { duration: 5000 });
      this.step = 1;
    } else if (this.nombreProducto == null) {
      this._snackBar.open("Digite el nombre del producto", "", { duration: 5000 });
      this.step = 2;

    } else if (this.precioProducto == null) {
      this._snackBar.open("Digite el precio del producto", "", { duration: 5000 });
      this.step = 2;

    } else if (this.tipo == "Joya") {
      if (this.kilate == null) {
        this._snackBar.open("Digite los kilates de la joya", "", { duration: 5000 });
        this.step = 2;
      } else if (this.gramos == null) {
        this._snackBar.open("Digite el peso de la joya", "", { duration: 5000 });
        this.step = 2;
      } else {



      }

    } else {
      

    this.transaccion.Fecha = this.fechaFin;
    this.transaccion.Tipo = "C";
    this.transaccion.ID_Cliente = this.idclliente;
    this.transaccion.ID_Trabajadores = this.idTrabajador.toString();
    this.transaccion.ID_Admin = "1054924578";

    this.metodo();

    }

  }

  metodo() {
    this.save();
  }


}
