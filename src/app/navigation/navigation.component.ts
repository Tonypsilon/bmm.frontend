import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../shared/authentication.service';
import { SeasonService } from "../shared/season.service";
import {Router} from "@angular/router";

@Component({
  selector: 'bmm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  isAuthenticated: boolean = false;
  seasonNames: string[] = [];

  constructor(private router: Router,
              private authService: AuthenticationService,
              private seasonService: SeasonService) {
  }

  ngOnInit(): void {
    this.seasonService.getAllSeasons().subscribe(
      res => this.seasonNames = res.map(season => season.name)
    );

    this.authService.isAuthenticated$.subscribe(
      value => this.isAuthenticated = value
    );
  }

  logout(): void {
    this.authService.logout();
  }

  goToSeason(season: string) {
    this.router.navigate(['/seasons', season]);
  }

}
