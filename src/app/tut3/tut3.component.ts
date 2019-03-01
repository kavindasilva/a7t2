import { Component, OnInit } from '@angular/core';
import { TutServiceService } from '../tut-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tut3',
  templateUrl: './tut3.component.html',
  styleUrls: ['./tut3.component.css']
})
export class Tut3Component implements OnInit {

	public empArr=[];

	// TutServiceService _tutService;
	constructor( private _tutService: TutServiceService ){
		//
	}

	ngOnInit() {
		this._tutService.getEmps()
			.subscribe(data => this.empArr=data);
	}

}
