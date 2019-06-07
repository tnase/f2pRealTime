import { UserService } from './../../User/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})


export class AccountPage implements OnInit {


 
    user = {
     name: String ,
     email: String ,
     password : String ,
   } ;
     names;
     username;
     password ;
   

  constructor(public userService: UserService,public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'account create with success...',
      position:'top',
      duration: 2000
    });
    toast.present();
  }

  setUserValue() {
    this.user.name = this.names;
    this.user.email = this.username;
    this.user.password = this.password;
  }
    
  createAccount(){
    this.setUserValue();
   this.userService.createUser(this.user)
     .subscribe(data => {
      this.names="";
      this.username="";
      this.password="";
      this.presentToast();
        console.log(data);
      },error=>{
        alert(JSON.stringify(error))

      });
   
  }

 

}
