let longFunction = function (x) {
    return x;
};
let shortFunction = x => x;
console.log(longFunction("Roberto"));
console.log(shortFunction("Nouvellie"));
let longSumFunction = function (x, y) {
    return x + y;
};
let shortSumFunction = (x, y) => x + y;
console.log(longSumFunction(3, 3));
console.log(shortSumFunction(3, 3));
let longUpperFunction = function (firstName) {
    firstName = firstName.toUpperCase();
    return firstName;
};
let shortUpperFunction = (firstName) => { firstName = firstName.toUpperCase(); return firstName; };
console.log(longUpperFunction("Roberto"));
console.log(shortUpperFunction("Nouvellie"));
let nick = "Anivia";
let champ = {
    nick: "Ahri",
    charm() {
        setTimeout(function () {
            console.log(this.nick + " use charm!!");
        }, 2000);
    }
};
champ.charm();
let champ2 = {
    nick: "Ahri",
    charm() {
        setTimeout(() => console.log(this.nick + " use charm!!"), 2000);
    }
};
champ2.charm();
