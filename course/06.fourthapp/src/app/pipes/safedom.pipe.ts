import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safedom'
})
export class SafedomPipe implements PipeTransform {

  constructor (private _domSanitizer:DomSanitizer) {

  }
  transform(value: string): SafeResourceUrl {
    
    const URL = 'https://open.spotify.com/embed/?uri=';
    return this._domSanitizer.bypassSecurityTrustResourceUrl(URL + value);
  }

}
