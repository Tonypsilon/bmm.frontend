import {Component} from '@angular/core';
import {Venue} from "../../shared/data/venue";
import {Team} from "../../shared/data/team";
import {Player} from "../../shared/data/player";
import {VenueService} from "../../shared/venue.service";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../../messages/message.service";
import {map, switchMap} from "rxjs";
import {OrganizationService} from "../../shared/organization-service";

@Component({
  selector: 'bmm-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.scss']
})
export class EditTeamsComponent {
  venues: Venue[] = [];
  availablePlayers: Player[] = [];
  teams: Team[] = [];

  constructor(private venueService: VenueService,
              private route: ActivatedRoute,
              private organizationService: OrganizationService,
              private messageService: MessageService) {
    this.route.paramMap.pipe(
      map(params => params.get('organizationId')!),
      switchMap(organizationId => this.venueService.getVenuesOfOrganization(parseInt(organizationId)))
    ).subscribe(venueResponse => this.venues = venueResponse);

  }

}
