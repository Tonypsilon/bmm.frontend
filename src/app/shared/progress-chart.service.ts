import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {DivisionProgressChart} from "./data/division-progress-chart";

@Injectable({
  providedIn: 'root'
})
export class ProgressChartService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDivisionProgressChart(divisionId: number): Observable<DivisionProgressChart> {
    return this.http.get<DivisionProgressChart>(
      this.apiUrl + '/divisions/' + divisionId + '/progress');
  }
}
