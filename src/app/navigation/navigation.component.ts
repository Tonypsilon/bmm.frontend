import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SeasonNames } from './season-names';

@Component({
  selector: 'bmm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isAuthenticated = false;
  public seasonNames: string[] = ["2021-22"];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<SeasonNames>(environment.apiUrl+'/season/allNonArchived').subscribe(res => this.seasonNames = res.seasonNames);
  }

}
