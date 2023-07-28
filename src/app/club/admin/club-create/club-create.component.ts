import {Component, OnInit} from '@angular/core';
import {ClubService} from "../../../shared/club.service";
import {MessageService} from "../../../messages/message.service";
import {Club} from "../../../shared/data/club";

@Component({
  selector: 'bmm-club-create',
  templateUrl: './club-create.component.html',
  styleUrls: ['./club-create.component.scss']
})
export class ClubCreateComponent implements OnInit {

  constructor(private clubService: ClubService,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  create(club: Club) {
    this.clubService.create(club).subscribe(createdClub => {
      this.messageService.success('Verein ' + createdClub.name + ' erfolgreich erstellt.');
    });
  }

}
