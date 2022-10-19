console.log("bottombar.js loaded");

var bottombar=document.getElementById("bottombar");

bottombar.addEventListener("touchstart", startTouch);
bottombar.addEventListener("touchmove", moveTouch);
bottombar.addEventListener("touchend", endTouch);

// window.addEventListener("touchstart", startTouch);
// window.addEventListener("touchmove", moveTouch);
// window.addEventListener("touchend", endTouch);

var initialX=null;
var initialY=null;
var diffX=null;
var diffY=null;
var initialHeight=bottombar.clientHeight;

function startTouch(e) {
    initialHeight=bottombar.clientHeight;
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

function moveTouch(e) {
  document.getElementById("bottombar").style.transition="0s"
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  diffX = initialX - currentX;
  diffY = initialY - currentY;

  bottombar.style.height=initialHeight+diffY+"px";
  console.log(diffX, diffY);
};

function endTouch(e){
  document.getElementById("bottombar").style.transition="0.1s";
  if (Math.abs(diffX) < Math.abs(diffY)) {
      if (diffY > 0 || Math.abs(diffY)<=150) {
          document.getElementById("bottombar").style.height="70%";
          document.getElementById("main-button").style.top="30%";
          document.getElementById("main-button").style.width="250px"
      }
      else if(Math.abs(diffY)>=150){
          document.getElementById("bottombar").style.height="100px";
          document.getElementById("main-button").style.top="50%";
          document.getElementById("main-button").style.width="300px"
      }
  }

  initialX = null;
  initialY = null;
}