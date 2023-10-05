import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Participant} from "../shared/data/participant";
import {IdAndLabel} from "../shared/data/id-and-label";
import {Game} from "../shared/data/game";
import {ResultService} from "../shared/result.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../messages/message.service";
import {map, switchMap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {EditResultsDialogComponent} from "../edit-results-dialog/edit-results-dialog.component";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bmm-edit-games',
  templateUrl: './edit-results.component.html',
  styleUrls: ['./edit-results.component.scss']
})
export class EditResultsComponent implements OnChanges {
  availableHomePlayers: Participant[] = [];
  availableAwayPlayers: Participant[] = [];
  selectedHomePlayers: Participant[] = [];
  selectedAwayPlayers: Participant[] = [];
  numberOfBoards: number = 0;
  availableReferees: IdAndLabel[] = [];
  selectedReferee?: IdAndLabel;
  games: Game[] = [];
  matchId: number = 0;
  closeMatch: boolean = false;

  constructor(private resultService: ResultService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private authService: AuthenticationService,
              public dialog: MatDialog) {
    this.setupData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setupData();
  }

  private setupData() {
    this.route.paramMap.pipe(
        map(params => params.get('matchId')!),
    ).subscribe(m => this.matchId = parseInt(m));
    this.route.paramMap.pipe(
        map(params => params.get('matchId')!),
        switchMap(matchId =>
            this.resultService.getMatchFoundation(parseInt(matchId)))
    ).subscribe(response => {
      this.availableHomePlayers = response.availableHomePlayers;
      this.availableAwayPlayers = response.availableAwayPlayers;
      this.selectedHomePlayers = response.selectedHomePlayers;
      this.selectedAwayPlayers = response.selectedAwayPlayers;
      this.numberOfBoards = response.numberOfBoards;
      this.availableReferees = response.availableReferees;
      this.selectedReferee = response.selectedReferee;
      this.games = response.games;
    });
  }

  private participantsChanged() {
    if(!this.games) {
      return false;
    }
    if(this.games.length != this.numberOfBoards) {
      console.log('games length not equal to number of boards')
      return true;
    }
    for (let i = 0; i < this.games.length; i++) {
      if(!this.compareParticipants(this.selectedHomePlayers.at(i), this.games.at(i)!.homeParticipant)) {
        return true;
      }
      if(!this.compareParticipants(this.selectedAwayPlayers.at(i), this.games.at(i)!.awayParticipant)) {
        console.log('unequal away: ' + i);
        return true;
      }
    }
    return false;
  }

  submit() {
    if(this.numberOfBoards != this.selectedHomePlayers.length
        || this.numberOfBoards != this.selectedAwayPlayers.length) {
      this.messageService.error("Es wurde nicht die richtige Anzahl Spieler ausgewählt!");
      return;
    }
    if(!this.selectedReferee) {
      this.messageService.error("Es muss ein Schiedsrichter ausgewählt sein!");
      return;
    }
    if (this.participantsChanged()) {
      this.games = [];
    }
    if(!this.games) {
      this.games = [];
    }
    if(this.games.length != this.numberOfBoards) {
      for (let i=0; i<this.numberOfBoards; i++) {
        this.games.push({
          homeParticipant: this.selectedHomePlayers.at(i)!,
          awayParticipant: this.selectedAwayPlayers.at(i)!,
          result: {label: '?:?'}
        });
      }
    }
    this.closeMatch = false;
    let dialogRef;
    dialogRef = this.dialog.open(EditResultsDialogComponent, {
      data: {
        results: this.games,
        closeMatch: this.closeMatch
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe( result => {
      if (result != "cancel") {
        this.resultService.putResultsForMatch(this.matchId, this.games, this.selectedReferee!.id!, result.closeMatch)
            .subscribe(response => {
              this.messageService.success('Ergebnisse wurden gespeichert.');
              this.router.navigate(['/admin/home']);
              this.authService.refreshAuthenticationResponse();
            });
      }
    });
  }

  compareIds(o1: any, o2: any): boolean {
    return o1.id == o2.id;
  }

  compareParticipants(p1: Participant | undefined, p2: Participant | undefined): boolean {
    if(!p1 && !p2) {
      return true;
    }
    if(!p1 && p2) {
      return false;
    }
    if(p1 && !p2) {
      return false;
    }
    return p1!.id == p2!.id
        && p1!.code == p2!.code
        && p1!.forename == p2!.forename
        && p1!.surname == p2!.surname
        && p1!.dwz == p2!.dwz;
  }

}
