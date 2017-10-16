import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  //providers: [AuthService],
})
export class HomeMenuComponent implements OnInit {
@Input()
  userSession : any = {};
  constructor( private _router: Router) {

    
   }

  ngOnInit() {

    //this.userSession = JSON.parse(localStorage.getItem('currentUser'));
    //return true;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userSession = '';
    this._router.navigate(['/login']);
  }
}
