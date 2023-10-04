import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../shared/data/id-and-label";

@Component({
  selector: 'bmm-team-admin-management',
  templateUrl: './team-admin-management.component.html',
  styleUrls: ['./team-admin-management.component.scss']
})
export class TeamAdminManagementComponent {
  @Input() organizations: IdAndLabel[] = [];
  organization?: IdAndLabel;
}
