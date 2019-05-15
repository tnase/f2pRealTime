import { UserService } from './../../User/user.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})


export class AccountPage implements OnInit {
 
    user = {
     name: String ,
     username: String ,
     password : String ,
   } ;
     names;
     username;
     password ;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  setUserValue() {
    this.user.name = this.names;
    this.user.username = this.username;
    this.user.password = this.password;
  }
    
  createAccount(){
    this.setUserValue();
   this.userService.createUser(this.user)
     .subscribe(arg => {
       console.log("test");
      },error=>{
        console.log( "test1" );
      });
   
  }

}
