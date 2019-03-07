import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { map , catchError} from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 

//import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 

@Injectable()

export class AuthService {
	//http://localhost:4200/pal/login
	private currentUser: any;
	private authUrl="http://127.0.0.1/ucsc4/pal/api1.php?auth=1";
	//private authUrl="http://127.0.0.1/ucsc4/pal/api1.php";

	constructor(private http: HttpClient){
		let token = localStorage.getItem('token');
	    /*if (token) {
			let jwt = new JwtHelper();
			this.currentUser = jwt.decodeToken(token);
	    }*/
	}

	login(creds){
		//return this.http.post(this.authUrl, creds);
		console.log("authService creds: " +creds);
		//return this.http.post(this.authUrl, JSON.stringify(creds))
		//return this.http.post(this.authUrl, {"email":"1", "password":"2"} )
		return this.http.post(this.authUrl, JSON.parse(JSON.stringify(creds)) )
			/*.map(response => {
					console.log("res: "+response);
			});*/

			.pipe(
				map(response => {
					console.log(response);
					//let result = response.json();
					let result = JSON.parse(JSON.stringify(response));
					// { result: true, err: false, token: "adm2", token2: null }

					if (result && result.token) {
						this.storeLocalData("keep",result);
						//localStorage.setItem('token', result.token);

						//let jwt = new JwtHelper();
						//this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

						return true; 
					}
					else
						return false; /**/
				}),
				catchError(this.errLog) 
			);
	}

	isLogged(){
		let token=localStorage.getItem("token");

		if(!token)
			return false;
		else
			return true;
	}

	/** Logouts user. Returns (true) void after success */
	logOut(){
		//localStorage.removeItem("token");  //then()
		this.storeLocalData("remove");

		//return this.isLogged();
		//return false;
		
		/*return (  )=>{
			localStorage.removeItem("token");
			return this.isLogged;
		}*/
	}

	/** Storing data received from server in Browser. Input( <keep/remove>action: string, <optional>json: object) */
	storeLocalData( action: string, dataJson?){
		if(action=="keep"){
			localStorage.setItem('token', dataJson.token);
			localStorage.setItem('userID', dataJson.uid);
			localStorage.setItem('userName', dataJson.uname);
			localStorage.setItem('token2', dataJson.token2);
		}
		else if(action=="remove"){
			localStorage.removeItem('token');
			localStorage.removeItem('userID');
			localStorage.removeItem('userName');
			localStorage.removeItem('token2');
		}
	}

	errLog(e: any){
		//console.log("err: "+e);
		console.log(e);
		return e;
	}
}
