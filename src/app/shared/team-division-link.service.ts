import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DivisionSetupFoundation} from "./data/division-setup-foundation";
import {TeamDivisionLink} from "./data/team-division-link";

@Injectable({
  providedIn: 'root'
})
export class TeamDivisionLinkService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDivisionSetupFoundation(seasonId: number): Observable<DivisionSetupFoundation> {
    return this.http.get<DivisionSetupFoundation>(this.apiUrl + '/seasons/' + seasonId + '/divisionsetup');
  }

  putDivisionSetup(seasonId: number, teamDivisionLinks: TeamDivisionLink[]): Observable<TeamDivisionLink[]> {
    return this.http.put<TeamDivisionLink[]>(this.apiUrl + '/seasons/' + seasonId + '/divisionsetup',
        teamDivisionLinks);
  }
}
