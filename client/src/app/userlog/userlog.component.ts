import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})


export class UserlogComponent implements OnInit {

  model: any = {}
  

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/dashboard');    
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
      
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  cancel(){

  }

  register() {
    
  }
}
