class Avengers {
    name:string;
    team:string;
    realName:string;
    canFight:boolean = false;
    points:number = 0;

    constructor(name:string, team:string, realName:string) {
        this.name = name;
        this.team = team;
        this.realName = realName;
    }
}

let antman:Avengers = new Avengers("Antman", "Captain America", "Scott Lang");

console.log(antman);