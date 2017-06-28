import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  private baseURL: string = 'http://localhost:3000/';
  private headers: Headers = new Headers ( {'content-type': 'application/json'} );
  private options: RequestOptions = new RequestOptions ( {headers:this.headers} );
  
  constructor( private http: Http ) { };

  postUserInfo ( data: string ) {
    return this.http.post ( this.baseURL + 'API/sign-up', data, this.options )
    				.toPromise ()
    				.then ( response => response.json().data );
  }

}
