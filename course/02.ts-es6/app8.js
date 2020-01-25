let prom1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Finish");
        // Success.
        resolve();
        // Fail.
        // reject();
    }, 1500);
});
console.log("Step 1.");
prom1.then(function() {
    console.log("Run if all it's OK.");
}, function() {
    console.log("Run if something wrong.");
});
console.log("Step 2.");