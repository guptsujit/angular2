import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private _authService: AuthService,private _router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   let url: string = state.url;
	  console.log('Url:'+ url);
      if (localStorage.hasOwnProperty('currentUser')) {
        //this._router.navigate(['/userlist']);
        return true; 
      }else{
      this._router.navigate(['/login']);
      return false;
      }

  }
}
