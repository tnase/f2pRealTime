
import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    

  constructor( public http: HttpClient) { }

   createUser(user){

     return this.http.post(`${API.SAVE_USER}`, user) ; 
   }

   login(email,password){
     return this.http.get(`${API.LOGIN_USER}?email=${email}&password=${password}`);
   }

   getOnlineData(){
     return this.http.get(`${API.GET_DATA_ONLINE}`);
   }


}
