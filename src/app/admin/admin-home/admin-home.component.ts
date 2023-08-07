import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Authentication} from "../../shared/data/authentication";
import {AuthenticationService} from "../../shared/authentication.service";

@Component({
  selector: 'bmm-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  authentication$: Observable<Authentication>;

  constructor(private authService: AuthenticationService) {
    this.authentication$ = authService.getAuthenticationData();
  }

}
