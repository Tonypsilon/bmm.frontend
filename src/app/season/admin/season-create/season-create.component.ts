import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/shared/data/season';
import { SeasonService } from 'src/app/shared/season.service';
import {MessageService} from "../../../messages/message.service";

@Component({
  selector: 'bmm-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.scss']
})
export class SeasonCreateComponent implements OnInit {

  constructor(private seasonService: SeasonService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  create(season: Season) {
    this.seasonService.create(season).subscribe(createdSeason => {
      this.messageService.success('Saison ' + createdSeason.name + 'erfolgreich erstellt.');
    });
  }

}
