import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EditResultsDialogData} from "../shared/data/edit-results-dialog-data";

@Component({
  selector: 'bmm-edit-results-dialog',
  templateUrl: './edit-results-dialog.component.html',
  styleUrls: ['./edit-results-dialog.component.scss']
})
export class EditResultsDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditResultsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EditResultsDialogData) {
  }

  cancel() {
    this.dialogRef.close("cancel");
  }

}
