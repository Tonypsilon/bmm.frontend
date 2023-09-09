import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Venue} from "./data/venue";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getVenuesOfClub(clubId: number): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.apiUrl + '/venues/club/' + clubId);
  }

  getVenuesOfOrganization(organizationId: number): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.apiUrl + '/venues/organization/' + organizationId);
  }

  putVenuesForClub(clubId: number, venues: Venue[]): Observable<any> {
    return this.http.put(this.apiUrl + '/venues/club/' + clubId, venues);
  }
}
