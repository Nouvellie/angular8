import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  _searchText:string;

  constructor(
    private _activateRoute:ActivatedRoute,
    private _heroesService:HeroesService,
  ) { }

  ngOnInit() {
    this._activateRoute.params.subscribe( params => {
      this._searchText = params.searchText;
      this.heroes = this._heroesService.getHeroeOnSearch(params['searchText']);
    });
  }

}
