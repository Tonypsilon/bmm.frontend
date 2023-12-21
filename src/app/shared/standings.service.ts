import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {DivisionStandings} from "./data/division-standings";

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDivisionStandings(divisionId: number): Observable<DivisionStandings> {
    return this.http.get<DivisionStandings>(this.apiUrl + '/divisions/' + divisionId + '/standings');
  }
}
