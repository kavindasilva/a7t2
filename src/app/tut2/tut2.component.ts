import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TutServiceService } from '../tut-service.service';
//import { TutServiceService };


@Component({
  selector: 'app-tut2',
  templateUrl: './tut2.component.html',
  styleUrls: ['./tut2.component.css']
})
export class Tut2Component implements OnInit {

	/*public empArr=[
		{"id":1, "name":"n1abc", "age": 11 },
		{"id":2, "name":"n2def", "age": 11 },
		{"id":3, "name":"n3ghi", "age": 12 },
		{"id":4, "name":"n4jkl", "age": 11 },
		{"id":5, "name":"n5mno", "age": 10 }
	]*/
	public empArr=[];

	//@Input() public parentData;
	@Input('parentData') public name;

	@Output() public childEve = new EventEmitter();

	// TutServiceService _tutService;
	constructor( private _tutService: TutServiceService ){
		//
	}

	ngOnInit() {
		//this.empArr=this._tutService.getEmps();
		this._tutService.getEmps()
			.subscribe(data => this.empArr=data);
	}

	sendEve(){
		this.childEve.emit("from tut2 output");
	}
}
