import { UserService } from './../../User/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.page.html',
  styleUrls: ['./list-post.page.scss'],
})
export class ListPostPage implements OnInit {
  
  users:any;

  constructor( private UserService:UserService) {
    this.getDataOnline();
   }

  ngOnInit() {
  }

  getDataOnline(){
    
     this.UserService.getOnlineData()
     .subscribe(data=>{
       this.users=data['results']
        console.log(data['results']);
     },error=>{
   alert(JSON.stringify(error))
     })
  }

}
