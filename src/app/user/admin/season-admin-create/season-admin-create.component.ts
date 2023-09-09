import {Component, OnInit} from '@angular/core';
import {SeasonService} from "../../../shared/season.service";
import {SeasonAdmin} from "../../../shared/data/season-admin";
import {IdAndLabel} from "../../../shared/data/id-and-label";
import {map, Observable} from 'rxjs';
import {Season} from "../../../shared/data/season";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../../../messages/message.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'bmm-season-admin-create',
  templateUrl: './season-admin-create.component.html',
  styleUrls: ['./season-admin-create.component.scss']
})
export class SeasonAdminCreateComponent implements OnInit {
  seasons$: Observable<IdAndLabel[]>;

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private seasonService: SeasonService,
              private messageService: MessageService) {
    this.seasons$ = this.getAllSeasons();
  }

  ngOnInit() {
  }

  getAllSeasons() : Observable<IdAndLabel[]> {
    return this.seasonService.getAllSeasonsAsIdAndLabels();
  }

  create(seasonAdminAsIdAndLabel: IdAndLabel) {
    const seasonAdmin = {
      seasonId: seasonAdminAsIdAndLabel.id,
      username: seasonAdminAsIdAndLabel.label
    };
    this.http.post<SeasonAdmin>(this.apiUrl + '/seasonadmins', seasonAdmin)
      .subscribe(createdSeasonAdmin => this.messageService.success(
        'Benutzer ' + createdSeasonAdmin.username +
        ' wurde erfolgreich zum Saisonadmin für die Saison mit ID '
        + createdSeasonAdmin.seasonId
      ));
  }



}
