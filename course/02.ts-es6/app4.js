let firstName = "Roberto";
let lastName = "Rocuant";
let age = 29;
let all1 = "Hellow, " + firstName + " " + lastName + " (" + age + ")";
let all2 = `Hellow, ${firstName} ${lastName} (${age})`;
let all3 = `Hellow,
${firstName} ${lastName}
(${age})`;
function getName() {
    return "Roberto Rocuant";
}
let all4 = ` ${getName()} `;
console.log(all1);
console.log(all2);
console.log(all3);
console.log(all4);
