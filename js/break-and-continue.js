var numBetween = 0;
while(!(numBetween <= 50 && numBetween > 0)) {
    numBetween = prompt("enter a number between 1 and 50");
}
console.log("number to skip is: " + numBetween);

for(var i = 1; i < 50; i++) {
    if(i + 1 == numBetween) {
        console.log("Yikes! Skipping number: " + i);
        i++;
    }
    else
        console.log("Here's an odd number: " + i);
}
