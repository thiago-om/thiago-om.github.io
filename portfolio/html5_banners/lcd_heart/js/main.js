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
  var greatHeart = [
                [8, 2], [9, 2],  [10, 2],  [11, 2],  [12, 2],                                          [17, 2],  [18, 2],  [19, 2],  [20, 2], [21, 2],
        [7, 3], [8, 3], [9, 3],  [10, 3],  [11, 3],  [12, 3],  [13, 3],                      [16, 3],  [17, 3],  [18, 3],  [19, 3],  [20, 3], [21, 3],  [22, 3],
[6, 4], [7, 4], [8, 4], [9, 4],  [10, 4],  [11, 4],  [12, 4],  [13, 4],  [14, 4],  [15, 4],  [16, 4],  [17, 4],  [18, 4],  [19, 4],  [20, 4], [21 , 4], [22, 4], [23, 4],
[6, 5], [7, 5], [8, 5], [9, 5],  [10, 5],  [11, 5],  [12, 5],  [13, 5],  [14, 5],  [15, 5],  [16, 5],  [17, 5],  [18, 5],  [19, 5],  [20, 5], [21 , 5], [22, 5], [23, 5],
[6, 6], [7, 6], [8, 6], [9, 6],  [10, 6],  [11, 6],  [12, 6],  [13, 6],  [14, 6],  [15, 6],  [16, 6],  [17, 6],  [18, 6],  [19, 6],  [20, 6], [21 , 6], [22, 6], [23, 6],
[6, 7], [7, 7], [8, 7], [9, 7],  [10, 7],  [11, 7],  [12, 7],  [13, 7],  [14, 7],  [15, 7],  [16, 7],  [17, 7],  [18, 7],  [19, 7],  [20, 7], [21 , 7], [22, 7], [23, 7],
        [7, 8], [8, 8], [9, 8],  [10, 8],  [11, 8],  [12, 8],  [13, 8],  [14, 8],  [15, 8],  [16, 8],  [17, 8],  [18, 8],  [19, 8],  [20, 8], [21 , 8], [22, 8],
                [8, 9], [9, 9],  [10, 9],  [11, 9],  [12, 9],  [13, 9],  [14, 9],  [15, 9],  [16, 9],  [17, 9],  [18, 9],  [19, 9],  [20, 9], [21 , 9],
                        [9, 10], [10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10], [19, 10], [20, 10],
                                 [10, 11], [11, 11], [12, 11], [13, 11], [14, 11], [15, 11], [16, 11], [17, 11], [18, 11], [19, 11],
                                           [11, 12], [12, 12], [13, 12], [14, 12], [15, 12], [16, 12], [17, 12], [18, 12],
                                                     [12, 13], [13, 13], [14, 13], [15, 13], [16, 13], [17, 13],
                                                               [13, 14], [14, 14], [15, 14], [16, 14],
                                                                         [14, 15], [15, 15]

             ];

  shuffleArray(greatHeart);

  var delay = 0;

  greatHeart.forEach(function(coordinate) { // Calling forEach so that the coordinate object state gets saved in function scope
      setTimeout(function(){
        $(".x_" + coordinate[0] + ".y_" + (coordinate[1]+1)).css("background-color", "#13b5ea"); // HACK added one to y coordinate to move it down
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
}, 3750);

// 5. reveal final copy
setTimeout(function(){
$(".xero-in-100").addClass("frame01");
  setTimeout(function(){
    $(".xero-in-100").css("left", -1);
    setInterval(function(){
      $(".xero-in-100").css("left", 0);
    }, 100)
  }, 1200);
}, 6500);

});
