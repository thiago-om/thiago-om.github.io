// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var container_dc;
var content_dc;
var exitBtn;



dcrmInit = function(){

  container_dc = document.getElementById('container_dc');
  content_dc   = document.getElementById('content_dc');
  exitBtn    = document.getElementById('background_exit_dc');

	// Added Listeners
	addListeners();

}

addListeners = function (){
	exitBtn.addEventListener('click', onExitHandler, false);
}


onExitHandler = function(e){
	Enabler.exit('HTML5_Background_Clickthrough');
}


window.onload = function() {
  /* Initialize Enabler */
  if (Enabler.isInitialized()) {
    dcrmInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, dcrmInit);
  }
}

$(document).ready(function onDocumentReady() {
var time = 0;

	function animate(loops){
	var i;

		for(i=0; i<=loops; i++){
			setTimeout(function(){ 
				$(".number01 img").addClass("frame01");
				$(".number02 img").addClass("frame01");
				$(".number03 img").addClass("frame01");
			}, (time += 400));
			setTimeout(function(){ 
				$(".text_end").addClass("frameend");
			}, (time += 5000));
			setTimeout(function(){ 
				$(".number01 img").removeClass("frame01");
				$(".number02 img").removeClass("frame01");
				$(".number03 img").removeClass("frame01");
			}, (time += 5500));
			if( i < loops ){
				setTimeout(function(){ 
			    	$(".text_end").removeClass("frameend");
			    }, (time += 9000));
			};
		};
	};
	animate(5);
});