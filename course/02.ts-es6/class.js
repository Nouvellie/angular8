class Avengers {
    constructor(name, team, realName) {
        this.canFight = false;
        this.points = 0;
        this.name = name;
        this.team = team;
        this.realName = realName;
        // Here canFight and points are default values.
    }
}
let antman = new Avengers("Antman", "Captain America", "Scott Lang");
console.log(antman);
