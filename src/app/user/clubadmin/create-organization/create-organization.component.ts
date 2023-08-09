import {Component, Input, OnInit} from '@angular/core';
import {IdAndLabel} from "../../../shared/data/id-and-label";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../../../messages/message.service";
import {HttpClient} from "@angular/common/http";
import {Organization} from "../../../shared/data/organization";

@Component({
  selector: 'bmm-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss']
})
export class CreateOrganizationComponent implements OnInit {

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
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    if(!formValue.season || !formValue.club) {
      this.messageService.error('Es müssen ein Verein und eine Saison ausgewählt sein!');
    } else {
      if (formValue.isGroup) {
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
