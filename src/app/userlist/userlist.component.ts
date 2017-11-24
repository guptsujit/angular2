import { Component, OnInit } from '@angular/core';
import { Iuserdata } from '../contactus-form/user-data';
import { Contactus } from '../contactus-form/contactus';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  providers: [Contactus],
})
export class UserlistComponent implements OnInit {
  private users: Iuserdata[];
  errorMessage: string;
  response: any;
  //message : string = "Loading data please wait..";
  statusMessage: string = "Loading data please wait..";
  count: number;
  public currentPage: number = 1;
  public totalItems: number = 200; // total numbar of page not items
  public maxSize: number = 10; // max page size
  countSelectedRadioButtonOptionValue :string = "all";
  constructor(private contactUsService: Contactus) { }

  ngOnInit() {
    this.fetchUsers()
    //this.fetchUsersWithPromise();
  }
  //this will also work
  /*fetchUsers() {
    this.contactUsService.getUserList()
      .subscribe((data) => {
        this.users = data
        this.count = Object.keys(data).length;
        if(!this.count){
          this.statusMessage = "No user found.";
        }
      }, (error) =>{
         this.statusMessage = "Something went wrong.Please try again later.";
      
      });
   
  }*/
  //this will also work
  fetchUsers() {
    this.contactUsService.getUserList()
      .subscribe(function (response) {
        // console.log(this);
        this.users = response;
        this.count = response.length;
        if (!this.count) {
          this.statusMessage = "No user found.";
        }
      }.bind(this), function (error) {
        // console.log(error);
        this.statusMessage = "Something went wrong.Please try again later.";
      }.bind(this)


      );


  }
  fetchUsersWithPromise(): void {
    this.contactUsService.getUserLists()
      .then( users => this.users = users,
             error =>  this.errorMessage = <any>error);   
}
  //this will also work
  /*
  fetchUsers() {
    let self = this;
     this.contactUsService.getUserList()
       .subscribe(function(response){
         console.log(this);
         self.users = response; 
         self.count = Object.keys(response).length;
         if(!self.count){
           self.statusMessage = "No user found.";
         }
       },function(error){
         self.statusMessage = "Something went wrong.Please try again later.";
       }
 
     
     );
         
    
   }*/
  deleteUser(userId, key) {

    this.contactUsService.removeUser(userId)
      .subscribe(data => {
        if (data.success) {
          //this.fetchUsers();
          this.users.splice(key, 1);
          this.count = this.count - 1;
          this.statusMessage = "User deleted successfully.";
        }
      },
      (error) => {
        this.errorMessage = "Something went wrong.Please try again later.";

      });

  }
  public getMaleUser(): number {

    //using arrow function

    if (this.users) {
      return this.users.filter(user => user.gender === 'male').length;
    }
    //will also work using normal function
    /*return this.users.filter(function (user) {
      if (user.gender === 'male') {
        return user;
      }
    }).length;*/

  }
  public getFemaleUser(): number {
    //using arrow function
    if (this.users) {
      return this.users.filter(user => user.gender === 'female').length;
    }

  }
  public setPage(pageNo: number): void {
    console.log('Number items per page: ' + pageNo);
    this.currentPage = pageNo;
  }
  public onUserCountRadioButtonSelectionChangeValue(radioButtonvalue:string) {
    
      this.countSelectedRadioButtonOptionValue = radioButtonvalue;
      //console.log(value);
    
  }

  public pageChanged(event: any): void {
    //this method will trigger every page click 

    //console.log('Number items per page: ' + event.itemsPerPage);
  }
}
