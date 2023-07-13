import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './data/user';
import {ChangePassword} from "./data/change-password";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>('//localhost:8080/users', user);
  }

  changePassword(changePassword: ChangePassword): Observable<User> {
    return this.http.patch<User>('//localhost:8080/users/' + changePassword.username,
      changePassword);
  }
}
