function sendMission(xmen:any) {
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
}

sendMission(magneto);

// Using interfaces.

interface Xmen {
    xName:string,
    xPower:string
}

function checkXmen(xmen:Xmen) {
    console.log("Status of " + xmen.xName + ": Healthy.");
}

let quicksilver:Xmen = {
    xName: "Quicksilver",
    xPower: "Superhuman speed and reaction time."
}

checkXmen(quicksilver);