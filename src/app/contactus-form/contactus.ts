
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
//import { Iuserdata } from './user-data';
import { Modeldata } from './model-data';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Contactus {
    zipcode: number;
    isSubmitted: boolean;
    private apiurl: string;
    constructor(private _http: Http) {

        this.apiurl = "http://localhost/api/db.php?action=add_contactus";
    }


    saveContactusDetail(data: any): Promise<Response> {
        // console.log(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        //  headers.append('Content-Type','application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.apiurl, JSON.stringify(data), options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

    addContactUsWithObservable(data: any): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.apiurl, JSON.stringify(data), options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }


    getUserList(): Observable<Modeldata[]> {
        let url = "http://localhost/api/db.php?action=get_user";
        return this._http.get(url)
            .map(this.extractData);
            //.catch(this.handleErrorObservable);
    }
    getUserLists(): Promise<Modeldata[]> {
        let url = "http://localhost/api/db.php?action=get_user";
        return this._http.get(url).toPromise()
        .then(this.extractData)
            .catch(this.handleErrorPromise);
    }
    getUserDetail(userid): Observable<Modeldata> {
        let url = "http://localhost/api/db.php?action=edit_user&userid=" + userid;
        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }
    updateContactUsWithObservable(data: any): Observable<any> {

        let url = "http://localhost/api/db.php?action=update_user";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, JSON.stringify(data), options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }
    removeUser(userid): Observable<any> {
        let url = "http://localhost/api/db.php?action=delete_user";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let data = {'userid' : userid};
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

        // console.log(body.data || {});
        return body;
        //return body.data || {};
    }
}