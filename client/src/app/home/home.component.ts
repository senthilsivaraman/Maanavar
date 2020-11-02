import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userlogMode = false;
  users: any;

  constructor() { }

  ngOnInit(): void {
  }

  userlogToggle() {
    this.userlogMode = !this.userlogMode;
  }

  getUsers(){
    
  }
}
