export class TiempoLaborado{
	fecha : string;
	Id_Trabajador : string;
    horas : string;
    minutos: string;
    segundos : string;

    setFecha(fecha: string):void{
        this.fecha = fecha;
    }

    setIdTrabajador(Id_Trabajador: string): void{
        this.Id_Trabajador = Id_Trabajador;
    }

    setHoras(horas: string):void{
        this.horas = horas;
    }

    setMinutos(minutos: string):void{
        this.minutos = minutos;
    }
    setSegundos(segundos:string): void{
        this.segundos = segundos;
    }
}
