import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  newReleases: any[] = [];
  loading: boolean;

  constructor(
    private spotify:SpotifyService,
  ) {
  }
  search(textArtist:string) {
    this.loading = true;
    console.log("search comp");
    console.log(textArtist);
    this.spotify.getByArtist(textArtist)
      .subscribe((data:any) => {
        console.log("result api get");
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      });
  }
}
