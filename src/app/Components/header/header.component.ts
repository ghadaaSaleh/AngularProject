import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isUserLogged:boolean=false;
  constructor(private authUserService:UserAuthService){
    this.isUserLogged= this.authUserService.isUserLogged;
    this.authUserService.IsLoggedSubject().subscribe(s=>{this.isUserLogged=s;})
  }
}
