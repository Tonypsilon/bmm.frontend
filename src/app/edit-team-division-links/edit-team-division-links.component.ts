import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Division} from "../shared/data/division";
import {TeamDivisionLink} from "../shared/data/team-division-link";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../messages/message.service";
import {TeamDivisionLinkService} from "../shared/team-division-link.service";
import {map, switchMap} from "rxjs";
import {EnhancedTeamDivisionLink} from "../shared/data/enhanced-team-division-link";
import {DivisionSetupFoundation} from "../shared/data/division-setup-foundation";

@Component({
  selector: 'bmm-edit-team-division-links',
  templateUrl: './edit-team-division-links.component.html',
  styleUrls: ['./edit-team-division-links.component.scss']
})
export class EditTeamDivisionLinksComponent implements OnChanges {
  divisions: Division[] = [];
  enhancedTeamDivisionLinks: EnhancedTeamDivisionLink[] = [];
  seasonId: number = 0;

  constructor(private teamDivisionLinkService: TeamDivisionLinkService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {
    this.setupData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setupData();
  }

  private setupData() {
    this.route.paramMap.pipe(
        map(params => params.get('seasonId')!),
        switchMap(seasonId =>
            this.teamDivisionLinkService.getDivisionSetupFoundation(parseInt(seasonId)))
    ).subscribe(divisionSetupFoundationResponse => {
      this.divisions = divisionSetupFoundationResponse.availableDivisions;
      this.setLinks(divisionSetupFoundationResponse)
    });
    this.route.paramMap.pipe(
        map(params => params.get('seasonId')!)
    ).subscribe(value => this.seasonId = parseInt(value));
  }

  private setLinks(divisionSetupFoundation: DivisionSetupFoundation) {
    for (let t of divisionSetupFoundation.availableTeams) {
      if(divisionSetupFoundation.currentLinks) {
        let currentLink: TeamDivisionLink | undefined = divisionSetupFoundation.currentLinks!
            .filter(tdl => tdl.teamId == t.id).pop();
        if(currentLink) {
          this.enhancedTeamDivisionLinks.push({
            team: t,
            division: divisionSetupFoundation.availableDivisions.filter(d => d.id == currentLink!.divisionId).pop(),
            number: currentLink.number
          });
        } else {
          this.enhancedTeamDivisionLinks.push({
            team: t
          });
        }
      } else {
        this.enhancedTeamDivisionLinks.push({
          team: t
        });
      }
    }
  }

  submit() {
    if(this.enhancedTeamDivisionLinks
        .filter(etdl => !etdl.division || !etdl.number)
        .length > 0) {
      this.messageService.error("Jede Mannschaft muss einer Staffel zugewiesen werden!");
      return;
    }
    this.teamDivisionLinkService.putDivisionSetup(this.seasonId,
        this.enhancedTeamDivisionLinks.map(etdl =>  {
          return {
            teamId: etdl.team.id,
            division: etdl.division?.id,
            number: etdl.number
          };
        })
    ).subscribe(tdls => {
      this.messageService.success('Insgesamt ' + tdls.length
          + ' Mannschaften wurden Staffeln zugewiesen.');
      this.router.navigate(['/admin/home']);
    });
  }
}
