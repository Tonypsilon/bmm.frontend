import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../shared/data/id-and-label";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../messages/message.service";
import {environment} from "../../environments/environment";
import {AuthenticationService} from "../shared/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'bmm-result-management',
  templateUrl: './result-management.component.html',
  styleUrls: ['./result-management.component.scss']
})
export class ResultManagementComponent {
  @Input() matches: IdAndLabel[] = [];
  match?: IdAndLabel;

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private authService: AuthenticationService,
              public dialog: MatDialog) {
  }

  sendToClarification() {
    let dialogRef;
    dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Soll der Wettkampf wirklich in Klärung gegeben werden?",
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != "cancel") {
        this.http.patch(this.apiUrl + '/matches/' + this.match!.id, {
          matchId: this.match!.id,
          state: 'IN_CLARIFICATION'
        }).subscribe(response => {
          this.messageService.success('Wettkampf befindet sich nun in Klärung.');
          this.match = undefined;
          this.authService.refreshAuthenticationResponse();
        });
      }
    });
  }

}
