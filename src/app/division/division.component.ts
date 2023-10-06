import {Component, Input} from '@angular/core';
import {Division} from "../shared/data/division";

@Component({
  selector: 'bmm-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent {
  @Input() division?: Division;

}
