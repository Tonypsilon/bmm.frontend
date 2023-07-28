import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Club} from "../../../shared/data/club";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bmm-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.scss']
})
export class ClubFormComponent implements OnInit{

  @Input() club?: Club;
  @Output() submitClub = new EventEmitter<Club>();
  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    zps: new FormControl<number>(-1, {
      nonNullable: true,
      validators: Validators.required
    })
  });

  ngOnInit() {
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    const newClub: Club = {
      ...formValue,
      active: true
    }
    this.submitClub.emit(newClub);
  }

}
