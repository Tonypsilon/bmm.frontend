import {Component, OnInit} from '@angular/core';
import {SeasonService} from "../../../shared/season.service";
import {SeasonAdmin} from "../../../shared/data/season-admin";
import {IdAndLabel} from "../../../shared/data/id-and-label";
import {map, Observable} from 'rxjs';
import {Season} from "../../../shared/data/season";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'bmm-season-admin-create',
  templateUrl: './season-admin-create.component.html',
  styleUrls: ['./season-admin-create.component.scss']
})
export class SeasonAdminCreateComponent implements OnInit {
  seasons$: Observable<IdAndLabel[]>;

  constructor(private http: HttpClient,
              private seasonService: SeasonService) {
    this.seasons$ = this.getAllSeasons();
  }

  ngOnInit() {
  }

  getAllSeasons() : Observable<IdAndLabel[]> {
    return this.seasonService.getAllSeasons()
      .pipe(map(seasons => this.seasonsToIdAndLabels(seasons)));
  }

  create(seasonAdmin: SeasonAdmin) {
    this.http.post<SeasonAdmin>('//localhost:8080/seasonadmins', seasonAdmin)
      .subscribe(value => console.log(value));
  }

  private seasonsToIdAndLabels(seasons: Season[]) : IdAndLabel[] {
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
