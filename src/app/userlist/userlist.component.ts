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
  message : string = "Loading data please wait..";
  statusMessage :string;
  count:number;
  public currentPage:number = 1;
  public totalItems:number = 200; // total numbar of page not items
  public maxSize:number = 10; // max page size
  constructor(private contactUsService: Contactus) { }

  ngOnInit() {
   this.fetchUsers()

  }
  fetchUsers() {
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
   
  }
  deleteUser(userId,key){

    this.contactUsService.removeUser(userId)
    .subscribe(data => {
      if (data.success) {
        //this.fetchUsers();
        this.users.splice(key, 1);
        this.count = this.count-1;
        this.statusMessage = "User deleted successfully.";
      }
    },
    (error) => {
      this.errorMessage = "Something went wrong.Please try again later.";

    });
    
  }

  public setPage(pageNo:number):void {
    console.log('Number items per page: ' + pageNo);
    this.currentPage = pageNo;    
  }

  public pageChanged(event:any):void {
//this method will trigger every page click 

    //console.log('Number items per page: ' + event.itemsPerPage);
  }
}
