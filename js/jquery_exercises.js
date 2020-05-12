"use strict";

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
//
// var title = $('#title').html();
// alert(title);

// $('.codeup').css('border', '1px solid red');

$('li').css('font-size', '20px');

var title = $('#title').html();
var paragraph = $('#paragraph').html();
var list = $('li').html();

alert(title);

var everything = $('#title, #paragraph, li');

everything.css('background-color', 'yellow')