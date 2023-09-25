import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../../shared/data/id-and-label";

@Component({
  selector: 'bmm-season-admin',
  templateUrl: './season-admin.component.html',
  styleUrls: ['./season-admin.component.scss']
})
export class SeasonAdminComponent {
  @Input() seasons: IdAndLabel[] = [];
}
