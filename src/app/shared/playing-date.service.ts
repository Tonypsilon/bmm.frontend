import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IdAndLabel} from "./data/id-and-label";
import {PlayingDate} from "./data/playing-date";

@Injectable({
  providedIn: 'root'
})
export class PlayingDateService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  createPlayingDate(season: IdAndLabel, round: number, date: string) {
    return this.http.post<PlayingDate>(this.apiUrl + '/playingdates', {
      seasonId: season.id,
      number: round,
      date: date
    });
  }
}
