function activate(
            who:string, 
            something:string = "Roberto",
            optional?:string
        ) {
    let message:string;
    if (optional) {
        message = `Nickname: ${who}, by ${something}, as ${optional}.`;
    }
    else {
        message = `Nickname: ${who}, by ${something}.`;
    }
    console.log(message);
}

activate("Nouvellie");
activate("Nouvellie", "Rocuant");
activate("Nouvellie", "Rocuant", "Tito")