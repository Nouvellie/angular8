import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  someError: boolean;
  someErrorText: any;

  constructor(
    private spotify:SpotifyService
  ) { 
    
    this.loading = true;
    this.someError = false;

    this.spotify.getNewReleases()
      .subscribe((data:any) => {
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      }, (error:any) => {
        console.log(error);
        this.someErrorText = error.error.error.message;
        this.loading = false;
        this.someError = true;
      });


    // this.spotify.getToken();
  

  }

  ngOnInit() {
  }

}
