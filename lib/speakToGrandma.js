'use strict';

var speakToGrandma = function(say){
  var say_upcase = say.toUpperCase();
  if (say == say_upcase) {
    return "NO, NOT SINCE 1938!"
  } else {
    return "HUH?! SPEAK UP, SONNY!"
  }
};

// 'HUH?! SPEAK UP, SONNY!'.
// 'NO, NOT SINCE 1938!'.

// var str = "Hello World!";
// var res = str.toUpperCase();
