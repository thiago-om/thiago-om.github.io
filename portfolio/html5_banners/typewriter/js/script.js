// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var bgExit;

//Function to run with any animations starting on load, or bringing in images etc
init = function(){

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
	//Enabler.exit('HTML5_Background_Clickthrough');

	//AdWords Click
	ExitApi.exit();
	console.log('Exit code Initialized');
}
//Initialize Enabler


function politeInit(){
	//Load in Javascript
	var extJavascript = document.createElement('script');
	extJavascript.setAttribute('type', 'text/javascript');
	//extJavascript.setAttribute('src', Enabler.getFilename('DCRM_HTML5_inPage_Polite_728x90.js'));
	document.getElementsByTagName('head')[0].appendChild(extJavascript);

	//Load in CSS
	var extCSS=document.createElement('link');
	extCSS.setAttribute("rel", "stylesheet");
	extCSS.setAttribute("type", "text/css");
	//extCSS.setAttribute("href", Enabler.getFilename("DCRM_HTML5_inPage_Polite_728x90.css"));
	document.getElementsByTagName("head")[0].appendChild(extCSS);
	document.getElementById("container_dc").style.opacity=1;
	document.getElementById("loading_image_dc").style.opacity=0;
}




// NOTE the typewriting effect
// selects the .mask class and modifies its
// left position and opacity to give the effect of a blinkig
// cursor that reveals, or 'types' text
function typewriter(increment, delay) {
	var mask = $('.mask');
	var leftProperty = 3.6;

	setTimeout(function(){
		leftProperty += increment;
		mask.css('left', leftProperty + 'em');
	},delay);

};

// highlighter will do the same as the typewriter
function highlighter(increment, delay) {
	var mask2 = $('.mask2');
	var formulaSelected = $('.formula-selected')
	var hightlightWidth = 1;
	// var leftProperty = 3.6;
	var width = 0;

	setTimeout(function(){
		width += increment;
		mask2.css('width', width + 'em');
	},delay);

};

// blinking cursor by changing .mask opacity
function cursorBlink(selector,blink, delay){
		var mask = $(selector);
	setTimeout(function(){
		mask.css('opacity', blink);
	}, delay);

};


function typeTheFunction(){
	typewriter(0.98, 188); // H
	typewriter(1.86, 375); // 8
	typewriter(2.86, 562.5); // =
	typewriter(3.81, 825); // S
	typewriter(4.91, 938); // U
	typewriter(6.11, 1013); // M
	typewriter(7.11, 1200); // (
	typewriter(8.09, 1500); // A
	typewriter(9.07, 1688); // 2
	typewriter(9.77, 1838); // *
	typewriter(10.62, 2025); // B
	typewriter(11.6, 2250); // 6
	typewriter(12.58, 2438); // )
	cursorBlink('.mask', 0, 2750);
	cursorBlink('.mask', 1, 3250);
	cursorBlink('.mask', 0, 3650);
	cursorBlink('.mask', 1, 4250);
	cursorBlink('.mask', 0, 4750);
};

function highlightTheFunction(){
	var formula     = $('.formula');
	var mask2       = $('.mask2');
	setTimeout(function(){
		mask2.css('opacity', '1');
	},4800);
	highlighter(0.98, 4800);  // H
	highlighter(1.86, 4900);  // 8
	highlighter(2.86, 4970);  // =
	highlighter(3.81, 5000);  // S
	highlighter(4.91, 5090);  // U
	highlighter(6.11, 5120);  // M
	highlighter(7.11, 5200);  // (
	highlighter(8.09, 5290);  // A
	highlighter(9.07, 5350);  // 2
	highlighter(9.77, 5400);  // *
	highlighter(10.62, 5500); // B
	highlighter(11.6, 5600);  // 6
	highlighter(13.18, 5700); // )
	cursorBlink(0, 5900);
	// after the formula animation, hide the formula
	setTimeout(function(){
		// hide the initial formula
		formula.css('opacity', '0');
	},5900);

};

function typeTheSpreadsheet(){
	setTimeout(function(){
		var highlighted = $('.formula-selected img:first-of-type');
		var spreadOut = $('.formula-selected img:last-of-type');
		// hide the highlighted formula
		highlighted.css('opacity', '0');
		// show spread out text
		spreadOut.css('opacity', '1');
	},6100);
	highlighter(0.98, 6100); //
	highlighter(1.86, 6200); //
	highlighter(2.86, 6270); //
	highlighter(3.81, 6300); //
	highlighter(4.91, 6390); //
	highlighter(6.11, 6420); //
	highlighter(7.11, 6500); //
	highlighter(8.09, 6590); //
	highlighter(9.07, 6650); //
	highlighter(9.77, 6700); //
	highlighter(10.62,6800); //
	highlighter(11.6, 6900); //
	highlighter(14.18,7000); //

	// cursor blink effect on mask2 involved removing the border
	// as hiding the mask would hide the 'spread-out' text
	setTimeout (function(){
		$('.mask2').css('border-right', '0')
	}, 7250)
	setTimeout (function(){
		$('.mask2').css('border-right', '2px solid white')
	}, 7650)
	setTimeout (function(){
		$('.mask2').css('border-right', '0')
	}, 8050)

};

function xeroIn(){
	setTimeout(function(){
		$.each([
			$('.input'),
			$('.mask1'),
			$('.mask2'),
			$('.xero-in')
		], function(){
			$(this).animate({
				left: '-=360'
			}, 1000);
		});
	},8300)
};

$(document).ready(function() {
	typeTheFunction();
	highlightTheFunction();
	typeTheSpreadsheet();
	xeroIn();

});
