function sendMission(xmen) {
    console.log("Sending: " + xmen.xmenName);
}
let gambit = {
    xmenName: "Gambit",
    xmenPower: "Skilled card-thrower."
};
sendMission(gambit);
let magneto = {
    xmenName: "Magneto",
    xmenPower: "Magnetism manipulation."
};
sendMission(magneto);

function checkXmen(xmen) {
    console.log("Status of " + xmen.xName + ": Healthy.");
}
let quicksilver = {
    xName: "Quicksilver",
    xPower: "Superhuman speed and reaction time."
};
checkXmen(quicksilver);