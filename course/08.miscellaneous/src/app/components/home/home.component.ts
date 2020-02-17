import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p>
        Component p.
    </p>
    <app-classes></app-classes>

    <p [appHighlighted]="'lightblue'">
        Hellow World!
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
