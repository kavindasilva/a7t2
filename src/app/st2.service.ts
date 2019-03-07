
/**
	New student service with Mosh tutorials
*/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class St2Service {
	private urlNew="http://127.0.0.1/ucsc4/haulm/control/main.php";

	constructor(private http: HttpClient) {
		//
	}

	getStud(){
		return [{"stid":"1","stname":"stu1dw","stage":"1"},
			{"stid":"4","stname":"gh","stage":"4"},
			{"stid":"5","stname":"q","stage":"3"},
			{"stid":"6","stname":"r","stage":"4"}] ;
	}

	insertStud(){
		//this.http.post(this.urlNew,);
	}
}
