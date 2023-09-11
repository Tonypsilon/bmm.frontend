import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/user.service";
import {ChangePassword} from "../../../shared/data/change-password";
import {MessageService} from "../../../messages/message.service";
import { Router } from '@angular/router';

@Component({
  selector: 'bmm-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService: UserService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  changePassword(changePassword: ChangePassword) {
    this.userService.changePassword(changePassword).subscribe(changedUser => {
      this.router.navigate(['/admin/home']);
      this.messageService.success('Das Passwort wurde erfolgreich geändert.')
    });
  }

}
