// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var bgExit;

//Function to run with any animations starting on load, or bringing in images etc
init = function() {

  //Assign All the elements to the element on the page
  container = document.getElementById('container_dc');
  content = document.getElementById('content_dc');
  bgExit = document.getElementById('background_exit_dc');

  //Bring in listeners i.e. if a user clicks or rollsover
  addListeners();
  //Show Ad
  container.style.display = "block";
}


//Add Event Listeners
addListeners = function() {
  bgExit.addEventListener('click', bgExitHandler, false);
}

bgExitHandler = function(e) {
  //Call Exits
  Enabler.exit('HTML5_Background_Clickthrough');

  //AdWords Click
  ExitApi.exit();
  console.log('Exit code Initialized');
}


var reveal = function(dots, counter) {

  // frame01
  // 1s in mouse pointer comes up and clicks ok
  setTimeout(function() {
    $.each([$(".pointer"), $(".middle")], function() {
      $(this).addClass('frame01');
    })
  }, 500);
  // frame02
  // .middle & .ok disappear to reveal 'Click' and cards (.left and .right) flip, fall and rotate
  setTimeout(function() {
    $.each([
      $(".pointer"),
      $(".middle")
    ], function() {
      $(this).removeClass('frame01').addClass('frame02');
    })
  }, 2250);
  // frame03
  // reconcicled tick appears
  setTimeout(function() {
    $.each([
      $(".pointer"),
      $(".middle"),
      $(".left"),
      $(".right")
    ], function() {
      $(this).removeClass('frame02').addClass('frame03');
    })
  }, 2200);

  // frame04-05
  // tick box drops
  setTimeout(function() {
    $(".reconciled-box").addClass('frame04');
  }, 3500);

 // tick text appears
  setTimeout(function() {
    $.each([
      $(".reconciled-box"),
      $(".tick_word")
    ], function() {
      $(this).addClass('frame05');
    })
  }, 5500);

  // frame06
  // xero in text appears with dark blue bg

  setTimeout(function() {
    $.each([
      $(".tick_word"),
      $(".easy_accounting")
    ], function() {
      $(this).addClass('frame06');
    })
  }, 6500);
};

$(document).ready(function() {
  reveal(3);
});
