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
      'Authorization': 'Bearer BQDNEfzMXZbKD-9XlhwjqPeIeFjUyV2qEC5Jr0KdWEISYEr79tY6QvJ-TT9WwcaGv5Sa2nb1tvDoYO4je5Q',
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
  getByArtists(textArtist:string) {

    return this.getQuery(`search?q=${textArtist}&type=artist&limit=15`)
      .pipe(map(result => result['artists'].items ));
  }

  getByArtist(id:string) {

    return this.getQuery(`artists/${id}`);
      // .pipe(map(result => result['artists'].items ));
  }
  getArtistTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=CL`)
      .pipe(map(result => result['tracks']));
  }
}
