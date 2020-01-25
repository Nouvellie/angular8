let firstName:string = "Roberto"
let lastName:string = "Rocuant"
let age:number = 29;

let all1 = "Hellow, " + firstName + " " + lastName + " (" + age + ")";

let all2 = `Hellow, ${ firstName } ${ lastName } (${ age })`;

let all3 = `Hellow,
${ firstName } ${ lastName }
(${ age })`;

function getName() {
    return "Roberto Rocuant";
}

let all4:string = ` ${ getName() } `;
console.log(all1);
console.log(all2);
console.log(all3);
console.log(all4);