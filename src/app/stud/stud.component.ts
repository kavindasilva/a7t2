import { Component, OnInit, Input, Output } from '@angular/core';
import { StudService } from '../stud.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit {
	private studArr=[];
	;

  	constructor(private _studService: StudService, private router:Router){
  		//this._studService= StudService();
  	}

  	ngOnInit() {
  		/* {"result":"true",
  				"data":[{"stid":"1","stname":"stu1dw","stage":"1"},
  					{"stid":"4","stname":"gh","stage":"4"},
  					{"stid":"5","stname":"q","stage":"3"},
  					{"stid":"6","stname":"r","stage":"4"}],
  				"reqType":"GET",
  				"reqtime":"02:27 01:12:13"} */

  		this._studService.getStuds()
  			.subscribe(data => this.studArr=data.data);
  	}

  	sel(stud){
  		//	
  		this.router.navigate(["/studs", stud.id]);
  	}
}

export class StudComponent2 implements OnInit {
	private selectId;
	private studArr=[];
	;

  	constructor(private _studService: StudService, private route:ActivatedRoute){
  		//this._studService= StudService();
  	}

  	ngOnInit() {
  		/* {"result":"true",
  				"data":[{"stid":"1","stname":"stu1dw","stage":"1"},
  					{"stid":"4","stname":"gh","stage":"4"},
  					{"stid":"5","stname":"q","stage":"3"},
  					{"stid":"6","stname":"r","stage":"4"}],
  				"reqType":"GET",
  				"reqtime":"02:27 01:12:13"} */
  		let id=parseInt(this.route.snapshot.paramMap.get('id'));
  		this.selectId=id;
  	}

  	sel(stud){
  		//	
  		//this.router.navigate(["/studs", stud.id]);
  	}
}
