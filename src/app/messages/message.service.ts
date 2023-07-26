import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SuccessMessageComponent} from "./success-message/success-message.component";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _snackBar: MatSnackBar) { }

  success(message: string) {
    /*this._snackBar.openFromComponent(SuccessMessageComponent, {
      duration: 60000,
      data: message
    });*/
    this._snackBar.open('✅ ' + message, "🆗", {
      duration: 6000
    });
  }

  error(message: string) {
    this._snackBar.open('❌ ' + message, "🆗");
  }

}
