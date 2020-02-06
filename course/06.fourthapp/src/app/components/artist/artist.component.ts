import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;
  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService,
  ) { 

    this.loading = true;
    
    this.router.params.subscribe( params => {
      console.log(params);
      
      this.getArtist(params['id']);
    });
  }

  getArtist(id:string) {
    this.spotify.getByArtist(id)
      .subscribe( (result) => {
        console.log(result);
        this.artist = result;
        this.loading = false;
      })
  }


}
