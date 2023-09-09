import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrganizationSetup} from "./data/organization-setup";
import {Team} from "./data/team";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOrganizationSetup(organizationId: number): Observable<OrganizationSetup> {
    return this.http.get<OrganizationSetup>(this.apiUrl + '/organizations/'
    + organizationId + '/setup');
  }

  putOrganizationSetup(organizationId: number, teams: Team[]): Observable<Team[]> {
    return this.http.put<Team[]>(this.apiUrl + '/organizations/'
    + organizationId + '/setup', teams);
  }
}
