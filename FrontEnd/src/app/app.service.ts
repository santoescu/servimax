import { Injectable } from '@angular/core';

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

export interface Producto {

    nombre: string;
    descripcion: string;
    tipo: string;
    img: string;


}
