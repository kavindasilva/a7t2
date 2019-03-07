import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
	private enableSubmit:boolean=false;
  constructor() { }

  ngOnInit() {
  }


  checkForm(formData){
  	let dataJ=formData.value; // returns json

  	//if(dataJ.)


  	return false;
  }


  logInput(val){
  	console.log(val);
  }

}
