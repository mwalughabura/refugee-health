import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  username:string;
  password:string;

  login() {
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password);
  }

}
