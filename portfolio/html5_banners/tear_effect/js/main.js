// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var dcLogo;

onLoadHandler = function() {
  console.log("onLoadHandler")
  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
  }
}

init = function() {
  if (Enabler.isPageLoaded()) {
    politeInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
  }
}

//Function to run with any animations starting on load, or bringing in images etc

politeInit = function() {
  //Assign All the elements to the element on the page
  container = document.getElementById('container_dc');
  content = document.getElementById('content_dc');
  // dcLogo = document.getElementById('doubleclick_logo_dc');
  expandedBgExit = document.getElementById('expanded_background_exit_dc');
  close_btn = document.getElementById('close_btn_dc');
  show_ad = document.getElementById('show_ad_dc');
  // close_ad = document.getElementById('close_ad_dc');
  expand_content = document.getElementById('expand_content_dc');
  expandedBgCTAExit = document.getElementById('expanded_cta_exit_dc')
  Enabler.setExpandingPixelOffsets(0, 0, 728, 180);
  //Bring in listeners
  addListeners();

  //Show Ad
  container.style.display = "block";
}


//Add Event Listeners
addListeners = function() {

  expandedBgCTAExit.addEventListener('click', expandedCTAExitHandler, false);
  expandedBgExit.addEventListener('click', expandedBgExitHandler, false);
  content.addEventListener('click', onExpandHandler, false);
  close_btn.addEventListener('click', onCloseClickHandler, false);
  show_ad.addEventListener('click', onOpenAdHandler, false);
  // close_ad.addEventListener('click', onCloseAdHandler, false);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, onExpandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, onFinishExpandHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, onCollapseHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, onFinishCollapseHandler);
}

// Added manually
onOpenAdHandler = function() {
  //Show Ad
  container.style.display = "block";
  close_ad.style.display = "inline";
}

onCloseAdHandler = function() {
  //Manual Close
  Enabler.reportManualClose();
  Enabler.close();
  //Hide Ad
  container.style.display = "none";
  close_ad.style.display = "none";
}

onCloseClickHandler = function() {
  //Manual Close
  Enabler.reportManualClose();
  // Enabler.counter('Rich Media Manual Close');
  //Collapse Ad
  Enabler.requestCollapse();
  //Hide Expand
  expand_content.style.display = "none";
}

// NOTE custom exit handler to alert Double Click of exit initiated by CTA
expandedCTAExitHandler = function() {
  //Call Exits
  Enabler.exit('HTML5_Expanded_CTA');
  //Collapse Ad
  Enabler.requestCollapse();
  //Hide Expand
  // expand_content.style.display = "none";
}

expandedBgExitHandler = function() {
  //Call Exits
  Enabler.exit('HTML5_Expanded_Clickthrough');
  //Collapse Ad
  Enabler.requestCollapse();
  //Hide Expand
  // expand_content.style.display = "none";
}

onExpandHandler = function() {
  Enabler.requestExpand();
  expand_content.style.display = "block";
}

onExpandStartHandler = function() {
  Enabler.finishExpand();
}

onFinishExpandHandler = function() {
  Enabler.startTimer('panel_1 Expansion');
}

onCollapseHandler = function() {
  Enabler.finishCollapse();
  expand_content.style.display = "none";
}

onFinishCollapseHandler = function() {
  //Stop Timer
  Enabler.stopTimer('panel_1 Expansion');
}


window.addEventListener('load', onLoadHandler);

// Only start the animate function if the enabler is initialised
window.onload = function() {
  if (Enabler.isInitialized()) {
    animate();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, animate);
  }
};


// ANIMATIONS
// NOTE animation transition timings handled by CSS
// store animate as variable to call after enabler initialised
var animate = function() {
  // Start animation - tearing of eyes

  setTimeout(function() {
    $(".eyes_close").addClass('hide')
  }, 2000);

  setTimeout(function() {
    $(".eyes_tear_1").addClass('tear')
  }, 600);
  setTimeout(function() {
    $(".eyes_tear_1").addClass('hide')
  }, 750);

  setTimeout(function() {
    $(".eyes_tear_2").addClass('tear')
  }, 700);
  setTimeout(function() {
    $(".eyes_tear_2").addClass('hide')
  }, 850);

  setTimeout(function() {
    $(".eyes_tear_3").addClass('tear')
  }, 950);
  setTimeout(function() {
    $(".eyes_tear_3").addClass('hide')
  }, 1000);

  setTimeout(function() {
    $(".eyes_tear_4").addClass('tear')
  }, 1800);
  setTimeout(function() {
    $(".eyes_tear_4").addClass('hide')
  }, 1950);

  setTimeout(function() {
    $(".eyes_tear_5").addClass('tear')
  }, 1500);
  setTimeout(function() {
    $(".eyes_tear_5").addClass('hide')
  }, 1600);

  setTimeout(function() {
    $(".eyes_tear_6").addClass('tear')
  }, 1750);
  setTimeout(function() {
    $(".eyes_tear_6").addClass('hide')
  }, 1900);


  // frame 01
  // hide eyes show lexhibition
  setTimeout(function() {
    $.each([
      $(".eyes_close"),
      $(".lexhibition")
    ], function() {
      $(this).addClass('frame01');
    })

  }, 1800);


  // frame 02
  // hide lexhibition show comparison-rate, .cars_[1,2,3] and .car_labels
  setTimeout(function() {
    $.each([
      $(".lexhibition"),
      $(".comparison-rate"),
      $(".car_1"),
      $(".car_2"),
      $(".car_3"),
      $(".car_labels")
    ], function() {
      $(this).addClass('frame02');
    })

  }, 4000);
  // Show and hide .disclaimer div
  $('.expand_disclaimer').click(function() {
    $('.disclaimer').toggleClass('hide');
  });

  // hide disclaimer when user clicks on top right X
  $('.btn_disclaimer-close').click(function() {
    $('.disclaimer').toggleClass('hide');
  });

  // $('#btn_close').click(function() {
  //   $('#content_dc').toggleClass('hide');
  // });


};
