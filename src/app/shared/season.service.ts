import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Season } from './data/season';
import {map, Observable} from 'rxjs';
import {IdAndLabel} from "./data/id-and-label";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(season: Season): Observable<Season> {
    return this.http.post<Season>(this.apiUrl + '/seasons', season);
  }

  getAllSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(this.apiUrl + '/seasons');
  }

  getAllSeasonsAsIdAndLabels(): Observable<IdAndLabel[]> {
    return this.getAllSeasons()
      .pipe(map(seasons => this.seasonsToIdAndLabels(seasons)));
  }

  patchSeasonStage(seasonName: string, stage: string): Observable<Season> {
    return this.http.patch<Season>(this.apiUrl + '/seasons/' + seasonName, {
      seasonName: seasonName,
      stage: stage
    })
  }

  public seasonsToIdAndLabels(seasons: Season[]) : IdAndLabel[] {
    return seasons.filter(season => season.id !== undefined)
      .map(season => this.seasonToIdAndLabel(season));
  }

  private seasonToIdAndLabel(season: Season) : IdAndLabel {
    return {
      id: season.id!,
      label: season.name
    };
  }
}
