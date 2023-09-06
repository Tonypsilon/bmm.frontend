import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EditTeamsDialogData} from "../../shared/data/edit-teams-dialog-data";

@Component({
  selector: 'bmm-edit-teams-dialog',
  templateUrl: './edit-teams-dialog.component.html',
  styleUrls: ['./edit-teams-dialog.component.scss']
})
export class EditTeamsDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditTeamsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EditTeamsDialogData) {
  }

  cancel() {
    this.dialogRef.close("cancel");
  }

  protected readonly Array = Array;
}
