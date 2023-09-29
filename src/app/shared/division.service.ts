import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IdAndLabel} from "./data/id-and-label";
import {Division} from "./data/division";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createDivision(season: IdAndLabel,
                 name: string,
                 level: number,
                 numberOfBoards: number,
                 numberOfTeams: number) {
    return this.http.post<Division>(this.apiUrl + '/divisions', {
      seasonId: season.id,
      name: name,
      level: level,
      numberOfBoards: numberOfBoards,
      numberOfTeams: numberOfTeams
    });
  }
}
