
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
	private vehicles;
	constructor(private serv: DataService) { }
	//constructor(service: DataS) { }

	ngOnInit() {
		this.getVehicles();
	}

	getVehicles(){
		this.serv.getVehicles()
			.subscribe(
				response=>{
					//this.vehicles=response.toJSON();
					//console.log(response); // working
					let res=response;
					this.vehicles=response['data'];
					//this.vehicles=response[0]['data'];
				},
				error=>{
					console.log(error);
				}
			);

		console.log(this.vehicles);
	}


}
