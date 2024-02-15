import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isUserLogged:boolean;

  constructor(private authUserService:UserAuthService){
    this.isUserLogged= this.authUserService.isUserLogged;
   
  }
  ngOnInit(): void {
   this.isUserLogged= this.authUserService.isUserLogged;
  }

  login()
  {
    this.authUserService.login("ghada","test");
    this.isUserLogged= this.authUserService.isUserLogged;
  }

  logout()
  {
    this.authUserService.logout();
    this.isUserLogged= this.authUserService.isUserLogged;
  }
}
