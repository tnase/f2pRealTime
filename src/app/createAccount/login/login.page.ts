import { UserService } from './../../User/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:String = "";
  password :String="";
  isLogin:Boolean =false;
  users:any;


  constructor(public userService:UserService,public router:Router) { 
    this.getDataOnline();
  }

  ngOnInit() {
  }

  
  login(){
    this.userService.login(this.email,this.password)
    .subscribe(data=>{
           let user=this.email.trim()+";"+this.password.trim() ;
           alert(JSON.stringify(data))
           if(data===true){
              this.isLogin=true;
              this.email= "" ;    
              this.password="";
              this.router.navigate(['/list-post'], { queryParams: { user: user } });
              return  ;
           }  
           alert("username or password is incorrect!!")
              return  ;
  
    },error=>{
       console.log(JSON.stringify(error))
    })
  }

  getDataOnline(){
    
    this.userService.getOnlineData()
    .subscribe(data=>{
      this.users=data['results']
       console.log(data['results']);
    },error=>{
  alert(JSON.stringify(error))
    })
 }



}
