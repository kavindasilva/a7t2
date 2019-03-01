import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { stud } from './emps';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudService {
	private urlAll="http://127.0.0.1/ucsc4/haulm/control/main.php?read=k1";
	private urlAll2="http://127.0.0.1/ucsc4/haulm/control/main.php?read=k1";
	private urlSingle="http://127.0.0.1/ucsc4/haulm/control/main.php?read=k1&stID=1";

	private urlJson="/assets/data/emps.json";

	constructor(private http: HttpClient){}

	getStuds(): Observable<stud[]> { // define return type
		//return this.http.get(this.urlJson);

		/* cast to iEmp array */
		//return this.http.get<stud[]>(this.urlJson);
		return this.http.get<stud[]>(this.urlAll2);
			//.catch(this.errHandle );
		//return this.http.get<iEmp[]>(this.urlAll)
	}
}
