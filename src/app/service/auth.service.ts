import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
  userData : any = {};
  constructor(private _http: Http) { }
  login(data) {
    let url = "http://localhost/api/db.php?action=login_user";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(url, JSON.stringify(data), options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private extractData(res: Response) {

    let body = res.json();
    this.userData = body;
    console.log(body);
    // console.log(body.data || {});
    return body;
    //return body.data || {};
  }
}
