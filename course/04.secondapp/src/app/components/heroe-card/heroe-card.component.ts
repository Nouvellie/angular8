import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: []
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;
  @Output() selectedIndex:EventEmitter<number>;
  
  constructor(
     private _router:Router,
  ) {
    this.selectedIndex = new EventEmitter();
   }

  ngOnInit() {
  }

  seeHeroe() {
    // this._router.navigate(['/heroe', this.index]);
    this.selectedIndex.emit(this.index);
  }

}
