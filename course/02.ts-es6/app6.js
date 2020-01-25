let longFunction = function (x) {
    return x;
};
let shortFunction = x => x;
console.log(longFunction("Roberto"));
console.log(shortFunction("Nouvellie"));
let longSumFunction = function (x, y) {
    return x + y;
};
let shortSumFunction = (x, y) => x + y;
console.log(longSumFunction(3, 3));
console.log(shortSumFunction(3, 3));
