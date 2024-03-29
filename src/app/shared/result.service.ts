import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Match} from "./data/match";
import {Game} from "./data/game";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMatchFoundation(matchId: number): Observable<Match> {
    return this.http.get<Match>(this.apiUrl + '/matches/' + matchId + '/info');
  }

  putResultsForMatch(matchId: number, games: Game[], refereeId: number, close: boolean): Observable<Match> {
    return this.http.put<Match>(this.apiUrl + '/matches/' + matchId + '/results/played', {
      games: games,
      refereeId: refereeId,
      closeMatch: close
    });
  }
}
