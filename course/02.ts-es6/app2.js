// Var:
var message = "Hellow";
if (true) {
    var message = "Good bye";
}
console.log(message); // This must show Good bye.
// Let:
let message2 = "Cars";
if (true) {
    let message2 = "Books";
}
console.log(message2); // This must show Cars.
// Const:
const OPTION = "All";
if (true) {
    const OPTION = "None";
    console.log(OPTION); // This must show None.
}
console.log(OPTION); // This must show All.
