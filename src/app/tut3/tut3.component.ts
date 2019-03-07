import { Component, OnInit } from '@angular/core';
//import { TutServiceService } from '../tut-service.service';

import { St2Service } from '../st2.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tut3',
  templateUrl: './tut3.component.html',
  styleUrls: ['./tut3.component.css']
})
export class Tut3Component implements OnInit {
	private var1:any;
	public studArr;

	// TutServiceService _tutService;
	constructor( private _set2: St2Service ){
		//
		let x1= function(msg){
			console.log(msg);
		}
		//x1("hi");
		//x2("x",1);

		let x2=(msg1, msg2) => {
			console.log(msg1+" && "+msg2);
		}
		//x2("x",1);

	}

	ngOnInit() {
		this.studArr=this._set2.getStud();
	}

	inputFun1(){
		//console.log("fun1");
		console.log(this.var1);
	}

}
