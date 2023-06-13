import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SeasonData } from './season-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(season: SeasonData): Observable<SeasonData> {
    return this.http.post<SeasonData>(`${this.apiUrl}/seasons`, season);
  }
}
