import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Club} from "./data/club";
import {map, Observable} from "rxjs";
import {IdAndLabel} from "./data/id-and-label";

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) { }

  create(club: Club): Observable<Club> {
    return this.http.post<Club>('//localhost:8080/clubs', club);
  }

  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>('//localhost:8080/clubs');
  }

  getAllClubsAsIdAndLabels(): Observable<IdAndLabel[]> {
    return this.getAllClubs()
      .pipe(map(clubs => this.clubsToIdAndLabels(clubs)));
  }

  private clubsToIdAndLabels(clubs: Club[]): IdAndLabel[] {
    return clubs.filter(club => club.id !== undefined)
      .map(club => this.clubToIdAndLabel(club));
  }

  private clubToIdAndLabel(club: Club): IdAndLabel {
    return {
      id: club.id!,
      label: club.name
    }
  }
}
