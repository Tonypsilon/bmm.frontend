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
  organizationId: number = 0;

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
    this.route.paramMap.pipe(
      map(params => params.get('organizationId')!))
      .subscribe(value => this.organizationId = parseInt(value));
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

  moveToAvailablePlayers(teamNumber: number, index: number) {
    let player: ParticipationEligibility = this.teams[teamNumber].participants[index];
    this.availablePlayers.push(player);
    this.teams[teamNumber].participants.splice(index, 1);
  }

  addNewTeam() {
    this.teams.push({
      organizationId: this.organizationId,
      number: this.teams.length +1,
      participants: []
    })
  }

  deleteLastTeam() {
    const lastTeam = this.teams[this.teams.length-1];
    while (lastTeam.participants.length > 0) {
      this.moveToAvailablePlayers(this.teams.length-1, lastTeam.participants.length-1);
    }
    this.teams.pop();
  }

  sortAvailablePlayersByName() {
    this.availablePlayers.sort((p1, p2) => {
      if(p1.surname < p2.surname) {
        return -1;
      }
      if(p1.surname > p2.surname) {
        return 1;
      }
      if(p1.forename < p2.forename) {
        return -1;
      }
      if(p1.forename > p2.forename) {
        return 1;
      }
      return 0;
    });
  }

  sortAvailablePlayersByRating() {
    this.availablePlayers.sort((p1, p2) => {
      if (!p1.dwz && !p2.dwz) {
        return 0;
      }
      if(!p1.dwz) {
        return 1;
      }
      if(!p2.dwz) {
        return -1;
      }
      if(p1.dwz < p2.dwz) {
        return 1;
      }
      if(p1.dwz > p2.dwz) {
        return -1;
      }
      return 0;
    });
  }

  pushParticipantToTeam(participant: ParticipationEligibility, index: number, teamNumber: number) {
    this.teams[teamNumber-1].participants.push(participant);
    this.availablePlayers.splice(index, 1);
  }

  submit() {

  }
}
