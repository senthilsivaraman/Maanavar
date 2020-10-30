import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})


export class UserlogComponent implements OnInit {

  model: any = {}
  

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);    
    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();
  
  }

  
}
