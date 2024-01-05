import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Division} from "../shared/data/division";
import {DivisionResults} from "../shared/data/division-results";
import {DivisionService} from "../shared/division.service";
import {DivisionStandings} from "../shared/data/division-standings";
import {StandingsService} from "../shared/standings.service";
import {ProgressChartService} from "../shared/progress-chart.service";
import {DivisionProgressChart} from "../shared/data/division-progress-chart";

@Component({
  selector: 'bmm-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnChanges{
  @Input() division?: Division;
  divisionResults?: DivisionResults;
  standings?: DivisionStandings;
  displayedStandingsColumns: string[] = [];
  progressChart?: DivisionProgressChart;
  displayedProgressChartColumns: string[] = [];
  rounds: number[] = [];

  constructor(private divisionService: DivisionService,
              private standingsService: StandingsService,
              private progressChartService: ProgressChartService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setupData();
  }

  setupData() {
    if(this.division) {
      this.divisionService.getDivisionResults(this.division.id!)
        .subscribe(divisionResults => this.divisionResults = divisionResults);
      this.standingsService.getDivisionStandings(this.division.id!)
        .subscribe(divisionStandings => {
          this.standings = divisionStandings;
          this.displayedStandingsColumns = ['num', 'team'];
          for(let i=1; i<=divisionStandings.rows.length; i++) {
            this.displayedStandingsColumns.push('team' + i);
          }
          this.displayedStandingsColumns.push('mp','bp');
        });
      this.progressChartService.getDivisionProgressChart(this.division.id!)
        .subscribe(divisionProgressChart => {
          this.progressChart = divisionProgressChart;
          this.displayedProgressChartColumns = ['code', 'name'];
          for(let i=1; i<= divisionProgressChart.numberOfRounds; i++) {
            this.displayedProgressChartColumns.push('r' + i);
          }
        });
    }
  }

  protected readonly Array = Array;
}
