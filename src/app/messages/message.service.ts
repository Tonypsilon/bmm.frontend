import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _snackBar: MatSnackBar) { }

  success(message: string) {
    this._snackBar.open(message, "OK", {
      duration: 6000
    });
  }

  error(message: string) {
    this._snackBar.open(message, "OK");
  }

}
