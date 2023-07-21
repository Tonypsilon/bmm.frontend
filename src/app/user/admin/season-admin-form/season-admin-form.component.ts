import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Season} from "../../../shared/data/season";
import {SeasonAdmin} from "../../../shared/data/season-admin";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IdAndLabel} from "../../../shared/data/id-and-label";

@Component({
  selector: 'bmm-season-admin-form',
  templateUrl: './season-admin-form.component.html',
  styleUrls: ['./season-admin-form.component.scss']
})
export class SeasonAdminFormComponent implements OnInit {

  @Input() seasons: IdAndLabel[] = [];
  @Output() submitSeasonAdmin = new EventEmitter<SeasonAdmin>();
  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    season: new FormControl<IdAndLabel|null>(null, {
      nonNullable: true,
      validators: Validators.required
    })
  });

  ngOnInit() {
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    if(formValue.season && formValue.season.id && formValue.username) {
      const newSeasonAdmin = {
        seasonId : formValue.season.id,
        username : formValue.username
      };
      this.submitSeasonAdmin.emit(newSeasonAdmin);
    } else {
      console.log('Keine Saison oder keinen Benutzer ausgewählt!');
    }

  }

}
