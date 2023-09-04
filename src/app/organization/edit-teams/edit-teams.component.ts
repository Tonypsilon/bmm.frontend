import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Venue} from "../../shared/data/venue";
import {Team} from "../../shared/data/team";
import {ParticipationEligibility} from "../../shared/data/participationEligibility";
import {VenueService} from "../../shared/venue.service";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "../../messages/message.service";
import {map, switchMap} from "rxjs";
import {OrganizationService} from "../../shared/organization.service";
import {OrganizationSetup} from "../../shared/data/organization-setup";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'bmm-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.scss']
})
export class EditTeamsComponent implements OnChanges {
  venues: Venue[] = [];
  availablePlayers: ParticipationEligibility[] = [];
  teams: Team[] = [];

  constructor(private venueService: VenueService,
              private route: ActivatedRoute,
              private organizationService: OrganizationService,
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
        this.venueService.getVenuesOfOrganization(parseInt(organizationId)))
    ).subscribe(venueResponse => this.venues = venueResponse);
    this.route.paramMap.pipe(
      map(params => params.get('organizationId')!),
      switchMap(organizationId =>
        this.organizationService.getOrganizationSetup(parseInt(organizationId)))
    ).subscribe(response => this.setAvailablePlayersAndTeams(response));
  }

  private setAvailablePlayersAndTeams(organizationSetup: OrganizationSetup) {
    this.availablePlayers = organizationSetup.availablePlayers;
    this.teams = organizationSetup.teams;
  }

  drop(event: CdkDragDrop<ParticipationEligibility[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
