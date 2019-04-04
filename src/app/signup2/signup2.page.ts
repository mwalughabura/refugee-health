import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  identity:string;
  location:string;

  login() {
    console.log("Username: "+ this.identity);
    console.log("Password: "+ this.location);
  }

}
