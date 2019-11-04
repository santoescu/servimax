import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { DataService } from './../dataservice/data.service';
import { Cliente } from './../dataservice/cliente';
import { Trabajador } from './../dataservice/trabajador';
import { Transaccion } from './../dataservice/transaccion';
import { Producto } from './../dataservice/producto';
import { Router } from '@angular/router';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  transaccion = new Transaccion();
  producto= new Producto();


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
  kilate: string = "0";
  gramos: string = "0";
  nombreProducto: string = "";
  precioProducto: string = "";
  precioVentaProducto: string = "";
  ID_Transaccion: string = "";


  constructor(private dataService: DataService, private _snackBar: MatSnackBar, private router: Router) {
    

  }


  async save() {

    await this.dataService.createTransacciones(this.transaccion)
      .then(
        () => this.redirect(),
        () => console.log("Error"),
      )
  }

  redirect() {
    this.router.navigate(['./menu/transacciones'])
  }


  async saveProducto(){

    await this.dataService.createProducto(this.producto)
      .then(
        () => this.redirect(),
        () => console.log("Error"),
      )
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

 async crearTransaccionCompra(){
    if (this.idclliente == null) {
      this._snackBar.open("Selecciona un cliente", "", { duration: 5000 });
      this.step = 0;

    } else if (this.idTrabajador == null) {
      this._snackBar.open("Selecciona el empleado", "", { duration: 5000 });
      this.step = 1;

    } else if (this.fechaFin == null) {
      this._snackBar.open("Selecciona la fecha", "", { duration: 5000 });
      this.step = 1;
    } else{
    this.transaccion.ID_Transaccion = "20";
    this.transaccion.Fecha = this.fechaFin;
    this.transaccion.Tipo = "C";
    this.transaccion.ID_Cliente = this.idclliente;
    this.transaccion.ID_Trabajadores = this.idTrabajador.toString();
    this.transaccion.ID_Admin = "1054924578";
    await this.save();

  }

  }
  async crearTransaccionVenta(){
    if (this.idclliente == null) {
      this._snackBar.open("Selecciona un cliente", "", { duration: 5000 });
      this.step = 0;

    } else if (this.idTrabajador == null) {
      this._snackBar.open("Selecciona el empleado", "", { duration: 5000 });
      this.step = 1;

    } else if (this.fechaFin == null) {
      this._snackBar.open("Selecciona la fecha", "", { duration: 5000 });
      this.step = 1;
    } else{
      this.transaccion.ID_Transaccion = "30";
    this.transaccion.Fecha = this.fechaFin;
    this.transaccion.Tipo = "V";
    this.transaccion.ID_Cliente = this.idclliente;
    this.transaccion.ID_Trabajadores = this.idTrabajador.toString();
    this.transaccion.ID_Admin = "1054924578";
    await this.save();

  }

  }
  async crearTransaccionEmpeno(){
    if (this.idclliente == null) {
      this._snackBar.open("Selecciona un cliente", "", { duration: 5000 });
      this.step = 0;

    } else if (this.idTrabajador == null) {
      this._snackBar.open("Selecciona el empleado", "", { duration: 5000 });
      this.step = 1;

    } else if (this.fechaFin == null) {
      this._snackBar.open("Selecciona la fecha", "", { duration: 5000 });
      this.step = 1;
    } else{
      this.transaccion.ID_Transaccion = "10";
    this.transaccion.Fecha = this.fechaFin;
    this.transaccion.Tipo = "E";
    this.transaccion.ID_Cliente = this.idclliente;
    this.transaccion.ID_Trabajadores = this.idTrabajador.toString();
    this.transaccion.ID_Admin = "1054924578";
    await this.save();

  }

  }

  async validacion() {
     if (this.nombreProducto == null) {
      this._snackBar.open("Digite el nombre del producto", "", { duration: 5000 });
      this.step = 2;

    } else if (this.precioProducto == null) {
      this._snackBar.open("Digite el precio del producto", "", { duration: 5000 });
      this.step = 2;

    } else if (this.tipo == "Joya") {
      if (this.kilate == "") {
        this._snackBar.open("Digite los kilates de la joya", "", { duration: 5000 });
        this.step = 2;
      } else if (this.gramos == "") {
        this._snackBar.open("Digite el peso de la joya", "", { duration: 5000 });
        this.step = 2;
      } 
    } else {
      
    this.producto.Descripcion=this.descripcion;
    this.producto.Nombre=this.nombreProducto;
    this.producto.Precio_De_Compra=Number(this.precioProducto);
    this.producto.Precio_De_Venta=Number(this.precioVentaProducto);
    this.producto.Tipo=this.tipo;
    this.producto.Kilates=this.kilate;
    this.producto.Kilogramos=this.gramos;
   await this.saveProducto();
    }

  }

  
    
  


}
