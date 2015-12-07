// NOTE: not currently implemented but could be a way for injecting js files dependent on HTML structure used
// check if element exists and return a boolean value
// http://stackoverflow.com/a/5629730

function animation() {
  var isIE = false;

  function checkIE() {

    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) isIE = true;
    var trident = ua.indexOf('Trident/');
    if (trident > 0) isIE = true;
    var edge = ua.indexOf('Edge/');
    if (edge > 0) isIE = true;

    //console.log("is IE? = "+ isIE);
    if (isIE) {
      // alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
      $("#background").addClass("bgInitIE");
      //Backround zoom IE
      setTimeout(function() {
        $("#background").addClass("bgZoomedIE");
      }, 1250);
    } else
      $("#background").addClass("bgInitOthersBrowser");
    return false;
  };

  checkIE();

  var loops = 0;
  (function animation() {
    if (loops == 1) {

      var bg = $("#background").clone().removeClass();
      $("#background").remove();
      $("#banner").prepend(bg);
      if (isIE) {
        $("#background").addClass("bgInitIE");
        //Backround zoom IE
        setTimeout(function() {
          $("#background").removeClass("bgInitIE").addClass("bgZoomedIE");
        }, 1250);
      } else {
        $("#background").addClass("bgInitOthersBrowser");
      }

      $("#box_top").removeClass("expand_top").addClass("flipInX_top");
      $("#box_bottom").removeClass("expand_bottom").addClass("flipInX_bottom");


      $("#logo").removeClass("logoZoomOut").addClass("logoZoomIn");
      $("#logo_end").removeClass("showUP").removeClass("logoZoomIn").addClass("hideUP");
      $("#website_field").removeClass("showUP").addClass("hideUP");
      // $("#website_field_selector").removeClass("showUP").removeClass("selector_moveDOWN").addClass("hideUP");

      var copy_introducing_clone = $("#copy_introducing").clone().removeClass();
      $("#copy_introducing").remove();
      $("#copies").prepend(copy_introducing_clone);
      $("#copy_introducing").addClass("slideInOut_introducing");

      var copy_postcode_clone = $("#copy_postcode").clone().removeClass();
      $("#copy_postcode").remove();
      $("#copies").prepend(copy_postcode_clone);
      $("#copy_postcode").addClass("slideInOut_postcode");

      var copy_protect_home_clone = $("#copy_protect_home").clone().removeClass();
      $("#copy_protect_home").remove();
      $("#copies").prepend(copy_protect_home_clone);
      $("#copy_protect_home").addClass("slideInOut_protect");

      var copy_better_protection_clone = $("#copy_better_protection").clone().removeClass();
      $("#copy_better_protection").remove();
      $("#copies").append(copy_better_protection_clone);
      $("#copy_better_protection").addClass("slideIn_protection");

      var copy_better_understanding_clone = $("#copy_better_understanding").clone().removeClass();
      $("#copy_better_understanding").remove();
      $("#copies").append(copy_better_understanding_clone);
      $("#copy_better_understanding").addClass("slideIn_understanding");
      var baseline_nrma_clone = $("#baseline_nrma").clone().removeClass();
      $("#baseline_nrma").remove();
      $("#copies").prepend(baseline_nrma_clone);
      $("#baseline_nrma").addClass("hideUP");

      var baseline_de_better_clone = $("#baseline_de_better").clone().removeClass();
      $("#baseline_de_better").remove();
      $("#copies").prepend(baseline_de_better_clone);
      $("#baseline_de_better").addClass("hideUP");


      $("#clickthrough-button").removeClass("showUP").removeClass("fadeIN").addClass("hideUP");
    }

    if (loops == 0 || loops == 1) {
      //Website screens
      setTimeout(function() {
        $("#website_field").removeClass("hideUP").addClass("showUP");
      }, 4500);
      setTimeout(function() {
        $("#website_field_selector").removeClass("hideUP").addClass("showUP").addClass("selector_moveUP");
      }, 6200);
      setTimeout(function() {
        $("#website_field_selector").removeClass("selector_moveUP").addClass("selector_moveDOWN");
      }, 7000);
      setTimeout(function() {
        $("#website_field_selector").removeClass("showUP").removeClass("selector_moveDOWN").addClass("hideUP");
        $("#website_homepage").removeClass("hideUP").addClass("showUP").addClass("scrollIn");
      }, 8200);

      //Collapse BOX
      setTimeout(function() {
        $("#website_field").removeClass("showUP").addClass("hideUP");
        $("#website_homepage").removeClass("showUP").removeClass("scrollIn").addClass("hideUP");
        $("#background").addClass("unFocus");
        $("#box_top").removeClass("flipInX_top").addClass("collapse_top");
        $("#box_bottom").removeClass("flipInX_bottom").addClass("collapse_bottom");
      }, 11000);

      //Logo
      setTimeout(function() {
        $("#logo").removeClass("logoZoomIn").addClass("logoZoomOut");
      }, 13000);

      //Box expand
      setTimeout(function() {
        $("#box_top").removeClass("collapse_top").addClass("expand_top");
        $("#box_bottom").removeClass("collapse_bottom").addClass("expand_bottom");
        $("#logo_end").removeClass("hideUP").addClass("showUP").addClass("logoZoomIn");
      }, 13500);

      //Baseline
      setTimeout(function() {
        $("#baseline_nrma").removeClass("hideUP").addClass("showUP").addClass("fadeIN");
        $("#baseline_de_better").removeClass("hideUP").addClass("showUP").addClass("baseline_slideIN");
      }, 13900);

      //CTA
      setTimeout(function() {
        $("#clickthrough-button").removeClass("hideUP").addClass("showUP").addClass("fadeIN");
      }, 14500);

      setTimeout(function() {
        loops += 1;
        animation();
      }, 16200);
    }
  })();




}
