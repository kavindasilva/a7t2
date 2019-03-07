import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authServ: AuthService, private router: Router ) { }

  ngOnInit() {
  	/*if( this.authServ.isLogged() )
  		this.router.navigate(["/pal"]);
  	else
  		this.router.navigate(["/pal/login"]);*/
  }

  logOut(){
  	if( true ){
  		this.authServ.logOut();
  		this.router.navigate(["/pal/login"]);
  	}
  	else
  		this.router.navigate(["/pal"]);

  }

}
