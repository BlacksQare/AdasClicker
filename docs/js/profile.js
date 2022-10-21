document.addEventListener("touchstart", startTouch);
document.addEventListener("touchmove", moveTouch);
document.addEventListener("touchend", endTouch);

var initialX=null;
var initialY=null;
var diffX=null;
var diffY=null;
var initialLeft=document.getElementById("profile-panel").style.left;
var initialRight=null;
var profile=document.getElementById("profile-panel");
var position=null;

function startTouch(e) {
    initialLeft=profile.style.left;
    initialRight=profile.style.right;
    position=profile.getBoundingClientRect();
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

function moveTouch(e) {
  profile.style.transition="0s"
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  // var currentY = e.touches[0].clientY;

  diffX = currentX - initialX;
  // diffY = initialY - currentY;

  // if(profile.style.left="100%"){
  //   profile.style.left="0";
  //   profile.style.right=position.left+diffX;
  // }
  // else{
  //   profile.style.right="0";
  //   profile.style.left=postition.left+diffX;
  // }
  if(position.left+diffX>0){
  profile.style.left=position.left+diffX+"px";
  }
};

function endTouch(e){
  console.log(diffX, Math.abs(diffX));
  profile.style.transition="0.1s";
      if (diffX<0 && Math.abs(diffX)>=-150) {
          showProfilePanel();
      }
      else if(diffX>=0){
          hideProfilePanel();
      }
  
}