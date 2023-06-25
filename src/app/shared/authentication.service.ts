import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Authentication } from './data/authentication';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _authenticationData$ = new ReplaySubject<Authentication>(1);
  readonly _authenticationData = this._authenticationData$.asObservable();

  private _isAuthenticated$ = new BehaviorSubject(false);
  readonly isAuthenticated$ = this._isAuthenticated$.asObservable();

  constructor(private http: HttpClient,
    private router: Router) { }

  login(username: string, password: string): void {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    }

    this.http.get<Authentication>('//localhost:8080/user', httpOptions).subscribe(
      res => {
        if(res.username === username) {
          this._authenticationData$.next(res);
          this._isAuthenticated$.next(true);
          this.router.navigate(['/admin/home']);
        }
      });
  }

  logout() {
    /*this.http.post('logout', {}).subscribe(
      res => {
        this._isAuthenticated$.next(false);
      }
    )*/
    this._isAuthenticated$.next(false);
  }

  getAuthenticationData(): Observable<Authentication> {
    return this._authenticationData;
  }

  get isAuthenticated() {
    return this._isAuthenticated$.value;
  }
}
