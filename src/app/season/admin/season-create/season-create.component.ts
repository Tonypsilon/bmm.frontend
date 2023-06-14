import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/shared/data/season';
import { SeasonService } from 'src/app/shared/season.service';

@Component({
  selector: 'bmm-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.scss']
})
export class SeasonCreateComponent implements OnInit {

  constructor(private service: SeasonService) {
  }

  ngOnInit(): void {
  }

  create(season: Season) {
    this.service.create(season).subscribe(createdSeason => {
      console.log(createdSeason.name);
    });
  }

}
