import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Season } from './data/season';
import {map, Observable} from 'rxjs';
import {IdAndLabel} from "./data/id-and-label";

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) { }

  create(season: Season): Observable<Season> {
    return this.http.post<Season>('//localhost:8080/seasons', season);
  }

  getAllSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>('//localhost:8080/seasons');
  }

  getAllSeasonsAsIdAndLabels(): Observable<IdAndLabel[]> {
    return this.getAllSeasons()
      .pipe(map(seasons => this.seasonsToIdAndLabels(seasons)));
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
