import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bmm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isAuthenticated = false;
  public seasonNames: string[] = ["2021-22"];

  constructor() { }

  ngOnInit(): void {
  }

}
