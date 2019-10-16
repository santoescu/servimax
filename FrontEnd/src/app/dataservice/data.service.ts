import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Cliente } from './cliente';
import { Trabajador } from './trabajador';
import { Administrador } from './administrador';
import { Transaccion } from './transaccion';


@Injectable()
export class DataService{

	constructor(private http: Http) {}
	
	private headers = new Headers({'Content-Type': 'application/json'});

		getClientes(): Promise<Cliente[]> {
			return this.http.get('http://localhost:8000/Cliente?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Cliente[])
		}

		getTrabajadores(): Promise<Trabajador[]> {
			return this.http.get('http://localhost:8000/Trabajador', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Trabajador[])
		}

		getAdministrador(): Promise<Administrador[]> {
			return this.http.get('http://localhost:8000/Administrador', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Administrador[])
		}

		getTransacciones(): Promise<Transaccion[]> {
			return this.http.get('http://localhost:8000/Transaccion?json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Transaccion[])
		}


		deleteClientes(id: number): Promise<void> {
			const url = `${"http://localhost:8000/deposito"}/${id}`;
			return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
		}

		createClientes(d: Cliente): Promise<Cliente> {
			return this.http
			.post("http://localhost:8000/deposito", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Cliente)
		}

}
	

