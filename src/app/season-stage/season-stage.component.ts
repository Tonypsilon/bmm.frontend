import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../shared/data/id-and-label";
import {SeasonService} from "../shared/season.service";
import {MessageService} from "../messages/message.service";

@Component({
  selector: 'bmm-season-stage',
  templateUrl: './season-stage.component.html',
  styleUrls: ['./season-stage.component.scss']
})
export class SeasonStageComponent {
  @Input() seasons: IdAndLabel[] = [];
  season?: IdAndLabel;
  stages: string[] = ['REGISTRATION','PREPARATION', 'RUNNING', 'COMPLETED', 'ARCHIVED'];
  stage?: string;

  constructor(private seasonService: SeasonService,
              private messageService: MessageService) {
  }

  submit() {
    this.seasonService.patchSeasonStage(this.season!.label, this.stage!)
      .subscribe(patchedSeason => {
        this.messageService.success(
          'Saison ' + patchedSeason.name + ' erfolgreich in Phase ' + patchedSeason.stage + ' gebracht.');
    });
  }
}
