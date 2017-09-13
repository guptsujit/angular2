import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
             <app-home-menu></app-home-menu>
             <router-outlet></router-outlet>
             <app-footer></app-footer>   
  `
  
})
export class AppComponent {
  title = 'app';
}
