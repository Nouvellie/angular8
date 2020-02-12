import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="textSize">
      Hellow World. This is a label.
    </p>
    
    <button class="btn btn-primary" (click)="textSize = textSize + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-danger" (click)="textSize = textSize - 5">
    <i class="fa fa-minus"></i>
    </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  textSize:number = 30;

  constructor() { }

  ngOnInit() {
  }

}
