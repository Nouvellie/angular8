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
      'Authorization': 'Bearer BQAL7cI4tnMx_3dujiD6HZOzR4aR3NobmQOdmGO59aoKoavxWSN7hZvC-IbW-V6nUqI5PfDmbYCjwgxnFtY',
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: HEADERS })
      .subscribe((result) => {
        console.log(result);
      });
  }
}
