import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Club} from "./data/club";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) { }

  create(club: Club): Observable<Club> {
    return this.http.post<Club>('//localhost:8080/clubs', club);
  }
}
