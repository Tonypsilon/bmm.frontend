import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/data/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'bmm-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
  }

  create(user: User) {
    this.service.create(user).subscribe(createdUser => {
      console.log("User created: " + createdUser.username);
    });
  }

}
