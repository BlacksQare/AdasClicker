console.log("bottombar.js loaded");

var bottombar=document.querySelector("#bottombar");

bottombar.addEventListener("touchstart", startTouch, false);
bottombar.addEventListener("touchmove", moveTouch, false);


var initialX = null;
var initialY = null;

  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

  function moveTouch(e) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) < Math.abs(diffY)) {
        if (diffY > 0) {
            console.log("swiped up");
            document.getElementById("bottombar").style.height="70%";
            document.getElementById("main-button").style.top="30%";
        }
        else{
            console.log("swiped down");
            document.getElementById("bottombar").style.height="100px";
            document.getElementById("main-button").style.top="50%";
        }
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
  };