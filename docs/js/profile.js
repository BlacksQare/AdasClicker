console.log("profile.js loaded");

document.getElementById("profile-panel-container").style.width=window.innerWidth-30+"px";

var profile=document.getElementById("profile-panel");

profile.addEventListener("touchstart", startTouch);
profile.addEventListener("touchmove", moveTouch);
profile.addEventListener("touchend", endTouch);

var initialX=null;
// var diffX=null;
var diffX=null;
var initialWidth=null;
var deviceWidth=null;

function startTouch(e) {
    deviceWidth=window.innerWidth;
    initialWidth=profile.clientWidth;
    // initialX = e.touches[0].clientX;
    initialX = e.touches[0].clientX;
  };

function moveTouch(e) {
    document.getElementById("profile-panel").style.borderTopRightRadius="0";
    document.getElementById("profile-panel").style.borderBottomRightRadius="0";
    document.getElementById("profile-panel").style.transition="0s"
    // if (initialX === null) {
    // return;
    // }

    if (initialX === null) {
    return;
    }
    // var currentX = e.touches[0].clientX;
    var currentX = e.touches[0].clientX;

    // diffX = initialX - currentX;
    diffX = initialX - currentX;

    console.log(currentX);
    if(profile.clientWidth<=deviceWidth){
        profile.style.opacity=Math.abs(currentX/deviceWidth-1);
        profile.style.width=initialWidth+diffX+"px";
    }
};

function endTouch(e){
  profile.style.transition="0.2s";
  // if (Math.abs(diffX) < Math.abs(diffY)) {
      if (diffX > 0 || Math.abs(diffX)<=150) {
          showProfilePanel();
      }
      else if(Math.abs(diffX)>=150){
          hideProfilePanel();
      }
  // }

  // initialX = null;
  initialX = null;
}