import { Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';
export interface Kilate {
  num: number;

}

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{

	constructor(private _snackBar: MatSnackBar){

	} 


 public kilates:number;
 public peso:number;
 public precioOro:number=180426.08;
 public precioPlata:number=2133.26;
 public resultado:number;
 public valor:string="0";

 kilateControl = new FormControl('', [Validators.required]);
 kil: Kilate[] = [
    {num: 8},
    {num: 9},
    {num: 10},
    {num: 12},
    {num: 14},
    {num: 18},
    {num: 20},
    {num: 22},
    {num: 24}
    
  ];

 limpiar(){
 	this.kilates=null;
	this.peso=null;
 }
 calcular(){

 	if (this.kilates==null) {
 		this._snackBar.open("Selecciona los kilates","",{duration:5000});
 		
 	}else if(this.valor=="0"){
 		this._snackBar.open("Selecciona el precio, ya sea del oro o de la plata","",{duration:5000});
 	}else if(this.peso==null){
 		this._snackBar.open("Digita el peso de tu joya","",{duration:5000});
 	 }else{

 	if(this.valor=="1"){
 		this.resultado=((this.precioOro*this.kilates)/24)*this.peso;

 	}else if(this.valor=="2"){
 		this.resultado=((this.precioPlata*this.kilates)/24)*this.peso;

 	}
 }

 }

}
