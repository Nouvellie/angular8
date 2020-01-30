import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Roberto';
  array = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  someNumber = 0.368;
  iso4217 = 1234.5;
  jsonTest = {
    name: "Anivia",
    role: "Mage",
    region: "Freljord",
    nick: "The Cryophoenix",
    abilities: {
      pasive: "Rebirth",
      q: "Flash Frost",
      w: "Crystallize",
      e: "Frostbite",
      r: "Glacial Storm",
    },
  };
  somePromise = new Promise((resolve, reject)=> {
    setTimeout(()=>resolve("Promise ready."), 3500);
  });
  someDate = new Date();
}
