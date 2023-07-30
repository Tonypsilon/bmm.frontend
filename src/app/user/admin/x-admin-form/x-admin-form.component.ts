import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SeasonAdmin} from "../../../shared/data/season-admin";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IdAndLabel} from "../../../shared/data/id-and-label";
import {MessageService} from "../../../messages/message.service";

@Component({
  selector: 'bmm-x-admin-form',
  templateUrl: './x-admin-form.component.html',
  styleUrls: ['./x-admin-form.component.scss']
})
export class XAdminFormComponent implements OnInit {

  constructor(private messageService: MessageService) {
  }

  @Input() xs: IdAndLabel[] = [];
  @Input() xName: string ='';
  @Output() submitXAdmin = new EventEmitter<IdAndLabel>();
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
    console.log(formValue);
    console.log(this.xs);
    if(formValue.x && formValue.x.id && formValue.username) {
      const newXAdmin = {
        id : formValue.x.id,
        label : formValue.username
      };
      this.submitXAdmin.emit(newXAdmin);
    } else {
      this.messageService.error('Beide Felder müssen ausgefüllt sein!');
    }
  }
}
