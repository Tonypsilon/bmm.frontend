import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IdAndLabel} from "./data/id-and-label";
import {TeamAdmin} from "./data/team-admin";

@Injectable({
  providedIn: 'root'
})
export class TeamAdminService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getTeamAdminCreationFoundation(organizationId: number): Observable<IdAndLabel[]> {
    return this.http.get<IdAndLabel[]>(this.apiUrl + '/organizations/' + organizationId + '/teams');
  }

  createTeamAdmin(teamAdmin: TeamAdmin): Observable<TeamAdmin> {
    return this.http.post<TeamAdmin>(this.apiUrl + '/teamadmins', teamAdmin);
  }
}
