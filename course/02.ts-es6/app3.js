let name1;
name1 = "Roberto";
let countMinutes;
countMinutes = 123;
let confirmation;
confirmation = true;
let today;
today = new Date('2020-06-04');
// Any always its implicit.
let some;
some = name;
some = countMinutes;
some = confirmation;
some = today;
let profile = {
    name2: "Roberto",
    age: 29
};
console.log(profile);
profile = {
    name2: "Rocuant",
    age: 33,
};
// This changes the value of the keys, but you cannot add or remove one. (as Let)
console.log(profile);
