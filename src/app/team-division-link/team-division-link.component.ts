import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../shared/data/id-and-label";

@Component({
  selector: 'bmm-team-division-link',
  templateUrl: './team-division-link.component.html',
  styleUrls: ['./team-division-link.component.scss']
})
export class TeamDivisionLinkComponent {
  @Input() seasons: IdAndLabel[] = [];
  season?: IdAndLabel;

}
