import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _clubs: string[] = [];
  private _seasons: string[] = [];
  private _teams: string[] = [];


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
}
