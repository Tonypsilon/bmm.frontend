import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/shared/data/role';
import { User } from 'src/app/shared/data/user';

@Component({
  selector: 'bmm-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  availableRoles = Object.values(Role);

  @Input() user?: User;
  @Output() submitUser = new EventEmitter<User>();
  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    password: new FormGroup({
      password1: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      password2: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      })
    }),
    roles: new FormControl<Role[]>([], {
      nonNullable: true,
      validators: Validators.required
    })
  })

  ngOnInit(): void {
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    if(formValue.password.password1 === formValue.password.password2) {
      const newUser: User = {
      username : formValue.name,
      password : formValue.password.password1,
      roles: formValue.roles};

      console.log(newUser);
    this.submitUser.emit(newUser);
    } else {
      console.log('Passwords dont match!');
    }
  }

}
