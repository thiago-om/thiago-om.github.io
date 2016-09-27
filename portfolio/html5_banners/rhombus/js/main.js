"use strict";

// call animation function below
var animation = function animation() {

  var timelineProgress = function timelineProgress(position) {
    console.log("[custom] animation " + position);
  };

  var tl = new TimelineMax({
    repeat: 1,
    yoyo: false,
    repeatDelay: 4,
    onStart: timelineProgress,
    onStartParams: ["start"],
    onComplete: timelineProgress,
    onCompleteParams: ["end"]
  });

  // CONTROL MODULE FUNCTIOn
  ControlModule(tl);

  tl.addLabel("frame01").to(".f1", 0.5, { opacity: 1 }, 0).to(".f1_c1", 0.5, { opacity: 0 }, 1.5).to(".f1", 0.5, { opacity: 0 }).addLabel("frame02").to(".f2_c1", 0.5, { opacity: 1 }, "frame02-=0.75").to(".f2_bg", 0.5, { opacity: 1 }, "frame02-=1").to(".vf_logo", 0.5, { left: "+=57" }, "frame02-=1").to(".f2_c1, .vf_toggle", 0.5, { opacity: 0 }, "+=1.5").to(".vf_logo", 0.25, { opacity: 0 }, "-=0.5").addLabel("frame03").set(".rhombus", { opacity: 1, top: 38, right: 80, borderRadius: 26 }).to(".rhombus", 0.5, {
    ease: Power1.easeInOut,
    top: "+=5",
    boxShadow: "0px 0px 15px 15px #E30613",
    rotation: "+=405deg",
    transformOrigin: "900px 3px"
  }).to(".rhombus", 0.1, { y: 5, x: 15, boxShadow: "0px 0px 0px 0px" }, "-=0.4").to(".f3_vf_logo", 0.25, { opacity: 1 }, "-=0.5").to(".f3_c1", 0.5, { opacity: 1 }).to(".f3_bg", 0.5, { opacity: 1 }, "-=0.5").to(".f3_tcs", 0.5, { opacity: 1 }, "-=0.5").to(".f3_c1", 0.5, { opacity: 0 }, "+=2").addLabel('frame04').to(".f4", 0.5, { opacity: 1 }).to(".f4", 0.5, { opacity: 0 }, "+=2").addLabel("frame05").staggerTo(".f5", 0.5, { opacity: 1 }, 1, "frame05").addLabel("frame06").to(".cta", 0.5, { opacity: 1 }, "frame06").to(".f5_c1", 0.5, { y: -5 }, 1, "frame06").to(".f6_c2", 0.5, { opacity: 1 }, "frame06").to(".vf_cta", 0.5, { opacity: 1 }, "frame06");

  console.log("[custom] loop duration: " + tl.duration() + "s");
  console.log("[custom] total duration: " + tl.totalDuration() + "s");

  // tl.seek("frame02+=1")
  // .pause();
};
"use strict";

// ANIMATION CONTROLS MODULE
function ControlModule(tl) {
  var listen = function listen(el, handler) {
    return el.addEventListener("click", handler);
  };
  var animationControls = document.getElementById("animationControls");
  var btnTypes = ['play', 'pause', 'resume', 'reverse', 'restart'];
  var btns = btnTypes.map(createBtn);

  // function to be mapped to btns array
  function createBtn(btnTxt) {
    var newBtn = document.createElement("button");
    var t = document.createTextNode(btnTxt);
    newBtn.appendChild(t);
    newBtn.setAttribute("id", btnTxt + "_btn");
    return animationControls.appendChild(newBtn);
  }

  // listen to all the buttons
  listen(play_btn, playHandler);
  listen(pause_btn, pauseHandler);
  listen(resume_btn, resumeHandler);
  listen(reverse_btn, reverseHandler);
  listen(restart_btn, restartHandler);

  // control timeline with all the buttons
  function playHandler() {
    tl.play();
  }
  function pauseHandler() {
    tl.pause();
  }
  function resumeHandler() {
    tl.resume();
  }
  function reverseHandler() {
    tl.reverse();
  }
  function restartHandler() {
    tl.restart();
  }
}
//# sourceMappingURL=main.js.map
