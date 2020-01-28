import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    _heroe:Heroe;
    
    private heroes:Heroe[] = [
        {
            name: "Aquaman",
            abi: "Aquatic physiology, superhuman strength, speed, endurance, agility, durability, reflexes, and senses. Telepathic control of all aquatic life. Able to speak and understand any language on earth. Utilizes the Trident of Poseidon, Underwater adaption, super-fast swimming, magical potential, life force access, accelerated healing, hydrokinesis, ocean embodiment and attuned to the clear.",
            img: "assets/img/aquaman.png",
            appear: "1941-11-01",
            publisher:"DC"
          },
          {
            name: "Batman",
            abi: "Peak human condition, genius-level intellect, expert detective, master martial artist and hand-to-hand combatant, utilizes high-tech equipment and has yellow lantern ring.",
            img: "assets/img/batman.png",
            appear: "1939-05-01",
            publisher: "DC"
          },
          {
            name: "Daredevil",
            abi: "Superhuman senses, echolocative radar sense, skilled acrobat, martial artist, and stick fighter. Utilization of specially-designed billy club.",
            img: "assets/img/daredevil.png",
            appear: "1964-04-01",
            publisher: "Marvel"
          },
          {
            name: "Hulk",
            abi: "Invulnerability, superhuman strength, stamina and durability, anger empowerment and regenerative healing factor.",
            img: "assets/img/hulk.png",
            appear: "1962-05-01",
            publisher:"Marvel"
          },
          {
            name: "Green Lantern",
            abi: "Fight evil with the aid of rings that grant them a variety of extraordinary powers, all of which come from imagination and/or emotions.",
            img: "assets/img/linterna-verde.png",
            appear: "1940-07-01",
            publisher: "DC"
          },
          {
            name: "Spider-Man",
            abi: "Genius-level intellect, proficient scientist and inventor, superhuman strength, speed, durability, agility, stamina, reflexes/reactions, coordination, balance and endurance. Precognitive spider-sense ability, cling to most solid surfaces and webbing ability. Utilizes wrist web-shooters to shoot spiderweb material.",
            img: "assets/img/spiderman.png",
            appear: "1962-08-01",
            publisher: "Marvel"
          },
          {
            name: "Wolverine",
            abi: "Enhanced strength, speed, stamina, durability, endurance, agility, reflexes, dexterity, resilience, flexibility, coordination, balance, and reaction time. Superhuman senses, and animal-like attributes. Extended longevity via regenerative healing factor. Nigh-invulnerability. Slowed aging, indestructible bones. Adamantium-infused skeleton, retractable adamantium claws. Retractable bone claws. Master martial artist and hand-to-hand combatant.",
            img: "assets/img/wolverine.png",
            appear: "1974-10-01",
            publisher: "Marvel"
          }
    ];
    constructor() {        
    }

    getHeroes():Heroe[] {
        return this.heroes;
    }

    getHeroe(idx:string) {
      if (isNaN(Number(idx))) {
        // this.heroes.forEach((heroe) => {
        //   if(heroe['name']==idx) {
        //     this._heroe = heroe;
        //   }
        // }
        // );
        for (let heroe of this.heroes) {
          if(heroe['name']==idx) {
            this._heroe = heroe;
          }
        }
        return this._heroe;  
      }
      else {
        return this.heroes[idx];
      }
    }
    getHeroeOnSearch( searchText:string ) {
      let _heroesTemp:Heroe[] = [];
      searchText = searchText.toLowerCase();
      for (let heroe of this.heroes) {
        let name = heroe.name.toLowerCase();
        if (name.indexOf(searchText) >= 0) {
          _heroesTemp.push(heroe);
        }
      }
      return _heroesTemp;
    }
}

export interface Heroe {
    name:string;
    abi:string;
    img:string;
    appear:string;
    publisher:string;
};