
// All the variables will be  Let or Const.
/*
[I] As explicit as possible.
var someName = "Richard Tapia";
var someAge = 23;

var CHARACTER = {
  someName: someName,
  someAge: someAge
}; 
*/

// [I] Result:

let someName:string = "Richard Tapia";
let someAge:number = 23;
const CHARACTER:{someName:string, someAge:number} = {
    someName: someName,
    someAge: someAge
}

console.log(CHARACTER);

// [II] Create an interface that serves to validate the following object.
/*
let batman = {
  jLName: "Bruce Wayne",
  jLMartialArts: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
*/

// [II] Result:

interface justiceLeague {
    jLName:string;
    jLMartialArts:string[];
}

let batman:justiceLeague = {
    jLName: "Bruce Wayne",
    jLMartialArts: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(batman);


// [III] Convert this function to an arrow function.
/*
function doubleResult(a, b) {
  return (a + b) * 2
}
*/

// [III] Result:

let doubleResult = (a:number, b:number) => (a + b) * 2;

console.log(doubleResult(18, 16));

// [IV] Functions. (required, default, optional) --> fName: required, fPower: optional, fWeapon: default "Bow".
/*
function getInfo( fName, fPower, fWeapon ){
  let message;
  if( fPower ){
     message = fName + " has the power to: " + fPower + " and a weapon: " + fWeapon;
  }else{
     message = fName + " has a " + fPower;
  }
};
*/

// [IV] Result: 

function getInfo(
            fName:string,
            fWeapon:string = "Sword",
            fPower?:string
) {
    let message:string;
    let message2:string;

    if (fPower) {
        message = fName + " use " + fPower + " with a " + fWeapon + ".";
        console.log(message);
        message2 = `${fName} use ${fPower} with a ${fWeapon}.`
        console.log(message2);
    }
    else {
        message = fName + " have a " + fWeapon + "."
        console.log(message);
        message2 = `${fName} have a ${fWeapon}.`
        console.log(message2);
    }
}

getInfo("Nouvellie", "Knife", "Slash");
getInfo("Roberto", "Spear");

// [V] Create a class that can handle the following structure.
/*
The class must be called a rectangle and must have two properties: (base and height)
Also a method that calculates the area. (base * height)
And then return a number.
*/

// [V] Result:

class Rectangle {
    base:number;
    height:number;
    area:number;

    constructor(base:number, height:number) {
        this.base = base;
        this.height = height;
    }
    calculateArea():number {
        this.area = this.base * this.height
        return this.area
    }
}

let rectangle = new Rectangle(3, 5)

console.log(rectangle);
console.log(rectangle.calculateArea())
console.log(rectangle.area);