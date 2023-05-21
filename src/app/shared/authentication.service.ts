import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationData } from './authentication-data';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _authenticationData$ = new ReplaySubject<AuthenticationData>(1);
  readonly _authenticationData = this._authenticationData$.asObservable();

  private _jSessionId?: string | undefined;
  private _xsrfToken?: string | undefined;


  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    }

    this.http.get<AuthenticationData>(environment.apiUrl + '/user', httpOptions).subscribe(
      res => this._authenticationData$.next(res)
    );
  }

  getAuthenticationData(): Observable<AuthenticationData> {
    return this._authenticationData;
  }

  public get jSessionId(): string | undefined {
    return this._jSessionId;
  }
  public set jSessionId(value: string | undefined) {
    this._jSessionId = value;
  }

  public get xsrfToken(): string | undefined {
    return this._xsrfToken;
  }
  public set xsrfToken(value: string | undefined) {
    this._xsrfToken = value;
  }
}
