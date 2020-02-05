import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    
  }

  getNewReleases() {

    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQD97lzrsiezAJ7T4QfK1xFYVROFISp0Bn8BHDiJ5zY6ug_-T2uuuzOHYCF9hFTW1WmRs5nvT2aBpvFN0TM',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: HEADERS })
      .pipe( map(result => {
        return result['albums'].items;
      }));
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
  getByArtist(textArtist:string) {
    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQD97lzrsiezAJ7T4QfK1xFYVROFISp0Bn8BHDiJ5zY6ug_-T2uuuzOHYCF9hFTW1WmRs5nvT2aBpvFN0TM',
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${textArtist}&type=artist&limit=15`, { headers: HEADERS })
      .pipe(map(result => result['artists'].items ));
  }
}
