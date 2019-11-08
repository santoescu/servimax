export class TiempoLaborado{
	fecha : string;
	Id_Trabajador : string;
    horas : number;

    constructor(fecha:string, Id_Trabajador: string, horas: number){
        this.fecha = fecha;
        this.Id_Trabajador = Id_Trabajador;
        this.horas = horas;

    }
}
