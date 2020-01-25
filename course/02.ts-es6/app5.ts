function activate(who:string, something:string = "Roberto") {
    let message:string;
    message = `Nickname: ${who}, by ${something}`;
    console.log(message);
}

activate("Nouvellie");