"use strict";
console.log("Let's manipulate some arrays");
/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array

var numStrings = ['three','four','five','six','seven'];

// TO DO TOGETHER: Use the .push method to add the next String in the sequence.
// TO DO TOGETHER: Use the .unshift method to add 'two' before 'three'.
numStrings.push('eight');
numStrings.unshift('two');
// TO DO: Use the .push method to add 'nine' and 'ten'.
// TO DO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?
// Console log your results.
numStrings.push('nine', 'ten');
numStrings.unshift('zero', 'one');
console.log(numStrings);
/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */

var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// TO DO TOGETHER: Use the .pop method to remove the last cohort in the list.
// TO DO TOGETHER: Use the .shift method to remove the first cohort in the list.
// What do we get when we log the return of these methods?
activeCohorts.pop();
activeCohorts.shift();
console.log(activeCohorts);
// TO DO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
// left in the array. Log the updated array.
activeCohorts.pop();
activeCohorts.shift();
console.log(activeCohorts);
/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */

var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];

// TO DO TOGETHER: Find the first index of 'apples' in the array
// TO DO TOGETHER: Find the last index of 'apples' in the array
fruit.indexOf('apples');
fruit.lastIndexOf('apples');
console.log(fruit);
// TO DO: If the last element in the fruits array is 'grapes', remove it from the list.
// Console log your new array.
if(fruit[fruit.length-1] === 'grapes')
    fruit.pop();
console.log(fruit);
/* ***************************************************************
* 							SLICING
*************************************************************** */

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.
var ganymedeInstructors = instructors.slice(0, 3);
console.log(ganymedeInstructors);
// TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.
var fortunaInstructors = instructors.slice(3, instructors.length);
console.log(fortunaInstructors);
/* ***************************************************************
* 							REVERSING
*************************************************************** */

// TO DO TOGETHER: Take the instructors array and reverse it.
// What will the following console log display?
instructors.reverse();
console.log(instructors);

/* ***************************************************************
* 							SORTING
*************************************************************** */

// TO DO TOGETHER: Sort the instructors array.
// Take a look at the results of the console log.
instructors.sort();
console.log(instructors);

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */

var submarine = "We all live in a yellow submarine.";

// TO DO TOGETHER: Split this string up into an array of elements
// What will this console log display?

//for fun
function stringToArray(str, separator) {
    var subArray = []
    var lastSpace = 0;
    for (var i = 0; i <= str.length; i++) {
        if (str.substring(i, i + 1) === separator) {
            subArray.push(str.substring(lastSpace, i));
            lastSpace = i + 1;
        }
        if (i == str.length)
            subArray.push(str.substring(lastSpace, i));
    }
    return subArray;
}
//ok I'll use split
var splitSub = submarine.split(" ");

console.log(stringToArray(submarine, " "));
console.log(splitSub);
console.log(submarine);

// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
// Log your results.
var newSubmarine = splitSub.join('\n');
console.log(newSubmarine);