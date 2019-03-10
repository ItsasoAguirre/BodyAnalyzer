import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_API = 'htpp://localhost:3000/api/users'
  users: User[];
  selectedUser: User;
 

  constructor( private http: HttpClient) {
    this.selectedUser = new User();
   }

  getAllUsers(){
    return this.http.get(this.URL_API)     
  }

  getUser(_id: string){
    return this.http.get(this.URL_API + `/${_id}`);
  }
  addUser(user: User){
    return this.http.post(this.URL_API, user)
  }

  updateUser(user: User){
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
