let avenger2 = {
    nick2: "Steve",
    keyNick2: "Captain America",
    specialPower2: "Shield"
}
let nick2 = avenger2.nick2;
let keyNick2 = avenger2.keyNick2;
let specialPower2 = avenger2.specialPower2;

console.log(nick2, keyNick2, specialPower2);

let avenger3 = {
    nick3: "Steve",
    keyNick3: "Captain America",
    specialPower3: "Shield"
}

let {nick3, keyNick3, specialPower3} = avenger3;

console.log(nick3, keyNick3, specialPower3);

let avenger4:string[] = ['Scarlet-Witch', 'Ironman', 'Spiderman'];

let [red, black, blue] = avenger4;

console.log(red, black, blue);

let [ , , third] = avenger4;

console.log(third);