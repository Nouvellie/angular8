function activate(who, something = "Roberto", optional) {
    let message;
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
activate("Nouvellie", "Rocuant", "Tito");
