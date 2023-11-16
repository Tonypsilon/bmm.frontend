import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EditResultsDialogData} from "../shared/data/edit-results-dialog-data";
import {Result} from "../shared/data/result";

@Component({
  selector: 'bmm-edit-games-dialog',
  templateUrl: './edit-results-dialog.component.html',
  styleUrls: ['./edit-results-dialog.component.scss']
})
export class EditResultsDialogComponent {
  possibleResults: Result[] = [
    {
      label: '? : ?'
    },
    {
      label: '1 : 0',
      doubledHomePoints: 2,
      doubledAwayPoints: 0
    },
    {
      label: '0 : 1',
      doubledHomePoints: 0,
      doubledAwayPoints: 2
    },
    {
      label: '½ : ½',
      doubledHomePoints: 1,
      doubledAwayPoints: 1
    },
    {
      label: '+ : -',
      doubledHomePoints: 2,
      doubledAwayPoints: 0
    },
    {
      label: '- : +',
      doubledHomePoints: 0,
      doubledAwayPoints: 2
    },
    {
      label: '- : -',
      doubledHomePoints: 0,
      doubledAwayPoints: 0
    }
  ];

  constructor(public dialogRef: MatDialogRef<EditResultsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EditResultsDialogData) {
  }

  cancel() {
    this.dialogRef.close("cancel");
  }

  compareLabels(o1: any, o2: any): boolean {
    return o1.label == o2.label;
  }

}
