import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent {
	invalidLogin: boolean; 

	constructor(private router: Router, private authService: AuthService){ }

	ngOnInit() {
		if( this.authService.isLogged() )
			this.router.navigate(["/pal"]);
		else
			this.router.navigate(["/pal/login"]);
	}

	signIn(credentials) {
		//console.log(credentials);
		this.authService.login(credentials)
			.subscribe(result => { 
				if (result)
					this.router.navigate(['/pal']);
				else  
					this.invalidLogin = true; 
			});
	}
}
