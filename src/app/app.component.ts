import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  /*template: `
  	<h5>heading type5</h5>
  `*/
})
export class AppComponent {
	public name="nameStr";
	public propSuc="p-suc";
	private txt2="id-txt2";
	private txt3="id-txt3";
	private txt4="id-txt4";

	public isDisabled=false;

	private boolVal=true;
	private special=true;
	private special2=false;
	private special3=3;

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
}
