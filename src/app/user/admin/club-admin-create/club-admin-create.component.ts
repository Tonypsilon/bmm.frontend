import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {IdAndLabel} from "../../../shared/data/id-and-label";
import {HttpClient} from "@angular/common/http";
import {ClubService} from "../../../shared/club.service";
import {MessageService} from "../../../messages/message.service";
import {Club} from "../../../shared/data/club";
import {ClubAdmin} from "../../../shared/data/club-admin";

@Component({
  selector: 'bmm-club-admin-create',
  templateUrl: './club-admin-create.component.html',
  styleUrls: ['./club-admin-create.component.scss']
})
export class ClubAdminCreateComponent implements OnInit {
  clubs$: Observable<IdAndLabel[]>;

  constructor(private http: HttpClient,
              private clubService: ClubService,
              private messageService: MessageService) {
    this.clubs$ = this.getAllClubs();
  }

  ngOnInit() {
  }

  getAllClubs() : Observable<IdAndLabel[]> {
    return this.clubService.getAllClubs()
      .pipe(map(clubs => this.clubsToIdAndLabels(clubs)));
  }

  private clubsToIdAndLabels(clubs: Club[]) : IdAndLabel[] {
    return clubs.filter(club => club.id !== undefined)
      .map(club => this.clubToIdAndLabel(club));
  }

  private clubToIdAndLabel(club: Club) {
    return {
      id: club.id!,
      label: club.name
    };
  }

  create(clubAdminAsIdAndLabel: IdAndLabel) {
    const clubAdmin = {
      clubId: clubAdminAsIdAndLabel.id,
      username: clubAdminAsIdAndLabel.label
    };
    this.http.post<ClubAdmin>('//localhost:8080/clubadmins', clubAdmin)
      .subscribe(createdClubAdmin => this.messageService.success(
        'Benutzer ' + createdClubAdmin.username +
        ' wurde erfolgreich zum Vereinsadmin für den Verein mit ID '
        + createdClubAdmin.clubId
      ));
  }

}
