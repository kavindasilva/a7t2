import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
	private enableSubmit:boolean=false;
	private listOpts=[
		{id:1, value: "o1", name: "Telephone"},
		{id:2, value: "opt2", name: "Fax"},
		{id:3, value: "o3", name: "Email"},
		{id:4, value: "opt4", name: "Post"}
	]
  constructor() { }

  ngOnInit() {
  }


  checkForm(formData){
  	let dataJ=formData.value; // returns json

  	if(dataJ.email==null || dataJ=="")
  		this.enableSubmit= false;
  	else{
  		if(dataJ.firstName==null || dataJ.firstName=="")
  			this.enableSubmit=false;
  		else
  			this.enableSubmit=true;
  	}


  	//return false;
  }


  logInput(val){
  	console.log(val);
  }

}
