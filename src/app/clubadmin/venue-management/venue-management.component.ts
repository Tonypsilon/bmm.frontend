import {Component, Input, OnInit} from '@angular/core';
import {IdAndLabel} from "../../shared/data/id-and-label";

@Component({
  selector: 'bmm-venue-management',
  templateUrl: './venue-management.component.html',
  styleUrls: ['./venue-management.component.scss']
})
export class VenueManagementComponent implements OnInit {

  @Input() clubs: IdAndLabel[] = [];
  club?: IdAndLabel;

  ngOnInit() {
  }

}
