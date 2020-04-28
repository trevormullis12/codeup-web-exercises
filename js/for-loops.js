"use strict";

function showMultiplicationTable(v) {
    var m;
    for(var i = 1; i <= 10; i++) {
        m = v * i;
        console.log(v + " x " + i + " = " + m);
    }
}

showMultiplicationTable(7);

for (var i = 1; i < 10; i++) {
    var r = parseInt((Math.random() * 180) + 20);
    if(r % 2 === 0)
        console.log(r + " is even");
    else
        console.log(r + " is odd");
}

for (var i = 1; i < 10; i++) {
    var str = "";
    for (var n = 1; n <= i; n++) {
        str += i;
    }
    console.log(str);
}

for(var i = 20; i >= 1; i--)
    console.log(i * 5);

