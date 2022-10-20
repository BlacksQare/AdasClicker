console.log("script.js loaded");

var APS=0;
var upgrade_cost=5;

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

var AdasCoins = 0;

async function mainButton(){
    AdasCoins+=1;
    document.getElementById("points-points").innerHTML=AdasCoins;
    document.getElementById("background").style.width="130%";
    document.getElementById("background").style.height="130%";
    document.getElementById("main-button").style.width="280px";
    await sleep(50);
    document.getElementById("background").style.width="120%";
    document.getElementById("background").style.height="120%";
    document.getElementById("main-button").style.width="300px";
}

async function AddAdas(ADAS){
    for(i=0; i<6; i++){
        AdasCoins+=Math.floor(ADAS/6);
        document.getElementById("points-points").innerHTML=AdasCoins;
        await sleep(1000/6);
    }
    AdasCoins+=ADAS%6;
    document.getElementById("points-points").innerHTML=AdasCoins;
}

function upg1(){
    if(upgrade_cost<=AdasCoins){
        AdasCoins-=upgrade_cost;
        upgrade_cost=Math.floor(upgrade_cost*1.5);
        APS+=1;
        document.querySelector(".upgrade-cost").innerHTML=upgrade_cost;
        document.getElementById("APS").innerHTML=APS+" A/s";
    }
}

async function upg(){
    while(true){
        await AddAdas(APS);
        await sleep(1);
    }
}

document.querySelector(".upgrade-cost").innerHTML=upgrade_cost;
upg();