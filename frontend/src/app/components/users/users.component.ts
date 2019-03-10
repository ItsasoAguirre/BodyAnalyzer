import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[ UserService]
})
export class UsersComponent implements OnInit {

  constructor( private userService: UserService) { }

  ngOnInit() {
  }

  addUser(form: NgForm){
    //console.log(form);
    this.userService.addUser(form.value)
      .subscribe(res => {
        console.log(res);
      })
  }

  limpiarFormulario(form?: NgForm){
    //Si el formulario que le mando existe
    if(form){
      form.reset();
      this.userService.selectedUser= new User();
    }
  }
}
