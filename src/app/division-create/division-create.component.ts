import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../shared/data/id-and-label";
import {MessageService} from "../messages/message.service";
import {DivisionService} from "../shared/division.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bmm-division-create',
  templateUrl: './division-create.component.html',
  styleUrls: ['./division-create.component.scss']
})
export class DivisionCreateComponent {
  @Input() seasons: IdAndLabel[] = [];

  constructor(private divisionService: DivisionService,
              private messageService: MessageService) {
  }

  form = new FormGroup({
    season: new FormControl<IdAndLabel>({id: -1, label: ''}, {
      nonNullable: true,
      validators: Validators.required
    }),
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
    level: new FormControl<number>(1, {
      nonNullable: true,
      validators: Validators.min(1)
    }),
    numberOfBoards: new FormControl<number>(8, {
      nonNullable: true,
      validators: Validators.min(4)
    }),
    numberOfTeams: new FormControl<number>(10, {
      nonNullable: true,
      validators: Validators.min(8)
    })
  });

  submitForm() {
    const formValue = this.form.getRawValue();
    this.divisionService.createDivision(formValue.season, formValue.name,
      formValue.level, formValue.numberOfBoards, formValue.numberOfTeams)
      .subscribe(createdDivision =>
        this.messageService.success('Staffel ' + createdDivision.name + ' erfolgreich erstellt.'));
  }
}
