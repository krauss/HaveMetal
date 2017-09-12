import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiURL = "http://localhost:8888/PHP-Slim-Restful/api/";
//let apiURL = "http://192.168.1.6:8888/PHP-Slim-Restful/api/";
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type){

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      console.log(apiURL+type);
      this.http.post(apiURL+type,JSON.stringify(credentials),{headers: headers}).subscribe(res =>{
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }

}
