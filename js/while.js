var i = 2;
while(i < 65537) {
    console.log(i);
    i *= 2;
}

var allCones = parseInt(Math.random() * 50 + 50);

console.log("Cones to be sold: " + allCones)

do {
    var conesSold = parseInt(Math.random() * 5 + 1);
    if(conesSold <= allCones){
        console.log(conesSold + " cones sold...");
        allCones -= conesSold;
    }
    else
        console.log("Cannot sell you " + conesSold + " cones I only have " + allCones);
} while(allCones > 1)
console.log("All cones sold!");