import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../shared/data/id-and-label";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../messages/message.service";
import {PlayingDateService} from "../shared/playing-date.service";

@Component({
  selector: 'bmm-playing-date',
  templateUrl: './playing-date.component.html',
  styleUrls: ['./playing-date.component.scss']
})
export class PlayingDateComponent {
  @Input() seasons: IdAndLabel[] = [];

  constructor(private playingDateService: PlayingDateService,
              private messageService: MessageService) {
  }

  form = new FormGroup({
    season: new FormControl<IdAndLabel>({id: -1, label: ''}, {
      nonNullable: true,
      validators: Validators.required
    }),
    round: new FormControl<number>(0, {
      nonNullable: true,
      validators: Validators.min(1)
    }),
    date: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  })

  submitForm() {
    const formValue = this.form.getRawValue();
    this.playingDateService.createPlayingDate(formValue.season,formValue.round, formValue.date)
      .subscribe(createdPlayingDate =>
        this.messageService.success('Spieltag ' + createdPlayingDate.number + ' für Datum '
        + createdPlayingDate.date + ' erfolgreich gespeichert.'));
  }

}
