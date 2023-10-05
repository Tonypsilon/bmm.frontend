import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../../shared/data/id-and-label";

@Component({
  selector: 'bmm-team-admin',
  templateUrl: './team-admin.component.html',
  styleUrls: ['./team-admin.component.scss']
})
export class TeamAdminComponent {
  @Input() matches: IdAndLabel[] = [];

}
