import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/user.service";
import {ChangePassword} from "../../../shared/data/change-password";

@Component({
  selector: 'bmm-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service: UserService) {
  }

  ngOnInit() {
  }

  changePassword(changePassword: ChangePassword) {
    this.service.changePassword(changePassword).subscribe(changedUser => {
      console.log("Password changed for " + changedUser.username)
    });
  }

}
