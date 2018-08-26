import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {

    this.userservice.getUsers()
     .subscribe(
          data =>{
            this.users = data;
          });
  }

  deleteUser(user : User): void{
    this.userservice.deleteUser(user)
    .subscribe(
         data =>{
           this.users=this.users.filter(u => u!==user);
         });
  }




}
