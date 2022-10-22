console.log("bottombar.js loaded");

var bottombar=document.getElementById("bottombar");

bottombar.addEventListener("touchstart", startTouch);
bottombar.addEventListener("touchmove", moveTouch);
bottombar.addEventListener("touchend", endTouch);

// window.addEventListener("touchstart", startTouch);
// window.addEventListener("touchmove", moveTouch);
// window.addEventListener("touchend", endTouch);

// var initialX=null;
var initialY=null;
// var diffX=null;
var diffY=null;
var initialHeight=null;
var panelInitialHeight=null;

function startTouch(e) {
    initialHeight=bottombar.clientHeight;
    // initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

function moveTouch(e) {
  document.getElementById("bottombar").style.transition="0s"
  // if (initialX === null) {
    // return;
  // }

  if (initialY === null) {
    return;
  }

  // var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  // diffX = initialX - currentX;
  diffY = initialY - currentY;

  bottombar.style.height=initialHeight+diffY+"px";
  console.log(diffY);
};

async function endTouch(e){
  document.getElementById("bottombar").style.transition="0.1s";
  // if (Math.abs(diffX) < Math.abs(diffY)) {
      if (diffY > 0 || Math.abs(diffY)<=150) {
          showBottomBar();
      }
      else if(Math.abs(diffY)>=150){
          hideBottomBar();
      }
  // }

  // initialX = null;
  await sleep(50);
  initialY = null;
}