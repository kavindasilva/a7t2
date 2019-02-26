import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iEmp } from './emps';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TutServiceService {

	constructor(private http: HttpClient)
	{ }

	private urlAll="http://127.0.0.1/ucsc4/haulm/control/main.php?read=k1";
	private urlSingle="http://127.0.0.1/ucsc4/haulm/control/main.php?read=k1&stID=1";

	private urlJson="/assets/data/emps.json";

	//getEmps(){
	getEmps(): Observable<iEmp[]> { // define return type
		//return this.http.get(this.urlJson);

		// cast to iEmp array
		return this.http.get<iEmp[]>(this.urlJson);
		//return this.http.get<iEmp[]>(this.urlAll);
	}

	getEmps0(){
		return [
			{"id":1, "name":"n1abc", "age": 11 },
			{"id":2, "name":"n2def", "age": 11 },
			{"id":3, "name":"n3ghi", "age": 12 },
			{"id":4, "name":"n4jkl", "age": 11 },
			{"id":5, "name":"n5mno", "age": 10 }
		];
	}
}
