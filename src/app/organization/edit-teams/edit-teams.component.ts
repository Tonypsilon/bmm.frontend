import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Venue} from "../../shared/data/venue";
import {Team} from "../../shared/data/team";
import {ParticipationEligibility} from "../../shared/data/participationEligibility";
import {VenueService} from "../../shared/venue.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../../messages/message.service";
import {map, switchMap} from "rxjs";
import {OrganizationService} from "../../shared/organization.service";
import {OrganizationSetup} from "../../shared/data/organization-setup";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {EditTeamsDialogComponent} from "../edit-teams-dialog/edit-teams-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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
  firstTeamNumber: number = 1;
  selectedVenues: Venue[] = [];
  teamCaptains: string[] = [];

  constructor(private venueService: VenueService,
              private route: ActivatedRoute,
              private organizationService: OrganizationService,
              public dialog: MatDialog,
              private router: Router,
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
    ).subscribe(response => {
      this.setAvailablePlayersAndTeams(response);
    });
    this.route.paramMap.pipe(
      map(params => params.get('organizationId')!))
      .subscribe(value => this.organizationId = parseInt(value));
  }

  private setAvailablePlayersAndTeams(organizationSetup: OrganizationSetup) {
    this.availablePlayers = organizationSetup.availablePlayers;
    this.teams = organizationSetup.teams;
    this.firstTeamNumber = organizationSetup.firstTeamNumber;
    this.teamCaptains = organizationSetup.teams.map(team => team.captainUsername!);
    this.selectedVenues = organizationSetup.teams
      .map(team => this.venues.filter(venue => venue.id == team.venueId))
      .flat();
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
      number: this.teams.length + (this.firstTeamNumber ?? 1),
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
    let dialogRef;
    dialogRef = this.dialog.open(EditTeamsDialogComponent, {
      data: {
        availableVenues: this.venues,
        numberOfTeams: this.teams.length,
        selectedVenues: this.selectedVenues,
        teamCaptains: this.teamCaptains
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != "cancel") {
        if (this.selectedVenues.length != this.teams.length || this.teamCaptains.length != this.teams.length) {
          this.messageService.error("Für jede Mannschaft muss ein Spielort und ein Mannschaftsleiter ausgewählt sein!");
          return;
        }
        for(let i=0; i<this.teams.length; i++) {
          this.teams[i].venueId = this.selectedVenues[i].id;
          this.teams[i].captainUsername = this.teamCaptains[i];
        }
        this.organizationService.putOrganizationSetup(this.organizationId, this.teams)
            .subscribe(result => {
              this.messageService.success("Mannschaften wurden erfolgreich aktualisiert.");
              this.router.navigate(['/admin/home']);
            });
      }
    });
  }
}
