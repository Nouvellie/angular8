let longFunction = function(
                        x
                    ) {
    return x;
}

let shortFunction = x => x

console.log(longFunction("Roberto"));
console.log(shortFunction("Nouvellie"));

let longSumFunction = function(
                        x:number,
                        y:number
                    ) {
    return x + y;
}

let shortSumFunction = (x:number, y:number) => x + y;

console.log(longSumFunction(3, 3));
console.log(shortSumFunction(3, 3));

let longUpperFunction = function(
                            firstName:string
                        ) {
    firstName = firstName.toUpperCase();
    return firstName;
}

let shortUpperFunction = (firstName:string) => {firstName = firstName.toUpperCase(); return firstName;}

console.log(longUpperFunction("Roberto"));
console.log(shortUpperFunction("Nouvellie"));

let nick1 = "Anivia";
let champ = {
    nick1: "Ahri",
    charm() {
        setTimeout( function() {
            console.log(this.nick1 + " use charm!!");
        }, 2000)
        
    }
}
champ.charm();

let champ2 = {
    nick2: "Ahri",
    charm() {
        setTimeout( () => console.log(this.nick2 + " use charm!!"), 2000);
    }
}
champ2.charm();