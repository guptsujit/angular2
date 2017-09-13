import { Component, OnInit } from '@angular/core';
import { Contactus } from './contactus';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuserdata } from './user-data';
import { Modeldata } from './model-data';
//import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './contactus-form.component.html',
  styles: ['.help-block { color: red; }'],
  providers: [Contactus],

})
export class ContactusFormComponent implements OnInit {
  isSubmitted: boolean;
  response: any;
  errorMessage: string;
  model = new Modeldata();
  userid: number;
  constructor(private contactUsService: Contactus, private _router: Router, private _activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.userid = this._activatedRoute.snapshot.params['userid'];
    if (typeof this.userid !== "undefined") {

      this.contactUsService.getUserDetail(this.userid)
        .subscribe((data) => {
          this.model = data;
          // Object.keys(data).length;
          if (!Object.keys(data).length) {
            this.errorMessage = "User with specified id does not exist";
          }
        }, (error) => {
          this.errorMessage = "Something went wrong.Please try again later.";

        });
    }

  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
  processForm(formData): void {

    console.log(formData.value.id);
    if (formData.valid) {
      if (!formData.value.id) {
        this.contactUsService.addContactUsWithObservable(formData.value)
          .subscribe(data => {
            if (data.success) {
              this._router.navigate(['/userlist']);
              this.isSubmitted = true;
            }
          },
          (error) => {
            this.errorMessage = "Something went wrong.Please try again later.";

          });
      }
      else {

        this.updateForm(formData.value);
      }
    }
    else {
      this.isSubmitted = false;
    }

  }
  updateForm(formData): void {
    this.contactUsService.updateContactUsWithObservable(formData)
      .subscribe(data => {
        if (data.success) {
          this._router.navigate(['/userlist']);
          this.isSubmitted = true;
        }
      },
      (error) => {
        this.errorMessage = "Something went wrong.Please try again later.";

      });
  }


}
