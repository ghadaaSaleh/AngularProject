import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iuser } from '../Models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //  Authorization: 'my-auth-token'
    })
  };
  isloggedSubject: BehaviorSubject<boolean>;
  constructor(private httpclient: HttpClient) { 
    this.isloggedSubject = new BehaviorSubject<boolean>(false); 
    this.isloggedSubject.next(this.isUserLogged);
  }

  public get isUserLogged() {
    return localStorage.getItem("token") ? true : false;
  }
  IsLoggedSubject() {
    return this.isloggedSubject.asObservable();
  }
  login(userName: string, password: string) {
    let token = "mytoken";
    localStorage.setItem("token", token);
    this.isloggedSubject.next(true);

  }
  logout() {
    localStorage.removeItem("token");
    this.isloggedSubject.next(false);

  }

  addUser(newUser: any): Observable<any> {
    debugger
    return this.httpclient.post<any>("http://localhost:3000/users", newUser, this.httpOptions);//.pipe(retry(2), catchError(this.handleError));
  }

}

