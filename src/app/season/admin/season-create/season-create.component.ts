import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeasonData } from 'src/app/shared/season-data';
import { SeasonService } from 'src/app/shared/season.service';

@Component({
  selector: 'bmm-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.css']
})
export class SeasonCreateComponent implements OnInit {

  constructor(
    private service: SeasonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(season: SeasonData) {
    this.service.create(season).subscribe(createdSeason => {
      console.log(createdSeason.name);
    });
  }

}
