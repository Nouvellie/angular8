import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    console.log("Service ready.");
  }

  getNewReleases() {

    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQDJReAFB8jZnO0JsFEHg4E3G2uJUEwLcCpT6DAVL8MacV78FoWAl0iVOTVDQUw1OhBeaGQS4hSupEyW4JU',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: HEADERS });
  }
  // getToken() {
  //   let data = {
  //     'grant_type': 'client_credentials',
  //     'client_id': 'ba4ea5c9213849f281d88cbd0ee94f70',
  //     'client_secret': '7682853452d34b0a9754df3ba21182ae',
  //   }
  //   this.http.post('https://accounts.spotify.com/api/token', {data})
  //     .subscribe((result) => {
  //       console.log(result);
  //     });
  // }
}
