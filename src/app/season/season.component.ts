import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Season} from "../shared/data/season";
import {SeasonService} from "../shared/season.service";
import {ActivatedRoute} from "@angular/router";
import {Division} from "../shared/data/division";
import {map, switchMap} from "rxjs";
import {DivisionService} from "../shared/division.service";

@Component({
  selector: 'bmm-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnChanges {
  season: Season | undefined;
  divisions: Division[] = [];
  division: Division | undefined;

  constructor(private seasonService: SeasonService,
              private divisionService: DivisionService,
              private route: ActivatedRoute) {
    this.setupData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setupData();
  }

  setupData() {
    this.route.paramMap.pipe(map(params => params.get('seasonName')!),
      switchMap(sName => this.seasonService.getSeasonByName(sName)))
      .subscribe(s => {
        this.season = s;
        this.divisionService.getBySeason(s.name).subscribe(ds => {
          this.divisions = ds;
          if (this.route.snapshot.paramMap.get('divisionId') && ds.some(d => d.id === parseInt(this.route.snapshot.paramMap.get('divisionId')!))) {
            this.division = ds.filter(d => d.id === parseInt(this.route.snapshot.paramMap.get('divisionId')!))[0];
          } else {
            this.division = ds.at(0);
          }
        })
      });
  }

  setDivision(division: Division) {
    this.division = division;
  }
}
