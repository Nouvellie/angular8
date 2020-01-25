function console1(constructor:Function) {
    console.log(constructor);
}

@console1
class Some {
    constructor (public name:string) {

    }
}

// Remember not to use reserved names for the variables.