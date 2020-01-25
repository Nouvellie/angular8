let longFunction = function(
                        x
                    ) {
    return x;
}

let shortFunction = x => x

console.log(longFunction("Roberto"));
console.log(shortFunction("Nouvellie"));

let longSumFunction = function(
                        x:number,
                        y:number
                    ) {
    return x + y;
}

let shortSumFunction = (x:number, y:number) => x + y;

console.log(longSumFunction(3, 3));
console.log(shortSumFunction(3, 3));