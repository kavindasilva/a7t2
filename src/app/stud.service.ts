import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { stud } from './emps';

import { throwError } from 'rxjs';
//import { catchError } from 'rxjs/operators';
//import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudService {
	private urlAll="http://127.0.0.1/ucsc4/haulm/control/main.php?read=k1";
	private urlAll2="http://127.0.0.1/ucsc4/haulm/control/main.php?read=k1";
	private tempStud: stud;
	private studArr=[];


	private urlSingle="http://127.0.0.1/ucsc4/haulm/control/main.php?read=k1&stID=1";
	private urlUpdate="http://127.0.0.1/ucsc4/haulm/control/main.php"; //if(isset($_POST['saveEdit']))

	private urlJson="/assets/data/emps.json";

	/*private http: HttpClient;
	constructor(){
		//this.http=new HttpClient();
	}*/ //not working
	constructor(private http: HttpClient){}
	//private dataStr: stud[];

	/*updateStud(tempStud: stud): Observable<stud[]> {
		return this.http.put(this.urlUpdate, 
			{ data: tempStud })
			.pipe(map((res) => {
				const theCar = this.studArr.find((item) => {
					return +item['id'] === +car['id'];
				});
				if (theCar) {
					theCar['price'] = +tempStud['price'];
					theCar['model'] = tempStud['model'];
				}
				return this.studArr[0];
			}),
			catchError(this.errCons));
	}*/

	getStuds(): Observable<stud[]> { // define return type
		/* cast to iEmp array */
		//return this.http.get<stud[]>(this.urlJson);
		//return this.http.get<stud[]>(this.urlAll2)['data'];
		//return this.http.get<stud[]>(this.urlAll2);
			//.catch(this.errHandle );
		//return this.http.get<iEmp[]>(this.urlAll)

		return this.http.get(this.urlAll2).pipe(
			map((res) => {
				let dataStr = res['data']; console.log(dataStr);
				return dataStr;
			}),
			catchError(this.errCons));
	}

	errCons(error: HttpErrorResponse){
		console.log("catched error: "+error);
		return "errorStr";
	}
}
