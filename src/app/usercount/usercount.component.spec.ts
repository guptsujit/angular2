import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercountComponent } from './usercount.component';

describe('UsercountComponent', () => {
  let component: UsercountComponent;
  let fixture: ComponentFixture<UsercountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
