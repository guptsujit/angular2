import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
   pagetitle:string = "Welcome to autism alliance";
  constructor() { }

  ngOnInit() {
  }

}
