import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Season } from '../shared/data/season';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'bmm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  isAuthenticated: boolean = false;
  seasonNames: string[] = [];

  constructor(private http: HttpClient,
    private authSercie: AuthenticationService) {
  }

  ngOnInit(): void {
    this.http.get<Season[]>('//localhost:8080/seasons').subscribe(
      res => this.seasonNames = res.map(season => season.name)
    );

    this.authSercie.isAuthenticated$.subscribe(
      value => this.isAuthenticated = value
    );
  }

  logout(): void {
    this.authSercie.logout();
  }

}
