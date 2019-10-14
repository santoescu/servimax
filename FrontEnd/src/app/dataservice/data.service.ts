import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Cliente } from './cliente';

@Injectable()
export class DataService{

	constructor(private http: Http) {}
	
	private headers = new Headers({'Content-Type': 'application/json'});

		getClientes(): Promise<Cliente[]> {
			return this.http.get('http://localhost:8000/Cliente?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Cliente[])
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
	
