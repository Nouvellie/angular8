import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  template: `
    <!-- <div [ngClass]="'alert-info'" class="alert" role="alert"> -->
    <div [ngClass]="alert" class="alert" role="alert">
      A simple success alert—check it out!
    </div>
    <button class="btn btn-info" type="button" (click)="alert = 'alert-info'">Info</button>&nbsp;
    <button class="btn btn-success" type="button" (click)="alert = 'alert-success'">Success</button>

    <br> <br>
    
    <h3 [ngClass]="{'text-danger': properties.danger, 'text-info': !properties.danger }">
      Hellow World!
    </h3>

    <button [ngClass]="{'btn-danger': properties.danger, 'btn-info': !properties.danger }" (click)="properties.danger = !properties.danger" class="btn" type="button" name="button">
      Danger - Info
    </button>
  `,
  styles: []
})
export class ClassesComponent implements OnInit {

  alert:string = "alert-danger"

  properties:Object = {
    danger: false,
  }
  
  constructor() { }

  ngOnInit() {
  }

}
