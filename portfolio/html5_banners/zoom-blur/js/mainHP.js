function enablerInitHandler() {
  console.log("[custom] DCS Enabler Init"), Enabler.isPageLoaded() ? pageLoadedHandler() : Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler)
}

function pageLoadedHandler() {
  console.log("[custom] Page Loaded"), Enabler.isVisible() ? adVisibilityHandler() : Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler)
}

function adVisibilityHandler() {
  console.log("[custom] Ad Visible"), document.getElementById("bg-exit").addEventListener("click", bgExitHandler, !1), document.getElementById("bg-exit").addEventListener("mouseover", bgRollOverHandler, !1), document.getElementById("bg-exit").addEventListener("mouseout", bgRollOutHandler, !1), _customAd()
}

function bgRollOverHandler(e) {
  console.log("roll over")
}

function bgRollOutHandler(e) {
  console.log("roll out")
}

function bgExitHandler(e) {
  Enabler.exit("Background Exit")
}

function applyBlur() {
  TweenMax.set(["#frame1"], {
    webkitFilter: "blur(" + blurElement.a + "px)",
    filter: "blur(" + blurElement.a + "px)"
  })
}

function _customAd() {


  console.log("Animation is playing");
  var t = 1,
    l = 0,
    o = new TimelineMax({
      repeatDelay: 0,
      yoyo: !1
    });
  o.to(container, 0.1, {autoAlpha: 1})
    .to(logos, 1, { opacity: 1})
    .to(frame1, 2, {opacity: 1, scale: 1.05, x: -250}, "-=0.5")
    .to(frame3Text, 1, { opacity: 1,x: 30}, "-=0.5")
    .to(cta1, 1, { opacity: 1})
    .from(light2, 1.5, { opacity: 0, scale: 1.5}, "-=1.8")
    .to("#logos, .terms, #light2", 1, {y: -20})
}
window.onload = function() {
  console.log("[custom] Window Loaded"), Enabler.isInitialized() ? enablerInitHandler() : Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler)};
var blurElement = {a: 50};
TweenMax.to(blurElement, 5, {a: 0, onUpdate: applyBlur }, "=8.0");
