import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationData } from './authentication-data';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _authenticationData$ = new ReplaySubject<AuthenticationData>(1);
  readonly _authenticationData = this._authenticationData$.asObservable();

  private _isAuthenticated$ = new BehaviorSubject(false);
  readonly isAuthenticated$ = this._isAuthenticated$.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    }

    this.http.get<AuthenticationData>(environment.apiUrl + '/user', httpOptions).subscribe(
      res => {
        this._authenticationData$.next(res);
        this._isAuthenticated$.next(true);
      });
  }

  logout() {
    this._isAuthenticated$.next(false);
  }

  getAuthenticationData(): Observable<AuthenticationData> {
    return this._authenticationData;
  }

  get isAuthenticated() {
    return this._isAuthenticated$.value;
  }
}
