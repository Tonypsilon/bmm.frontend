import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'bmm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    private readonly http: HttpClient,
    private readonly _router: Router
  ) {
  }
  ngOnInit(): void {
    const apiUrl = `${environment.apiUrl}/currentseason`;
    this.http.get(apiUrl).subscribe((data:any)=> {
      void this._router.navigate([`seasons/${data.name}`]);
    });

  }

}
