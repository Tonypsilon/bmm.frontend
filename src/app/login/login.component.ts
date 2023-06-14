import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'bmm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    })
  });

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {

  }

  submitForm() {
    const formValue = this.loginForm.getRawValue();
    this.authService.login(formValue.username, formValue.password);
  }

}
