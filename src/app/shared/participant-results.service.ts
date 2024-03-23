import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ParticipantResults} from "./data/participant-results";

@Injectable({
  providedIn: 'root'
})
export class ParticipantResultsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getParticipantResults(participantId: number): Observable<ParticipantResults> {
    return this.http.get<ParticipantResults>(
      this.apiUrl + '/participants/' + participantId + '/results');
  }
}
