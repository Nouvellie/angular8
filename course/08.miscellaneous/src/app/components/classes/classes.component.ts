import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  template: `
    <div class="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div>
  `,
  styles: []
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
