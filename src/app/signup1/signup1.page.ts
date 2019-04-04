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

  fullname:string;
  phone:string;

  login() {
    console.log("Username: "+ this.fullname);
    console.log("Password: "+ this.phone);
  }

}
