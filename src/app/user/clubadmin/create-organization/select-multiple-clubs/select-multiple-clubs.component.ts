import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SelectMultipleClubsData} from "../select-multiple-clubs-data";

@Component({
  selector: 'bmm-select-multiple-clubs',
  templateUrl: './select-multiple-clubs.component.html',
  styleUrls: ['./select-multiple-clubs.component.scss']
})
export class SelectMultipleClubsComponent {

  constructor(public dialogRef: MatDialogRef<SelectMultipleClubsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: SelectMultipleClubsData) {
  }

  cancel() {
    this.dialogRef.close();
  }


}
