
import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent {

	constructor( private studserv: StudentsService ){ }

	getData(id){
		console.log("d"+id);
		//if(id==0 || id==null)
			this.studserv.getAll()
				.subscribe( result =>{
					console.log(result);
				})
		//else
			//this.studserv.getSingle(id);
	}

}
