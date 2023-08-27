import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../../shared/data/id-and-label";

@Component({
  selector: 'bmm-organization-admin',
  templateUrl: './organization-admin.component.html',
  styleUrls: ['./organization-admin.component.scss']
})
export class OrganizationAdminComponent {
  @Input() organizations: IdAndLabel[] = [];

  constructor() {
  }
}
