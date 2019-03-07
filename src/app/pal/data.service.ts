

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()


export class DataService {
	private urlDrivers="http://127.0.0.1/ucsc4/pal/api1.php?d=1";
	private urlVehicles="http://127.0.0.1/ucsc4/pal/api1.php?v=1";

	constructor(private http: HttpClient) {
		//
	}

	getDrivers(){

	}

	getVehicles() {
	//getVehicles() : Observable<stud[]> {
		return this.http.get(this.urlVehicles);
		/*return [
			{"id":"1","make":"toyota","model":"corona","color":"blue","status":"available","features":"eddddf"},
			{"id":"2","make":"maruti","model":"800","color":"red","status":"available","features":"ac ps camera"},
			{"id":"3","make":"rty","model":"47","color":"ggg","status":"available","features":"sg"},
			{"id":"4","make":"7","model":"7","color":"7","status":"busy","features":""},
			{"id":"5","make":"chathura","model":"lkng","color":"gold","status":"available","features":"dfgdfg"}
		];  /**/
	}

	getVehicles2() {
	//getVehicles() : Observable<stud[]> {
		return this.http.get(this.urlVehicles);
		/*return [
			{"id":"1","make":"toyota","model":"corona","color":"blue","status":"available","features":"eddddf"},
			{"id":"2","make":"maruti","model":"800","color":"red","status":"available","features":"ac ps camera"},
			{"id":"3","make":"rty","model":"47","color":"ggg","status":"available","features":"sg"},
			{"id":"4","make":"7","model":"7","color":"7","status":"busy","features":""},
			{"id":"5","make":"chathura","model":"lkng","color":"gold","status":"available","features":"dfgdfg"}
		];  /**/
	}


	/*
	{
		"result":true,
		"err":false,
		"data":[
			{"id":"1","make":"toyota","model":"corona","color":"blue","status":"available","features":"eddddf"},
			{"id":"2","make":"maruti","model":"800","color":"red","status":"available","features":"ac ps camera"},
			{"id":"3","make":"rty","model":"47","color":"ggg","status":"available","features":"sg"},
			{"id":"4","make":"7","model":"7","color":"7","status":"busy","features":""},
			{"id":"5","make":"chathura","model":"lkng","color":"gold","status":"available","features":"dfgdfg"}
		]
	}
	*/

	logErr(e: HttpErrorResponse){
		console.log("error "+e);
	}
}
