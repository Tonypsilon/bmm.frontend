import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

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
    const backendUrl = 'http://localhost:8080'; // Change this to your backend URL
    const apiUrl = `${backendUrl}/currentseason`;
    this.http.get(apiUrl).subscribe((data:any)=> {
      void this._router.navigate([`seasons/${data.name}`]);
    });
  }

}
