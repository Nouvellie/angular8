let name1:string;
name1 = "Roberto";

let countMinutes:number;
countMinutes = 123;

let confirmation:boolean;
confirmation = true;

let today:Date;
today = new Date('2020-06-04');

// Any always its implicit.
let some:any;
some = name;
some = countMinutes;
some = confirmation;
some = today;

let profile = {
    name2: "Roberto",
    age: 29
}

console.log(profile);

profile = {
    name2: "Rocuant",
    age: 33,
}

// This changes the value of the keys, but you cannot add or remove one. (as Let)
console.log(profile);