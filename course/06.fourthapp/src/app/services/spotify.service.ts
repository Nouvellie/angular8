import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    
  }

  getQuery(query:string) {

    const HEADER = new HttpHeaders({
      'Authorization': 'Bearer BQAYZH92p1tNK-Yj5QDwBT__dAJGh9U22Rurtqf6Q3vic44t19ZMVuNJJNCGdlXKVDJfyffyi2nWswcn55w',
    });
    
    const URL = `https://api.spotify.com/v1/${query}`;

    return this.http.get(URL, {headers: HEADER});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
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

    return this.getQuery(`search?q=${textArtist}&type=artist&limit=15`)
      .pipe(map(result => result['artists'].items ));
  }
}
