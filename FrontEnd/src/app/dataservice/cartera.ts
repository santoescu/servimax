export class Cartera{
    ID : Number;
    Fecha : string;
    Nombre : string;
    Precio_De_Compra : number;
    Precio_De_Venta : number;
    Ganacia : number;

    constructor(Fecha: string, Nombre: string, Precio_De_Compra : number, Precio_De_Venta){
        this.Fecha = Fecha;
        this.Nombre = Nombre;
        this.Precio_De_Venta = Precio_De_Venta;
        this.Precio_De_Compra = Precio_De_Compra;
        this.Ganacia = Precio_De_Venta - Precio_De_Compra;

    }
}