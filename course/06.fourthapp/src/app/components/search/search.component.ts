import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  newReleases: any[] = [];

  constructor(
    private spotify:SpotifyService,
  ) {
    
  }
  search(textArtist:string) {
    console.log("search comp");
    console.log(textArtist);
    this.spotify.getByArtist(textArtist)
      .subscribe((data:any) => {
        console.log("result api get");
        console.log(data.artists.items);
        this.newReleases = data.artists.items;
      });
  }
}
