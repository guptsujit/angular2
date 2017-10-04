import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usercount',
  templateUrl: './usercount.component.html',
  styleUrls: ['./usercount.component.css']
})
export class UsercountComponent implements OnInit {
  @Input()
  all: number;
  @Input()
  selectedRadioButtonValue: string = "all";
  @Input()
  male: number;
  @Input()
  female: number;

  @Output()
  eventObject: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }
  onRadioButtonSelectionChange() {

    this.eventObject.emit(this.selectedRadioButtonValue);
  }
}
