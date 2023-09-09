import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Authentication } from './data/authentication';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {MessageService} from "../messages/message.service";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _authenticationData$ = new ReplaySubject<Authentication>(1);
  readonly _authenticationData = this._authenticationData$.asObservable();

  private _isAuthenticated$ = new BehaviorSubject(false);
  readonly isAuthenticated$ = this._isAuthenticated$.asObservable();

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private router: Router,
              private messageService: MessageService) { }

  login(username: string, password: string): void {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    }

    this.http.get<Authentication>(this.apiUrl + '/user', httpOptions).subscribe(
      res => {
        if(res.username === username) {
          this._authenticationData$.next(res);
          this._isAuthenticated$.next(true);
          this.messageService.success("Erfolgreich eingeloggt als " + username);
          this.router.navigate(['/admin/home']);
        } else {
          this.messageService.error("Benutzername oder Passwort falsch!");
        }
      });
  }

  logout() {
    this.http.post(this.apiUrl + '/administration/logout', {}).subscribe(
      res => {
        this._isAuthenticated$.next(false);
      }
    )
  }

  getAuthenticationData(): Observable<Authentication> {
    return this._authenticationData;
  }

  get isAuthenticated() {
    return this._isAuthenticated$.value;
  }
}
