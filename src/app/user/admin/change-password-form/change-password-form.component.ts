import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../shared/data/user";
import {ChangePassword} from "../../../shared/data/change-password";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../shared/authentication.service";

@Component({
  selector: 'bmm-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements  OnInit {

  username: string = '';
  constructor(private authService: AuthenticationService) {
  }

  @Output() submitChangePassword = new EventEmitter<ChangePassword>();
  form = new FormGroup({
    oldPassword: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    newPassword: new FormGroup({
      newPassword1: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      newPassword2: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      })
    })
  });

  ngOnInit() {
    this.authService.getAuthenticationData()
      .subscribe(value => this.username = value.username);
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    if(formValue.newPassword.newPassword1 === formValue.newPassword.newPassword2) {
      const changePassword: ChangePassword = {
        username : this.username,
        oldPassword : formValue.oldPassword,
        newPassword : formValue.newPassword.newPassword1
      };
      console.log(changePassword);
      this.submitChangePassword.emit(changePassword);
    } else {
      console.log('Passwords dont match!');
    }
  }

}
