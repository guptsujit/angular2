import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
  userData : any = {};
  private isloggedIn: boolean = false;
  private redirectUrl: string = '/';
	private loginUrl: string = '/login';
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
    if (!this.userData.error) {
      localStorage.setItem('currentUser', JSON.stringify(this.userData));
      this.isloggedIn = true;
    }
    return body;
    //return body.data || {};
  }
  isUserLoggedIn(): boolean {
   
		return this.isloggedIn;
  }
  setRedirectUrl(url: string): void {
		this.redirectUrl = url;
  }
  getRedirectUrl(): string {
		return this.redirectUrl;
  }
  getLoginUrl(): string {
		return this.loginUrl;
	}
  logoutUser(): void{
		this.isloggedIn = false;
	}
}
