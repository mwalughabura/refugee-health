import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup4',
  templateUrl: './signup4.page.html',
  styleUrls: ['./signup4.page.scss'],
})
export class Signup4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  password:string;
  confirmpassword:string;

  login() {
    console.log("Username: "+ this.password);
    console.log("Password: "+ this.confirmpassword);
  }

}
