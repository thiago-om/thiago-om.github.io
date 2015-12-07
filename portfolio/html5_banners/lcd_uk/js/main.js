// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
// var content;
var bgExit;

//Function to run with any animations starting on load, or bringing in images etc
init = function() {
  "use strict";

  //Assign All the elements to the element on the page
  container = document.getElementById("container_dc");
  // content = document.getElementById("content_dc");
  bgExit = document.getElementById("background_exit_dc");

  //Bring in listeners i.e. if a user clicks or rollsover
  addListeners();
  //Show Ad
  container.style.display = "block";
};


//Add Event Listeners
addListeners = function() {
  "use strict";
  bgExit.addEventListener("click", bgExitHandler, false);
};

bgExitHandler = function() {
  "use strict";
  //Call Exits
  //Enabler.exit("HTML5_Background_Clickthrough");

  //AdWords Click
  ExitApi.exit();
  console.log("Exit code Initialized");
};



var reveal = function(dots, counter) {
  "use strict";

  $(".textBox").addClass("hide");
  setTimeout(function() {
    $(".block").addClass("grow");
  }, 3500);
  setTimeout(function() {
    $(".textBox").removeClass("hide");
  }, 4500);
  setTimeout(function() {
    $(".block").addClass("hidden");
  }, 6500);
  setTimeout(function() {
    $(".circle").addClass("hide");
    $(".block").removeClass("grow");
    $(".block").removeClass("hidden");
    if (counter > 1) {
      for (var i = 0; i < 570; i++) {
        dots.push(i);
      }
      counter = counter - 1;
      reveal(dots, counter);
    }
  }, 9500);

};

// create a function to shuffle arrays for use later when
// showing all dots onscreen in random order
function shuffleArray(array) {
  "use strict";
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

$(document).ready(function() {
  "use strict";
  // declare all variables
  var dots = [];
  var x;
  var y;
  var i;
  var j;

  y = 19; // 19 rows down y-plane
  for (i = 0; i < y; i++) {
    x = 30; // 30 columns across x-plane
    for (j = 0; j < x; j++) {
      dots.push([j, i]); // in dots array, push j and i indexes into new arrays (fake multi-dimensional array)
      // 1. generate j amount of dots (x-plane) by creating rows of dots (y-plane) i times
      $("<span class='dot x_" + j + " y_" + i + "'></span>").appendTo(".dot-matrix");
    }
  }

  // get array of classes [x, y]
  var greatBritain = [
                      [13, 1], [14, 1], [15, 1],
                      [13, 2], [14, 2],
                      [12, 3], [13, 3], [14, 3],
             [11, 4], [12, 4], [13, 4], [14, 4],
             [11, 5], [12, 5], [13, 5], [14, 5], [15, 5],
                      [12, 6], [13, 6], [14, 6], [15, 6],
                               [13, 7], [14, 7], [15, 7],
                               [13, 8], [14, 8], [15, 8], [16, 8],
                      [11, 9], [12, 9], [14, 9], [15, 9], [16, 9], [17, 9],
                      [11, 10], [12, 10], [13, 10], [15, 10], [16, 10], [17, 10],
            [10, 11], [11, 11], [12, 11], [15, 11], [16, 11], [17, 11], [18, 11], [19, 11], [20, 11],
                                          [15, 12], [16, 12], [17, 12], [18, 12], [19, 12], [20, 12],
                                [14, 13], [15, 13], [16, 13], [17, 13], [18, 13], [19, 13],
                                [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14], [20, 14],
                      [13, 15], [14, 15], [15, 15], [16, 15], [17, 15], [18, 15], [19, 15],
            [12, 16], [13, 16], [14, 16]
             ];

  shuffleArray(greatBritain);

  var delay = 0;

  greatBritain.forEach(function(coordinate) { // Calling forEach so that the coordinate object state gets saved in function scope
      setTimeout(function(){
        $(".x_" + coordinate[0] + ".y_" + coordinate[1]).css("background-color", "#13b5ea");
      }, delay);
      // increment delay by 25ms
      delay += 5;

  });

  shuffleArray(dots);
  dots.forEach(function(coordinate) { // Calling forEach so that the coordinate object state gets saved in function scope
  // 3. pause at uk-island shape then keep adding dots to fill the screen
    setTimeout(function(){

      setTimeout(function(){
        $(".x_" + coordinate[0] + ".y_" + coordinate[1]).css("background-color", "#13b5ea");
      }, delay);
      // increment delay by 5ms
      delay += 1;

    }, 1000);

  });

  // 4. zoom into dots to fill screen with blue
setTimeout(function(){
  $(".dot-matrix").addClass("zoom");
  $(".dot").addClass("zoom");
}, 3000);
setTimeout(function(){
  $(".copy_uk-leading").addClass("frame01");
}, 4000);

// 5. reveal final copy
setTimeout(function(){
$(".xero-in-100").addClass("frame01");
  setTimeout(function(){
    $(".xero-in-100").css("left", -1);
    setInterval(function(){
      $(".xero-in-100").css("left", 0);
    }, 100)
  }, 700);
}, 6000);

});
