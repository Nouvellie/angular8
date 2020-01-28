import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: []
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  constructor(
     private _router:Router,
  ) { }

  ngOnInit() {
  }

  seeHeroe(idx:number) {
    this._router.navigate(['/heroe', this.index]);
  }

}
