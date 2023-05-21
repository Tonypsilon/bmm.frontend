import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SeasonData } from 'src/app/shared/season-data';
import { EventEmitter } from 'stream';

@Component({
  selector: 'bmm-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.css']
})
export class SeasonFormComponent implements OnChanges {
  @Input() season?: SeasonData;
  @Output() submitSeason = new EventEmitter<SeasonData>();

  ngOnChanges(): void {
  }

}
