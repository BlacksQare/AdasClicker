console.log("script.js loaded");

var APS=0;
var upgrade_cost=5;
var total_adas=0;
var tota_spent_adas=0;

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

var AdasCoins = 0;

async function showBottomBar(){
    document.getElementById("bottombar").style.height="80%";
    // document.getElementById("main-button").style.top="30%";
    // document.getElementById("main-button").style.width="250px"
}

async function hideBottomBar(){
    document.getElementById("bottombar").style.height="100px";
    // document.getElementById("main-button").style.top="50%";
    // document.getElementById("main-button").style.width="300px"
}

function showProfilePanel(){
    document.getElementById("profile-panel").style.width="100%";
    document.getElementById("profile-panel").style.opacity="1";
    document.getElementById("profile-panel").style.borderTopRightRadius="30px";
    document.getElementById("profile-panel").style.borderBottomRightRadius="30px";
}

function hideProfilePanel(){
    document.getElementById("profile-panel").style.transition="0.2s";
    document.getElementById("profile-panel").style.width="50px";
    document.getElementById("profile-panel").style.opacity="0";
    document.getElementById("profile-panel").style.borderTopRightRadius="0";
    document.getElementById("profile-panel").style.borderBottomRightRadius="0";
}

async function mainButtonAnimation(){
    // document.getElementById("background").style.width="130%";
    // document.getElementById("background").style.height="130%";
    document.getElementById("main-button").style.transform="translate(-50%,-50%) scale(0.9)";
    await sleep(150);
    // document.getElementById("background").style.width="120%";
    // document.getElementById("background").style.height="120%";
    document.getElementById("main-button").style.transform="translate(-50%,-50%) scale(1)";
}

async function mainButton(){
    AdasCoins+=1;
    total_adas+=1;
    document.getElementById("points-points").innerHTML=AdasCoins;
    await mainButtonAnimation();
}

async function AddAdas(ADAS){
    for(i=0; i<6; i++){
        AdasCoins+=Math.floor(ADAS/6);
        total_adas+=Math.floor(ADAS/6);
        document.getElementById("points-points").innerHTML=AdasCoins;
        await sleep(1000/6);
    }
    AdasCoins+=ADAS%6;
    total_adas+=ADAS%6;
    document.getElementById("points-points").innerHTML=AdasCoins;
}

function upg1(){
    if(upgrade_cost<=AdasCoins){
        AdasCoins-=upgrade_cost;
        tota_spent_adas+=upgrade_cost;
        upgrade_cost=Math.floor(upgrade_cost*1.5);
        if(APS!=0){
            APS=Math.ceil(APS*1.3);
        }
        else{
            APS+=1;
        }
        document.querySelector(".upgrade-cost").innerHTML=upgrade_cost;
        document.getElementById("APS").innerHTML=APS+" A/s";
    }
}

async function upg(){
    while(true){
        await AddAdas(APS);
        document.getElementById("total-spent-adas").innerHTML=tota_spent_adas;
        document.getElementById("total-adas").innerHTML=total_adas;
        await sleep(1);
    }
}

document.querySelector(".upgrade-cost").innerHTML=upgrade_cost;
upg();