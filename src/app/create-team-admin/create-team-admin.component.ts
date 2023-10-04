import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../messages/message.service";
import {TeamAdminService} from "../shared/team-admin.service";
import {map, switchMap} from "rxjs";
import {IdAndLabel} from "../shared/data/id-and-label";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bmm-create-team-admin',
  templateUrl: './create-team-admin.component.html',
  styleUrls: ['./create-team-admin.component.scss']
})
export class CreateTeamAdminComponent implements OnChanges {
  teams: IdAndLabel[] = [];

  form = new FormGroup({
    team: new FormControl<IdAndLabel>({id: -1, label:''}, {
      nonNullable: true,
      validators: Validators.required
    }),
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  });

  constructor(private teamAdminService: TeamAdminService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {
    this.setupData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setupData();
  }

  private setupData() {
    this.route.paramMap.pipe(
        map(params => params.get('organizationId')!),
        switchMap(organizationId =>
            this.teamAdminService.getTeamAdminCreationFoundation(parseInt(organizationId)))
    ).subscribe(teamsResponse => this.teams = teamsResponse);
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    if(!formValue.team || !formValue.username) {
      this.messageService.error('Team und Benutzername müssen ausgewählt sein!');
      return;
    }
    this.teamAdminService.createTeamAdmin({
      teamId: formValue.team!.id,
      username: formValue.username!
    }).subscribe(createdTeamAdmin => {
      this.messageService.success('Benutzer ' + createdTeamAdmin.username
          + ' wurde erfolgreich zum Mannschaftsadministrator.');
      this.router.navigate(['/admin/home']);
    });
  }
}
