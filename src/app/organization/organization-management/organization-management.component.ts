import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../../shared/data/id-and-label";

@Component({
  selector: 'bmm-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.scss']
})
export class OrganizationManagementComponent {
  @Input() organizations: IdAndLabel[] = [];
  organization?: IdAndLabel;
}
