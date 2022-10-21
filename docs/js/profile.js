document.addEventListener("touchstart", startTouch);
document.addEventListener("touchmove", moveTouch);
document.addEventListener("touchend", endTouch);

var initialX=null;
var initialY=null;
var diffX=null;
var diffY=null;
var profile=document.getElementById("profile-panel");
var initialWidth=null;
var position=null;

function startTouch(e) {
  initialWidth=profile.clientWidth;
  position=profile.getBoundingClientRect();
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
  e.preventDefault();
};  

function moveTouch(e) {
  console.log(diffX);
  profile.style.transition="0s"
  if (initialX === null) {
    return;
  }
  if (initialY === null) {
    return;
  }
  var currentY = e.touches[0].clientY;
  var currentX = e.touches[0].clientX;
  diffX = initialX - currentX;
  diffY = initialY - currentY;

  if (Math.abs(diffX)<=100 && diffX>0){
    return
  }
  if (diffX>0){
    diffX-=100;
  }
  console.log(diffX);
  // profile.style.top=position.top;
  profile.style.width=initialWidth+diffX+"px";
  e.preventDefault();
  // }
};

function endTouch(e){
  // if(!bottombar_triggered){
    if (Math.abs(diffX)>Math.abs(diffY)){
    console.log(diffX, Math.abs(diffX), Math.abs(diffX)>=150);
    profile.style.transition="0.1s";
    if (diffX>=150 && diffX>0) {
      showProfilePanel();
    }
    else if(diffX<=-150 && diffX<0){
      hideProfilePanel();
    }
    else if(diffX>0){
      hideProfilePanel();
    }
    else if(diffX<0){
      showProfilePanel();
    }
    // else{
    //   showProfilePanel();
    // }
  }
    initialX = null;
    initialY = null;
    e.preventDefault();
  // }
}