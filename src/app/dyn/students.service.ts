
import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { map , catchError} from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 


/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()

export class StudentsService {

	private stId: number;
	private stName: string;
	private stAge: number;

	private urlGetAll="http://127.0.0.1/ucsc4/haulm/api/main.php?all=1"; // get. all=1
	private urlGetSingle="http://127.0.0.1/ucsc4/haulm/api/main.php"; // get. single=id
	private urlInsertNew="http://127.0.0.1/ucsc4/haulm/api/main.php"; // post. add=1,sName:mar17-1135,sAge:2
	private urlUpdate="http://127.0.0.1/ucsc4/haulm/api/main.php"; // post. sID:4,sName:mar23-1804,sAge:2,save:1
	private urlDelete="http://127.0.0.1/ucsc4/haulm/api/main.php"; // post. del=id

	constructor(private http: HttpClient) { }

	getAll(){
		//return this.http.get(this.urlGetAll, {"all":1}); //not working
		return this.http.get(this.urlGetAll  )
			.pipe(
				map(response => {
					console.log(response);
					//let result = response.json();
					let result = JSON.parse(JSON.stringify(response));
					// { result: true, err: false, token: "adm2", token2: null }

					if (result && result.token) {
						return true; 
					}
					else
						return false; /**/
				}),
				catchError(this.errLog) 
			);
	}

	getSingle(id){
		//console.log( JSON.parse(JSON.stringify(id)) );
		//console.log("single="+id);
		return this.http.get(this.urlGetSingle+"?single="+id )
		//return this.http.get("http://127.0.0.1/ucsc4/haulm/api/main.php?single=1" )
			.pipe(
				map(response => {
					console.log("response");
					console.log(response);
					//let result = response.json();
					//let result = JSON.parse(JSON.stringify(response));
					// { result: true, err: false, token: "adm2", token2: null }

					/*if (result && result.token) {
						return true; 
					}
					else
						return false; /**/
				}),
				catchError(this.errLog) 
			);
	}


	errLog(e: any){
		console.log("e");
		console.log(e);
		return e;
	}
}
