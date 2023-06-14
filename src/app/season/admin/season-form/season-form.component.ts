import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Season } from 'src/app/shared/data/season';

@Component({
  selector: 'bmm-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.scss']
})
export class SeasonFormComponent implements OnInit {

  @Input() season?: Season;
  @Output() submitSeason = new EventEmitter<Season>();
  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    })
  });

  ngOnInit(): void {
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    const newSeason: Season = {
      ...formValue
    }
    console.log(newSeason);
    this.submitSeason.emit(newSeason);
  }
}
