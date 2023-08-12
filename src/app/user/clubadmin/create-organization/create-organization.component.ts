import {Component, Input, OnInit} from '@angular/core';
import {IdAndLabel} from "../../../shared/data/id-and-label";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../../../messages/message.service";
import {HttpClient} from "@angular/common/http";
import {Organization} from "../../../shared/data/organization";
import {MatDialog} from "@angular/material/dialog";
import {SelectMultipleClubsComponent} from "./select-multiple-clubs/select-multiple-clubs.component";
import {ClubService} from "../../../shared/club.service";
import { Observable} from "rxjs";

@Component({
  selector: 'bmm-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss']
})
export class CreateOrganizationComponent implements OnInit {
  availableClubs$: Observable<IdAndLabel[]>;

  @Input() clubs: IdAndLabel[] = [];
  @Input() seasons: IdAndLabel[] = [];
  form = new FormGroup({
    club: new FormControl<IdAndLabel|null>(this.clubs[0] ? this.clubs[0] : null, {
      nonNullable: true,
      validators: Validators.required
    }),
    season: new FormControl<IdAndLabel|null>(this.seasons[0] ? this.seasons[0] : null, {
      nonNullable: true,
      validators: Validators.required
    }),
    isGroup: new FormControl<boolean>(false, {
      nonNullable: true,
      validators: Validators.required
    })
  });

  constructor(private messageService: MessageService,
              private http: HttpClient,
              private clubService: ClubService,
              public dialog: MatDialog) {
    this.availableClubs$ = this.clubService.getAllClubsAsIdAndLabels();
  }

  ngOnInit() {
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    if(!formValue.season || !formValue.club) {
      this.messageService.error('Es müssen ein Verein und eine Saison ausgewählt sein!');
    } else {
      if (formValue.isGroup) {
        let dialogRef;
        this.availableClubs$.subscribe(clubs => {
          dialogRef = this.dialog.open(SelectMultipleClubsComponent, {
            data: {availableClubs: clubs.filter(club => club.id !== formValue.club!.id)}
          });
          dialogRef.afterClosed().subscribe(result => {
            let clubIds: number[] = [formValue.club!.id];
            if (result.selectedClubs) {
              for ( let selectedClub of result.selectedClubs) {
                clubIds.push(selectedClub);
              }
            }
            const newOrganization: Organization = {
              seasonId: formValue.season!.id,
              name: result.name,
              clubIds: clubIds
            }
            this.postOrganization(newOrganization);
          });
        });

        this.messageService.error('Anmeldung als Spielgemeinschaft derzeit nicht möglich.');
      } else {
        const newOrganization: Organization = {
          seasonId: formValue.season.id,
          name: formValue.club.label,
          clubIds: [formValue.club.id]
        }
        this.postOrganization(newOrganization);
      }
    }
  }

  private postOrganization(organization: Organization) {
    this.http.post<Organization>('//localhost:8080/organizations', organization)
      .subscribe(createdOrganization => {
        this.messageService.success('Organisation '
          + createdOrganization.name
          + ' erfolgreich angemeldet.');
      })
  }

}
