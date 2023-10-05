import {Component, Input} from '@angular/core';
import {IdAndLabel} from "../shared/data/id-and-label";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../messages/message.service";
import {environment} from "../../environments/environment";
import {AuthenticationService} from "../shared/authentication.service";

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
              private authService: AuthenticationService) {
  }

  sendToClarification() {
    this.http.patch(this.apiUrl + '/matches/' + this.match!.id, {
      matchId: this.match!.id,
      state: 'IN_CLARIFICATION'
    }).subscribe(response => {
      this.messageService.success('Wettkampf befindet sich nun in Klärung.');
      this.authService.refreshAuthenticationResponse();
    });

  }

}
