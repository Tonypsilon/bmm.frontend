import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrganizationSetup} from "./data/organization-setup";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  getOrganizationSetup(organizationId: number): Observable<OrganizationSetup> {
    return this.http.get<OrganizationSetup>('//localhost:8080/organizations/'
    + organizationId + '/setup');
  }

}
