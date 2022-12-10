import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _clubs: string[] = [];
  private _seasons: string[] = [];
  private _teams: string[] = [];
  private _isLoggedIn: boolean = false;
  private _loginOngoing: boolean = false;
  private _isSeasonAdmin: boolean = false;
  private _isClubAdmin: boolean = false;
  private _isTeamAdmin: boolean = false;

  private _jSessionId?: string | undefined;
  private _xsrfToken?: string | undefined;


  constructor() {}

  public get clubs(): string[] {
    return this._clubs;
  }
  public set clubs(value: string[]) {
    this._clubs = value;
  }

  public get seasons(): string[] {
    return this._seasons;
  }
  public set seasons(value: string[]) {
    this._seasons = value;
  }

  public get teams(): string[] {
    return this._teams;
  }
  public set teams(value: string[]) {
    this._teams = value;
  }

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  public get loginOngoing(): boolean {
    return this._loginOngoing;
  }
  public set loginOngoing(value: boolean) {
    this._loginOngoing = value;
  }

  public get isSeasonAdmin(): boolean {
    return this._isSeasonAdmin;
  }
  public set isSeasonAdmin(value: boolean) {
    this._isSeasonAdmin = value;
  }

  public get isClubAdmin(): boolean {
    return this._isClubAdmin;
  }
  public set isClubAdmin(value: boolean) {
    this._isClubAdmin = value;
  }

  public get isTeamAdmin(): boolean {
    return this._isTeamAdmin;
  }
  public set isTeamAdmin(value: boolean) {
    this._isTeamAdmin = value;
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
