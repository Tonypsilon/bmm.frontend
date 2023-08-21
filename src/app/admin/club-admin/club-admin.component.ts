import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../../shared/data/id-and-label";
import {SeasonService} from "../../shared/season.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'bmm-club-admin',
  templateUrl: './club-admin.component.html',
  styleUrls: ['./club-admin.component.scss']
})
export class ClubAdminComponent {
  seasons$: Observable<IdAndLabel[]>;

  @Input() clubs: IdAndLabel[] = [];

  constructor(private seasonService: SeasonService) {
    this.seasons$ = seasonService.getAllSeasons()
      .pipe(map(seasons => seasons.filter(season => {
        return season.stage && season.stage === 'REGISTRATION';
      }))
      ).pipe(map(season => seasonService.seasonsToIdAndLabels(season)));
  }
}
