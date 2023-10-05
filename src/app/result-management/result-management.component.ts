import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../shared/data/id-and-label";

@Component({
  selector: 'bmm-result-management',
  templateUrl: './result-management.component.html',
  styleUrls: ['./result-management.component.scss']
})
export class ResultManagementComponent {
  @Input() matches: IdAndLabel[] = [];
  match?: IdAndLabel;

}
