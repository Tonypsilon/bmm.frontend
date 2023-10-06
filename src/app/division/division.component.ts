import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Division} from "../shared/data/division";
import {DivisionResults} from "../shared/data/division-results";
import {DivisionService} from "../shared/division.service";

@Component({
  selector: 'bmm-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnChanges{
  @Input() division?: Division;
  divisionResults?: DivisionResults;

  constructor(private divisionService: DivisionService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setupData();
  }

  setupData() {
    if(this.division) {
      this.divisionService.getDivisionResults(this.division.id!)
        .subscribe(divisionResults => this.divisionResults = divisionResults);
    }

  }
}
