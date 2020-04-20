"use strict";
// console.log("Hello from external Javascript");
//
// //exercise two
// alert("Welcome to my website!");
// var color = prompt("What is you favorite color?");
// alert("Great, " + color + " is my favorite color too!");

//exercise three
var movie1 = prompt("How many days are you renting \"The Little Mermaid\"?");
var movie2 = prompt("How many days are you renting \"Brother Bear\"?");
var movie3 = prompt("How many days are you renting \"Hercules\"?");
var total = (movie1 + movie2 + movie3) / 3;
total = total.toFixed(2);

alert("your total price is $" + total);

var google = prompt("How many hours have you worked for Google?");
var amazon = prompt("How many hours have you worked for Amazon?");
var facebook = prompt("How many hours have you worked for Facebook?");
var pay = (google * 400) + (amazon * 380) + (facebook * 350);

alert("your total pay is $" + pay);

var full = confirm("Is the class full?");
var conflict = confirm("Does it conflict with your schedule?");

if(full || conflict)
    alert ("You can't take this class.");
else
    alert("You may take this class.");

var amount = parseInt(prompt("How many items do you have?"));
var expired = confirm("Is the deal expired?");
var premium = confirm("Are you a premium member?");

if((amount <= 2) || premium && !expired)
    alert ("You get the discount!");
else
    alert("You pay full price.");