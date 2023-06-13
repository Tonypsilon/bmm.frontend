import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SeasonData } from 'src/app/shared/season-data';

@Component({
  selector: 'bmm-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.css']
})
export class SeasonFormComponent implements OnInit {
  @Input() season?: SeasonData;
  @Output() submitSeason = new EventEmitter<SeasonData>();
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
    const newSeason: SeasonData = {
      ...formValue
    }
    console.log(newSeason);
    this.submitSeason.emit(newSeason);
  }

}
