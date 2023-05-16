import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationData } from '../../shared/authentication-data';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'bmm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private http: HttpClient,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitForm() {
    console.log(this.loginForm.value.username);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
  }

}
