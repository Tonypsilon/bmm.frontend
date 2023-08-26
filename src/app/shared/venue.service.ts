import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Venue} from "./data/venue";

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) { }

  getVenuesOfClub(clubId: number): Observable<Venue[]> {
    return this.http.get<Venue[]>('//localhost:8080/venues/club/' + clubId);
  }

  putVenuesForClub(clubId: number, venues: Venue[]): Observable<any> {
    return this.http.put('//localhost:8080/venues/club/' + clubId, venues);
  }
}
