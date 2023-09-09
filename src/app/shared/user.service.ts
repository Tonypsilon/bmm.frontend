import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './data/user';
import {ChangePassword} from "./data/change-password";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users', user);
  }

  changePassword(changePassword: ChangePassword): Observable<User> {
    return this.http.patch<User>(this.apiUrl + '/users/' + changePassword.username,
      changePassword);
  }
}
