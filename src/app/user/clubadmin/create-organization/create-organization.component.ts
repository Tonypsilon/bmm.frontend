import {Component, Input, OnInit} from '@angular/core';
import {IdAndLabel} from "../../../shared/data/id-and-label";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bmm-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss']
})
export class CreateOrganizationComponent implements OnInit {

  @Input() clubs: IdAndLabel[] = [];
  @Input() seasons: IdAndLabel[] = [];
  form = new FormGroup({
    club: new FormControl<IdAndLabel|null>(this.clubs[0] ? this.clubs[0] : null, {
      nonNullable: true,
      validators: Validators.required
    }),
    season: new FormControl<IdAndLabel|null>(this.seasons[0] ? this.seasons[0] : null, {
      nonNullable: true,
      validators: Validators.required
    }),
    isGroup: new FormControl<boolean>(false, {
      nonNullable: true,
      validators: Validators.required
    })
  });

  ngOnInit() {
  }

  submitForm() {
    console.log('Anmelden triggered: ' + this.form.getRawValue())
  }

}
