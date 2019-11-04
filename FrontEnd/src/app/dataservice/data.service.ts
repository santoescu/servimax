import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Cliente } from './cliente';
import { Trabajador } from './trabajador';
import { Administrador } from './administrador';
import { TiempoLaborado } from './tiempo-laborado';
import { Transaccion } from './transaccion';
import { Producto } from './producto';


@Injectable()
export class DataService{

	constructor(private http: Http) {}
	
	private headers = new Headers({'Content-Type': 'application/json'});

		getClientes(): Promise<Cliente[]> {
			return this.http.get('http://localhost:8000/Cliente?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Cliente[])
		}
		getProductos(): Promise<Producto[]> {
			return this.http.get('http://localhost:8000/Producto?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Producto[])
		}

		getTrabajadores(): Promise<Trabajador[]> {
			return this.http.get('http://localhost:8000/Trabajador?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Trabajador[])
		}
		getTiempos(): Promise<TiempoLaborado[]> {
			return this.http.get('http://localhost:8000/Tiempo?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as TiempoLaborado[])
		}

		getAdministrador(): Promise<Administrador[]> {
			return this.http.get('http://localhost:8000/Administrador?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Administrador[])
		}

		getTransacciones(): Promise<Transaccion[]> {
			return this.http.get('http://localhost:8000/Transaccion?json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Transaccion[])
		}


		deleteClientes(id: string): Promise<void> {
			const url = `${"http://localhost:8000/Cliente"}/${id}`;
			return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
		}
		deleteTrabajadores(id: number): Promise<void> {
			const url = `${"http://localhost:8000/Trabajador"}/${id}`;
			return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
		}

		createClientes(d: Cliente): Promise<Cliente> {
			return this.http
			.post("http://localhost:8000/Cliente", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Cliente)
		}
		createTrabajadores(d: Trabajador): Promise<Trabajador> {
			return this.http
			.post("http://localhost:8000/Trabajador", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Trabajador)
		}

		enviarMail(d: string): Promise<Cliente> {


			const url = `${"http://localhost:8000/Send"}/${d}`;
			return this.http
			.post(url, JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Cliente)
		}


		crearRegistroTabla(d: TiempoLaborado): Promise<TiempoLaborado> {
			return this.http
			.post("http://localhost:8000/Tiempo", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as TiempoLaborado)
		}


		createTransacciones(d: Transaccion): Promise<Transaccion> {
			return this.http
			.post("http://localhost:8000/Transaccion", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Transaccion)
		}

		createProducto(d: Producto): Promise<Producto> {
			d.Id_Producto = "20";
			d.ID_Transaccion="20";
			return this.http
			.post("http://localhost:8000/Producto", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Producto)
		}

		

}
	

