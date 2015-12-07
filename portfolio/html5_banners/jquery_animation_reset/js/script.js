"use strict"

var ytp;
var firstPlay = true;
var videoReady = false;

var player = {
  'containerId': 'video-player',
  'videoId': 'GBei58Oqyf0',
  'videoWidth': 356,
  'videoHeight': 200,
  'suggestedQuality': 'medium',
  'playerVars': {
    'autoplay': 1,
    /*With autoplay enabled, the video won't get video views. */
    'rel': 0,
    'showinfo': 0,
  }
};

//----Setting up----

// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
  // Start ad, initialize animation,
  // load in your image assets, call Enabler methods,
  // and/or include other Studio modules.
  // Or also, you can start the Polite Load
  InitMH();
}

function addListeners() {
  //Exits
  document.getElementById("bg-exit").addEventListener('click', bgExitHandler, false);
  document.getElementById("cta-1").addEventListener('click', bgExitHandler, false);

  // YTClose Button
  document.getElementById("ytClose").addEventListener('click', btnYTCloseHandler, false);
}

//This function should be called only after the Enabler.isInitialized
function InitMH() {

  Enabler.loadScript(Enabler.getUrl('https://www.gstatic.com/doubleclick/studio/innovation/h5/ytplayer/ytp_v2.js'), YTFunction);

  //Adding listeners
  addListeners();

}

//----Exits----
function bgExitHandler(e) {
  Enabler.exitOverride('Background Exit', 'https://www.wotif.com');
  //  Enabler.exit('Background Exit');

  // NOTE custom function that stops lady from dancing
  stopDancing();
  // NOTE set animation duration and time to 0
  // this effectively stops the animation
  stopAnimation();

}



//----YTClose Button----
function btnYTCloseHandler(e) {
  Enabler.stopTimer('YTVideo Timer');
}

//----YouTube Player----
function YTFunction() {
  // YouTube player properties configuration.

  // Construct the YouTube player variable.
  ytp = new studioinnovation.YTPlayer(player);

  // Bind event listeners.
  bindListeners();
}

  // stop video at 15s
  function YTPlaying() {

  // NOTE @youtube start video muted
  ytp.mute();

  if (firstPlay) {
    Enabler.counter('YTVideo Play');
  } else {
    Enabler.counter('YTVideo Replay');
    firstPlay = false;
    if (ytp.isMuted) {
      ytp.unMute();
    }
  }
}


// YT Player State
function handleVideoStateChange(stateChangeEvent) {
  var playerState = stateChangeEvent.getPlayerState();

  switch (playerState) {
    case studioinnovation.YTPlayer.Events.PLAYING:
      YTPlaying();
      break;

    case studioinnovation.YTPlayer.Events.PAUSED:
      Enabler.counter('YTVideo Pause');

      // NOTE @youtube if paused, user has interacted
      // thus firstPlay rules need not apply
      firstPlay = false;

      Enabler.stopTimer('YTVideo Timer');
      break;

    case studioinnovation.YTPlayer.Events.TIMER_START:
      Enabler.startTimer('YTVideo Timer');
      break;

    case studioinnovation.YTPlayer.Events.TIMER_STOP:
      Enabler.stopTimer('YTVideo Timer');
      break;

    case studioinnovation.YTPlayer.Events.ENDED:
      Enabler.stopTimer('YTVideo Timer');
      firstPlay = false;
      break;
  }
}

function bindListeners() {

  ytp.addEventListener('statechange', handleVideoStateChange, false);

  // YouTube playback quartiles.
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_0_PERCENT, function() {
    Enabler.counter('YTVideo Percent 0');
  }, false);
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_25_PERCENT, function() {
    Enabler.counter('YTVideo Percent 25');
  }, false);
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_50_PERCENT, function() {
    Enabler.counter('YTVideo Percent 50');

    // NOTE @youtube stop video at 15s only when autoplayed for the first time
    if (firstPlay == true) {
      ytp.pauseVideo();

    }

  }, false);
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_75_PERCENT, function() {
    Enabler.counter('YTVideo Percent 75');
  }, false);
  ytp.addEventListener(studioinnovation.YTPlayer.Events.VIDEO_100_PERCENT, function() {
    Enabler.counter('YTVideo Percent 100');
  }, false);
}

// Background clouds animation

function cloudAnimation(delay,duration) {
  var clouds = $("#clouds");
  clouds.delay(delay).animate({
    'background-position': '-10%',
  }, duration, 'linear');
};


// Plane fly-in from right
function planeAnimation(delay,duration) {
  var plane = $("#plane");
  plane.delay(delay).animate({
    top: 90,
    left: -300,
    height: 45,
    width: 87
  }, duration);
};

// Plane fly-in from right
function planeFlipAnimation(delay,duration) {
  var planeFlip = $("#plane-flip");

  planeFlip.delay(delay).animate({
    top: 70,
    left: 90,
    height: 68,
    width: 131
  }, duration, 'swing');
};

function animate(){
  cloudAnimation(3000,26000);
  planeAnimation(3000,4100);
  planeFlipAnimation(7000,1800);
};

// NOTE @JQ select animated elements and stop their animation
function stopAnimation() {
  $.each([
    $("#plane"),
    $("#plane-flip"),
    $("#clouds")
  ], function(){
    // NOTE dequeue will make sure than any animations not yet triggered due to
    // delay will not do so. In this case, #plane-flip is delayed and was still coming into frame
    // without .dequeue()
    $(this).dequeue().stop(false, true);
  });
};

$(document).ready(function() {

  animate();

});


function stopDancing(){
  $('#dancing-lady').attr('src', 'img/dancing-lady.png');
};

setTimeout(function(){
  stopDancing();
}, 29000);






// YOUTUBE MUTE

function init() {
  // You can update the autoplay flag to 'true' to enable muted
  // autoplay although it won't work on iOS.
  creative.autoplay0 = false;
  creative.isClick0 = false;

  // Hide mute / unmute on iOS.
  if ((navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/iPod/i))) {
    creative.dom.video0.vidUnmuteBtn.style.opacity = 0;
    creative.dom.video0.vidMuteBtn.style.opacity = 0;
  }

  addVideoTracking0();

  addListeners();

  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}
