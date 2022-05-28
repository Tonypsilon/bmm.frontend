import { Component, OnInit } from '@angular/core';
import { SeasonData } from './season-data';

@Component({
  selector: 'bmm-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  public seasonData!: SeasonData;

  constructor() { }

  ngOnInit(): void {
  }

}
