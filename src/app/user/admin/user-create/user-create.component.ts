import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/data/user';
import { UserService } from 'src/app/shared/user.service';
import {MessageService} from "../../../messages/message.service";
import { Router } from '@angular/router';

@Component({
  selector: 'bmm-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  create(user: User) {
    this.userService.create(user).subscribe(createdUser => {
      this.router.navigate(['/admin/home']);
      this.messageService.success('Benutzer ' + createdUser.username + ' erfolgreich erstellt.');
    });
  }

}
