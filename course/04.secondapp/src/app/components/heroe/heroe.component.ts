import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:Heroe;

  constructor( private _activateRoute:ActivatedRoute,
               private _heroesService:HeroesService
            ) {
    this._activateRoute.params.subscribe( params => {
      console.log(params.id);
      this.heroe = this._heroesService.getHeroe(params.id);
    })
   }


}
