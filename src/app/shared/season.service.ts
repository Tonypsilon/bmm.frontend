import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Season } from './data/season';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) { }

  create(season: Season): Observable<Season> {
    return this.http.post<Season>('//localhost:8080/seasons', season);
  }
}
