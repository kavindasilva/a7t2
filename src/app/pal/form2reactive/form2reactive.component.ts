import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2reactive',
  templateUrl: './form2reactive.component.html',
  styleUrls: ['./form2reactive.component.css']
})
export class Form2reactiveComponent implements OnInit {

	formObj=new FormGroup({
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.pattern( /^[a-zA-Z]+$/ )
			]),
		password: new FormControl()
	});

	get username(){
		return this.formObj.get("username");
	}

	get password(){
		return this.formObj.get("password");
	}

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
