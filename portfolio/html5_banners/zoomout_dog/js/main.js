var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");

    addEventListeners();
}

function addEventListeners() {
    document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
    document.getElementById("user-action-button").addEventListener("click", userActionCounter);
}

function clickthrough() {
    EB.clickthrough();
    console.log('clickthrough');
}

function userActionCounter() {
    EB.userActionCounter("CustomInteraction");
    console.log('custom interaction');
}

window.addEventListener("load", initEB);

$(document).ready(function() {

  setTimeout(function(){
      $(".the_biggest").removeClass("hide");
  }, 400);

  setTimeout(function(){
      $(".dog_big").removeClass("frame01");
  }, 1200);    

  // setTimeout(function(){
  //     $(".dog_small").removeClass("hide");
  // }, 800);

  setTimeout(function(){
      $(".little-name").removeClass("hide");
  }, 2000);

  setTimeout(function(){
      $(".the_biggest").addClass("hide");
  }, 4250);

  setTimeout(function(){
      $(".little-name").addClass("hide");
  }, 4250);

  setTimeout(function(){
      $(".logo-circle").addClass("frame03");
  }, 4250);

  setTimeout(function(){
      $(".circle_cyan").addClass("frame03");
  }, 4500);

  setTimeout(function(){
      $(".circle_blue").addClass("frame03");
  }, 4750);

  setTimeout(function(){
      $(".logo").removeClass("hide");
  }, 5000);

  setTimeout(function(){
      $(".logo-circle").addClass("frame04");
  }, 6500);

  setTimeout(function(){
      $(".logo").addClass("frame06");
  }, 6500);

  setTimeout(function(){
      $(".largest-insurer").removeClass("hide");
  }, 7000);

  setTimeout(function(){
      $("#copy_logos_01").removeClass("hide");
  }, 8000 - 250);
  setTimeout(function(){
      $("#copy_logos_02").removeClass("hide");
  }, 8125 - 250);
  setTimeout(function(){
      $("#copy_logos_03").removeClass("hide");
  }, 8300 - 250);
  setTimeout(function(){
      $("#copy_logos_04").removeClass("hide");
  }, 8425 - 250);
  setTimeout(function(){
      $("#copy_logos_05").removeClass("hide");
  }, 8550 - 250);
  setTimeout(function(){
      $("#copy_logos_06").removeClass("hide");
  }, 8675 - 250);

  setTimeout(function(){
      $(".logos").addClass("hide");
  }, 11000);

  setTimeout(function(){
      $(".buttons").removeClass("hide");
  }, 11500);


});
