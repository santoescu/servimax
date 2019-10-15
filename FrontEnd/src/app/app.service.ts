import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InventarioService {

    producto: Producto[]=[

        {
            nombre: "Nevera",
            descripcion: "negra",
            tipo: "producto",
            img: "assets/img/nevera.jpg"
        },
        {
            nombre: "Nevera2",
            descripcion: "blanca",
            tipo: "producto",
            img: "assets/img/nevera2.jpg"
        },
        {
            nombre: "Afiche lol",
            descripcion: "Garen vs darius",
            tipo: "producto",
            img: "assets/img/gvd.jpg"
        },
        {
            nombre: "afiche lol",
            descripcion: "garen vs darius",
            tipo: "producto",
            img: "assets/img/gvd2.jpg"
        },
        {
            nombre: "Nevera2",
            descripcion: "azul2",
            tipo: "joya",
            img: "assets/img/nevera.jpg"
        }

    ];

    constructor(){

    }

    getProductos(){
        return this.producto;
    }
}

export class UserMaster {

    private message = new BehaviorSubject<string>('En espera de un nombre');
    public customMessage = this.message.asObservable();

    usuario : string;

    constructor(){
        this.usuario="";
    }

    public changeMessage(msg: string): void {
        this.message.next(msg);
    }

    getUsuario(){
        return this.usuario;
    }

    setUsuario(newUser:string){
        this.usuario = newUser;
    }
}

export interface Producto {

    nombre: string;
    descripcion: string;
    tipo: string;
    img: string;


}
