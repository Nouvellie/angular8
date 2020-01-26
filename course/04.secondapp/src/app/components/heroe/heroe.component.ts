import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:Heroe;
  imgHeroe:string;

  constructor( private _activateRoute:ActivatedRoute,
               private _heroesService:HeroesService
            ) {
    this._activateRoute.params.subscribe( params => {
      console.log(params.id);
      this.heroe = this._heroesService.getHeroe(params.id);
      console.log(this.heroe);
      if (this.heroe.publisher == 'DC') {
        this.imgHeroe = 'assets/img/dc-logo.jpg';
      }
      else {
        this.imgHeroe = 'assets/img/marvel-logo.png';
      }
    })
   }


}
