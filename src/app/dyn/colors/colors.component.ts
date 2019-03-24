import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

	private bgCol="#abcde1";
	private bgCol2="#abacad";

	constructor() { }

	ngOnInit() {
	}

}
