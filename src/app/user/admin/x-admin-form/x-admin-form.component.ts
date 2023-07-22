import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SeasonAdmin} from "../../../shared/data/season-admin";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IdAndLabel} from "../../../shared/data/id-and-label";

@Component({
  selector: 'bmm-season-admin-form',
  templateUrl: './x-admin-form.component.html',
  styleUrls: ['./x-admin-form.component.scss']
})
export class XAdminFormComponent implements OnInit {

  @Input() xs: IdAndLabel[] = [];
  @Output() submitSeasonAdmin = new EventEmitter<SeasonAdmin>();
  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    x: new FormControl<IdAndLabel|null>(null, {
      nonNullable: true,
      validators: Validators.required
    })
  });

  ngOnInit() {
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    if(formValue.x && formValue.x.id && formValue.username) {
      const newSeasonAdmin = {
        seasonId : formValue.x.id,
        username : formValue.username
      };
      this.submitSeasonAdmin.emit(newSeasonAdmin);
    } else {
      console.log('Keine Saison oder keinen Benutzer ausgewählt!');
    }

  }

}
