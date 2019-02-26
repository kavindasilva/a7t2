import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
	public name="nameStr";
	public propSuc="p-suc";
	private txt2="id-txt2";
	private txt3="id-txt3";
	private txt4="id-txt4";

	public isDisabled=false;

	private boolVal=true;
	//private special=true;
	private special=false;
	//private special=false;
	private special2=false;
	private special3=3;
	private special4=31.625;

	public date1=new Date();

	public childMsg="";

	private color1="red";
	private colors=['red', 'green', 'blue', 'orange'];

	private msgObj={
		"p-suc": !this.boolVal,
		"p-italic": this.boolVal,
		"p-20": this.special
	};

	private styleObj={
		color: "blue",
		fontStyle: "italic"
	};

  	title = 'a7t2 from a7t1';
  	var1="VAR";

  	eveClick(event){
  		this.var1+=" hi";
  		console.log(event);
  	}

  	func1(value){
  		console.log(value);
  	}
  constructor() { }

  ngOnInit() {
  }

}
